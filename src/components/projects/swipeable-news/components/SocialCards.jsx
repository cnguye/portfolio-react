import React from "react";
import SocialCard from "./SocialCard";

import "../styles/social-card.scss";

function SocialCards({
    currCategoryHeadlines,
    categoryArticle,
    setCurrCategoryHeadlines,
    category,
}) {
    let headlines = categoryArticle.map((element, index) => {
        return (
            <div className="SocialCard__body" key={`socialCard-${index}`}>
                <SocialCard
                    key={index}
                    author={element.author}
                    description={element.description}
                    publishDate={element.publishedAt}
                    source={element.source}
                    title={element.title}
                    url={element.url}
                    urlImage={element.urlToImage}
                    currCategoryHeadlines={currCategoryHeadlines}
                    setCurrCategoryHeadlines={setCurrCategoryHeadlines}
                    currKey={index}
                    category={category}
                />
            </div>
        );
    });
    return (
        <div className="social-card--body">
            <div className="social-card--proxy-body">
                <div className="social-card--title">{category}</div>
                {headlines}
            </div>
        </div>
    );
}

export default SocialCards;
