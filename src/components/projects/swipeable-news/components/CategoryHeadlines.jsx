import React from 'react';
import SocialCards from './SocialCards';

function CategoryHeadlines(props) {
    const { currCategoryHeadlines, setCurrCategoryHeadlines} = props;

    const background = <span>List Demo</span>;
    let selectForm = currCategoryHeadlines.map((category, id) => {
        return (
            <SocialCards
                key={`category-${category.category}`}
                background={background}
                currCategoryHeadlines={currCategoryHeadlines}
                categoryArticle={category.articles}
                setCurrCategoryHeadlines={setCurrCategoryHeadlines}
                category={category.category}
            />
        );
    });

    return <>{selectForm}</>;
}

export default CategoryHeadlines;
