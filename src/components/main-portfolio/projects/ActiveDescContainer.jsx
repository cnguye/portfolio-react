import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "./activeDescContainer.scss";

export default function ActiveDescgrid({ activeProjectProps }) {
    return (
        <div className="project__desc--container">
            <div className="grid__container container--features">
                {activeProjectProps.desc &&
                    activeProjectProps.desc.features && (
                        <div className="grid__title">Features</div>
                    )}
                {activeProjectProps.desc &&
                    activeProjectProps.desc.features &&
                    activeProjectProps.desc.features.map((feature, index) => (
                        <div
                            key={`feature-item-${index}`}
                            className="grid__item grid__feature-item"
                        >
                            {feature}
                        </div>
                    ))}
            </div>
            <div className="grid__container container--technologies">
                {activeProjectProps.desc &&
                    activeProjectProps.desc.technologies && (
                        <div className="grid__title">Technologies</div>
                    )}
                {activeProjectProps.desc &&
                    activeProjectProps.desc.technologies &&
                    activeProjectProps.desc.technologies.map(
                        (technology, index) => (
                            <div
                                key={`technologies-item-${index}`}
                                className="grid__item grid__technology-item"
                            >
                                {technology.name}
                            </div>
                        )
                    )}
            </div>
            <div className="grid__container container-- langs">
                {activeProjectProps.desc && (
                    <div className="grid__item grid__langs project__langs">
                        {activeProjectProps.langs.map((lang) => (
                            <FontAwesomeIcon
                                key={`project_lang-${lang.iconName}`}
                                icon={lang}
                                className={`project__lang project__lang--${lang.iconName}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
