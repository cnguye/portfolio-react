import React, { useEffect } from "react";
import SelectedNewsAPICategories from "./SelectedNewsAPICategories";

function SelectForm(props) {
    const {
        currCategoryHeadlines,
        setCurrCategoryHeadlines,
        selectedCategories,
        setSelectedCategories,
        selectedNewCategory,
        setSelectedNewCategory,
    } = props;

    const newsAPICategories = React.useMemo(
        () => [
            "business",
            "entertainment",
            "general",
            "health",
            "science",
            "sports",
            "technology",
        ],
        []
    );

    useEffect(() => {
        const filteredNewsAPICategories = newsAPICategories.filter(
            (category) => {
                return !selectedCategories.includes(category);
            }
        );
        setSelectedNewCategory(filteredNewsAPICategories[0]);
        // eslint-disable-next-line
    }, [selectedCategories]);

    const handleSelectedNewCategory = (e) => {
        setSelectedNewCategory(e.target.value);
    };

    const handleAddSelectedCategory = () => {
        if (selectedCategories.length === newsAPICategories.length) return;

        let country = "us";
        let category = selectedNewCategory;
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
                    article["deleted"] = false;
                    return article;
                });
                const headlineData = {
                    category,
                    articles: newsAPIHeadlines,
                };
                setCurrCategoryHeadlines([
                    ...currCategoryHeadlines,
                    headlineData,
                ]);
            });
        setSelectedCategories([...selectedCategories, selectedNewCategory]);
    };

    const newsAPICategoriesToSelect = newsAPICategories
        .filter((category) => {
            return !selectedCategories.includes(category) && category;
        })
        .map((category) => {
            if (category === selectedNewCategory) {
                return (
                    <option key={`option-${category}`} value={category}>
                        {category}
                    </option>
                );
            } else
                return <option key={`option-${category}`}>{category}</option>;
        });

    const handleHoverOverDeleteBtn = (e) => {
        const parentEl = e.target.parentElement;
        if (parentEl.className.includes("active"))
            parentEl.className =
                "category-selector__section category-selector--select-body";
        else
            parentEl.className =
                "category-selector__section category-selector--select-body active";
    };

    return (
        <div className="category-selector__body">
            <div className="category-selector__section category-selector--select-body">
                <div className="category-selector--select">
                    <select
                        value={selectedNewCategory}
                        onChange={handleSelectedNewCategory}
                    >
                        {newsAPICategoriesToSelect}
                    </select>
                </div>
                <div
                    onClick={handleAddSelectedCategory}
                    onMouseOver={handleHoverOverDeleteBtn}
                    onMouseLeave={handleHoverOverDeleteBtn}
                    className="category-selector__add-selected-category-btn"
                >
                    +
                </div>
            </div>
            <div className="category-selector__section category-selector__current-selected--list-body">
                <ul className="category-selector__current-selected--list">
                    <SelectedNewsAPICategories
                        selectedCategories={selectedCategories}
                        setSelectedCategories={setSelectedCategories}
                    />
                </ul>
            </div>
        </div>
    );
}

export default SelectForm;
