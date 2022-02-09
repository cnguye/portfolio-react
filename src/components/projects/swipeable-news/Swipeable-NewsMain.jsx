import React, { useState, useEffect, useRef } from "react";

import SelectForm from "./components/SelectForm";
import CategoryHeadlines from "./components/CategoryHeadlines";

import "./styles/swipeable-news-main.scss";
import "./styles/page-theme.css";

export default function SwipeableNews() {
    const [categoryHeadlines, setCategoryHeadlines] = useState([]);
    const [currCategoryHeadlines, setCurrCategoryHeadlines] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState(["general"]);
    const [selectedNewCategory, setSelectedNewCategory] = useState();
    // const [deleteHistory, setDeleteHistory] = useState([]);
    
    // ignore first render const
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;

            let country = "us";
            let category = "general";
            let pagesize = 3;
            fetch(
                `http://localhost:5000/api/projects?country=${country}&category=${category}&pagesize=${pagesize}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                }
            )
                .then((data) => data.json())
                .then((data) => {
                    const newsAPIHeadlines = data.articles;
                    newsAPIHeadlines.map((article) => {
                        article["isDeleted"] = false;
                        return article;
                    });
                    const headlineData = {
                        category,
                        articles: newsAPIHeadlines,
                    };
                    setCategoryHeadlines([...categoryHeadlines, headlineData]);
                    setCurrCategoryHeadlines([
                        ...categoryHeadlines,
                        headlineData,
                    ]);
                })
                .catch((error) => console.log(error.message));
            return;
        }
        setCurrCategoryHeadlines(
            currCategoryHeadlines.filter((headlineObj) =>
                selectedCategories.includes(headlineObj.category)
            )
        );
        // eslint-disable-next-line
    }, [selectedCategories]);

    return (
        <div className="project__body project__body-swipeable-news">
            <div className="swipeable-news-container">
                <div className="swipeable-news-main">
                    <div className="swipeable-news-title__body">
                        <h1 className="swipeable-news-title">
                            United States News
                        </h1>
                        <h3 className="swipeable-news-sub-title">
                            Latest headlines from across the nation...
                        </h3>
                    </div>
                    <SelectForm
                        currCategoryHeadlines={currCategoryHeadlines}
                        setCurrCategoryHeadlines={setCurrCategoryHeadlines}
                        selectedCategories={selectedCategories}
                        setSelectedCategories={setSelectedCategories}
                        selectedNewCategory={selectedNewCategory}
                        setSelectedNewCategory={setSelectedNewCategory}
                    />
                    <div className="SocialCards-body">
                        <CategoryHeadlines
                            currCategoryHeadlines={currCategoryHeadlines}
                            setCurrCategoryHeadlines={setCurrCategoryHeadlines}
                        />
                    </div>
                </div>
            </div>
            <div className="swipeable-news-credits">
                News provided by{" "}
                <a
                    href="https://newsapi.org/"
                    target="__blank"
                    rel="noopener noreferrer"
                >
                    NewsAPI
                </a>
            </div>
        </div>
    );
}
