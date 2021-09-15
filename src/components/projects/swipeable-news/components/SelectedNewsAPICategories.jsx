import React from 'react';

function SelectedNewsAPICategories(props) {
    const { selectedCategories, setSelectedCategories } = props;

    const handleHoverOverDeleteBtn = (e) => {
        const parentEl = e.target.parentElement;
        if (parentEl.className.includes('active-news'))
            parentEl.className = 'selected-category--item';
        else parentEl.className = 'selected-category--item active-news';
    };

    const selectedNewsAPICategories = selectedCategories.map((category) => {
        const handleDeleteSelectedCategory = (e) => {
            const selectedCategory = category;
            setSelectedCategories(
                selectedCategories.filter(
                    (category) => category !== selectedCategory
                )
            );
        };
        return (
            <li className='selected-category--item' key={category}>
                <div className='selected-category__name'>{category}</div>
                <button
                    onClick={handleDeleteSelectedCategory}
                    onMouseOver={handleHoverOverDeleteBtn}
                    onMouseLeave={handleHoverOverDeleteBtn}
                    className='selected-category__delete-item-btn'
                >
                    x
                </button>
            </li>
        );
    });

    return <>{selectedNewsAPICategories}</>;
}

export default SelectedNewsAPICategories;
