import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "./activeDescContainer.scss";

export default function ActiveDescgrid({
    activeProjectProps,
    isDescActive,
}) {

    return (
        <div className={`project__desc--body ${isDescActive ? 'active' : ''}`}>
            <div className="project__desc--container">
                <div className="desc__container--item container--features">
                    {activeProjectProps.desc &&
                        activeProjectProps.desc.features && (
                            <div className={`desc__title ${isDescActive && 'active'}`}>Features</div>
                        )}
                    {activeProjectProps.desc &&
                        activeProjectProps.desc.features &&
                        activeProjectProps.desc.features.map(
                            (feature, index) => (
                                <div
                                    key={`feature-item-${index}`}
                                    className="container__item container__feature-item"
                                >
                                    {feature}
                                </div>
                            )
                        )}
                </div>
                {activeProjectProps.desc &&
                    activeProjectProps.desc.technologies && (
                        <div className="desc__container--item container--technologies">
                            <div className={`desc__title ${isDescActive && 'active'}`}>Technologies</div>
                            {activeProjectProps.desc.technologies.map(
                                (technology, index) => (
                                    <div
                                        key={`technologies-item-${index}`}
                                        className="container__item container__technology-item"
                                    >
                                        <a className="technology-item--url" rel="noopener noreferrer" target="_blank" href={technology.url} >{technology.name}</a>
                                    </div>
                                )
                            )}
                        </div>
                    )}
            </div>
            <div className={`grid__container container--langs ${isDescActive ? 'active' : ''}`}>
                {activeProjectProps.desc && (
                    <div className="grid__item grid__langs project__langs">
                        {activeProjectProps.langs.map((lang) => (
                            <FontAwesomeIcon
                                key={`project_lang-${lang.iconName}`}
                                icon={lang}
                                className={`project__lang project__lang--${lang.iconName} ${isDescActive && 'active'}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
