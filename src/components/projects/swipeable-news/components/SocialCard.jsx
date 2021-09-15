import React from 'react';
import SocialCardDraggable from './SocialCardDraggable';

function SocialCard(props) {
    const {
        currKey,
        category,
        currCategoryHeadlines,
        author,
        description,
        publishDate,
        source,
        title,
        url,
        urlImage,
        setCurrCategoryHeadlines,
    } = props;

    const imgBackground = {
        backgroundImage: `url(${urlImage})`,
    };

    const date = new Date(publishDate);
    const formattedPublishedDate =
        date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();

    const swipeMe = () => {
        const newCurrCategoryHeadlines = currCategoryHeadlines.map(
            (headlines) => {
                if (headlines.category === category) {
                    headlines.articles[currKey]['isDeleted'] = true;
                    return headlines;
                }
                return headlines;
            }
        );
        setCurrCategoryHeadlines(newCurrCategoryHeadlines);
    };

    const restoreMe = () => {
        const newCurrCategoryHeadlines = currCategoryHeadlines.map(
            (headlines) => {
                if (headlines.category === category) {
                    headlines.articles[currKey]['isDeleted'] = false;
                    return headlines;
                }
                return headlines;
            }
        );
        setCurrCategoryHeadlines(newCurrCategoryHeadlines);
    }

    return (
        <SocialCardDraggable
            threshold={0.2}
            onSwipe={swipeMe}
            backgroundText={'delete'}
            onUndoSwipe={restoreMe}
            undoSwipeText={'undo'}
            previewText={title}
        >
            <div className='SocialCard-section SocialCard-section__header-body'>
                <div className='SocialCard-section__header-icon'>
                    <img
                        className='SocialCard-section__header-icon--img'
                        src='img/ceen-square.png'
                        alt=''
                    />
                </div>
                <div className='SocialCard-section__header-text'>
                    <div className='SocialCard-section__header-text--source'>
                        {source.name}
                    </div>
                    <div className='SocialCard-section__header-text--publish-date'>
                        {formattedPublishedDate}
                    </div>
                </div>
            </div>
            <div
                className='SocialCard-section SocialCard-section__img-body'
                style={imgBackground}
            >
                <a
                    className='SocialCard-section__img-body--img-container'
                    href={url}
                    target='_blank'
                    rel='noreferrer'
                >
                    <img
                        className='SocialCard-section__img-body--img'
                        src={urlImage}
                        alt='not available'
                    />
                </a>
            </div>

            <div className='SocialCard-section SocialCard-section__text-body'>
                <div className='SocialCard-section__text-body--title'>
                    <a
                        className='SocialCard-section__text-body--title-link'
                        href={url}
                        target='_blank'
                        rel='noreferrer'
                    >
                        {title}
                    </a>
                </div>
                <div className='SocialCard-section__text-body--author'>
                    {author && author}
                </div>
                <div className='SocialCard-section__text-body--description'>
                    {description}
                </div>
            </div>
        </SocialCardDraggable>
    );
}

export default SocialCard;
