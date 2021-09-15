import React from 'react';

import '../styles/social-card.scss';

// Thanks Lukas Marx for the majority of this code
// Building a Swipeable List with React:
// https://malcoded.com/posts/react-swipeable-list/
//
// Changes:
// Changed CSS to fix UI/UX
// Added undo functionality:
//    Prop "underSwipeText" can change undo keyword
//    onUndoSwipe() handles function on undo

class SocialCardDraggable extends React.Component {
    // DOM Refs
    listElement;
    wrapperBody;
    wrapper;
    background;
    undoSwipe;

    // Drag & Drop
    dragStartX = 0;
    left = 0;
    dragged = false;

    // FPS Limit
    startTime;
    fpsInterval = 1000 / 60;
    thresholdDefault = 0.3;

    constructor(props) {
        super(props);

        this.listElement = null;
        this.wrapperBody = null;
        this.wrapper = null;
        this.background = null;
        this.undoSwipe = null;

        this.onMouseMove = this.onMouseMove.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);
        this.onDragStartMouse = this.onDragStartMouse.bind(this);
        this.onDragStartTouch = this.onDragStartTouch.bind(this);
        this.onDragEndMouse = this.onDragEndMouse.bind(this);
        this.onDragEndTouch = this.onDragEndTouch.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
        this.updatePosition = this.updatePosition.bind(this);
        this.onClicked = this.onClicked.bind(this);

        this.onSwiped = this.onSwiped.bind(this);
        this.onUndoSwiped = this.onUndoSwiped.bind(this);
    }

    componentDidMount() {
        window.addEventListener('mouseup', this.onDragEndMouse);
        window.addEventListener('touchend', this.onDragEndTouch);
    }

    componentWillUnmount() {
        window.removeEventListener('mouseup', this.onDragEndMouse);
        window.removeEventListener('touchend', this.onDragEndTouch);
    }

    onDragStartMouse(evt) {
        this.onDragStart(evt.clientX);
        window.addEventListener('mousemove', this.onMouseMove);
    }

    onDragStartTouch(evt) {
        const touch = evt.targetTouches[0];
        this.onDragStart(touch.clientX);
        window.addEventListener('touchmove', this.onTouchMove);
    }

    onDragStart(clientX) {
        this.dragged = true;
        this.dragStartX = clientX;
        this.listElement.className = 'SwipableListItem';
        this.startTime = Date.now();
        requestAnimationFrame(this.updatePosition);
    }

    onDragEndMouse(evt) {
        window.removeEventListener('mousemove', this.onMouseMove);
        this.onDragEnd();
    }

    onDragEndTouch(evt) {
        window.removeEventListener('touchmove', this.onTouchMove);
        this.onDragEnd();
    }

    onDragEnd() {
        if (this.dragged) {
            this.dragged = false;

            const threshold = this.props.threshold || this.thresholdDefault;

            if (this.left < this.listElement.offsetWidth * threshold * -1) {
                this.left = -this.listElement.offsetWidth * 2;
                this.background.style.transition = 'opacity 0.2s ease-out';
                this.background.style.opacity = 0;
                this.wrapper.className = 'Wrapper WrapperOut';
                this.listElement.className = 'BouncingSwipableListItem';
                this.undoSwipe.style.opacity = 1;
                this.undoSwipe.style.zIndex = 1;
                this.onSwiped();
            } else {
                this.left = 0;
            }
            console.log(this.left);
            this.listElement.style.transform = `translateX(${
                this.left / 1.2
            }px)`;
        }
    }

    onMouseMove(evt) {
        const left = evt.clientX - this.dragStartX;
        const threshold = this.props.threshold || this.thresholdDefault;
        if (this.left < this.listElement.offsetWidth * threshold * -1) {
            this.listElement.className = 'SwipableListItem warning';
        } else {
            this.listElement.className = 'SwipableListItem';
        }
        if (left < 0) {
            this.left = left;
        }
    }

    onTouchMove(evt) {
        const touch = evt.targetTouches[0];
        const left = touch.clientX - this.dragStartX;
        const threshold = this.props.threshold || this.thresholdDefault;
        if (this.left < this.listElement.offsetWidth * threshold * -1) {
            this.listElement.className = 'SwipableListItem warning';
        } else {
            this.listElement.className = 'SwipableListItem';
        }
        if (left < 0) {
            this.left = left;
        }
    }

    updatePosition() {
        if (this.dragged) requestAnimationFrame(this.updatePosition);

        const now = Date.now();
        const elapsed = now - this.startTime;

        if (this.dragged && elapsed > this.fpsInterval) {
            this.listElement.style.transform = `translateX(${this.left}px)`;

            const opacity = (Math.abs(this.left) / 100).toFixed(2);
            if (
                opacity < 1 &&
                opacity.toString() !== this.background.style.opacity
            ) {
                this.background.style.opacity = opacity.toString();
            }
            if (opacity >= 1) {
                this.background.style.opacity = '1';
            }

            this.startTime = Date.now();
        }
    }

    onClicked() {
        if (this.props.onClick) {
            this.props.onClick();
        }
    }

    onSwiped() {
        if (this.props.onSwipe) {
            this.props.onSwipe();
        }
    }

    onUndoSwiped() {
        this.wrapper.className = 'Wrapper';

        this.listElement.className = 'SwipableListItem';
        this.listElement.style.transform = `translateX(0px)`;
        this.left = 0;

        this.background.style.transition = 'opacity 3s ease-out';
        this.background.style.opacity = 1;

        this.undoSwipe.style.opacity = 0;
        this.undoSwipe.style.zIndex = -2;
        if (this.props.onUndoSwipe) {
            this.props.onUndoSwipe();
        }
    }

    render() {
        return (
            <div
                className='Wrapper__body'
                ref={(div) => (this.wrapperBody = div)}
            >
                <div className='Wrapper' ref={(div) => (this.wrapper = div)}>
                    <div
                        ref={(div) => (this.background = div)}
                        className='Background'
                    >
                        {this.props.backgroundText ? (
                            this.props.backgroundText
                        ) : (
                            <span>Delete</span>
                        )}
                    </div>

                    <div
                        onClick={this.onClicked}
                        ref={(div) => (this.listElement = div)}
                        onMouseDown={this.onDragStartMouse}
                        onTouchStart={this.onDragStartTouch}
                        className='SwipableListItem'
                    >
                        {this.props.children}
                    </div>
                </div>
                <div
                    ref={(div) => (this.undoSwipe = div)}
                    className='UndoSwipe'
                    style={{ opacity: 0 }}
                >
                    <div className='Preview__text'>
                        {this.props.previewText ? this.props.previewText : ''}
                    </div>
                    <div
                        className='UndoSwiped__text'
                        onClick={this.onUndoSwiped}
                    >
                        {this.props.undoSwipeText
                            ? this.props.undoSwipeText
                            : 'Undo'}
                    </div>
                </div>
            </div>
        );
    }
}

export default SocialCardDraggable;
