import React from "react";

import { ExpandMore } from "@material-ui/icons";
import "./background.scss";

export default function Background() {
    return (
        <div id="background" className="section section__background">
            <div className="section__half section__first-half">
                <h2 className="section__title section__title--about">
                    Who I am
                </h2>
                <p className="section__subtitle section__subtitle--about">
                    Developer, Producer, and Leader
                </p>
                <img
                    src="/img/me-walking-somewhere.png"
                    alt="Me walking somewhere"
                    className="background__img"
                />
                <div className="background__body">
                    <p>
                        I graduated from California State University of Los
                        Angeles in 2018 with a Bachelor of Computer Science.
                        Ever since I was young I've always had a creative and
                        curious nature. From building LEGO when I was a kid to
                        programming and producing music now, I always find
                        pleasure in figuring out how things work in tandem. With
                        the help of my family, friends, and community there's
                        never a time where I'm not learning or teaching how the
                        world works around me.
                    </p>
                </div>
            </div>
            <div className="section__half section__second-half">
                <div className="my-work" id="more-me">
                    <h2 className="section__title">Find out more about Me</h2>
                    <p className="section__subtitle"></p>

                    <div className="portfolio">
                        <a href="developer.html" className="portfolio__item">
                            <div className="portfolio__item--container">
                                <div className="portfolio__description">
                                    Projects
                                </div>
                                <img
                                    src="./img/some-code-on-a-laptop.jpg"
                                    alt=""
                                    className="portfolio__img"
                                />
                            </div>
                        </a>
                        <a href="producer.html" className="portfolio__item">
                            <div className="portfolio__item--container">
                                <div className="portfolio__description">
                                    Music
                                </div>
                                <img
                                    src="./img/flstudio-workspace.png"
                                    alt=""
                                    className="portfolio__img"
                                />
                            </div>
                        </a>
                        <a href="leader.html" className="portfolio__item">
                            <div className="portfolio__item--container">
                                <div className="portfolio__description">
                                    Life
                                </div>
                                <img
                                    src="./img/portfolio-ldrk.jpg"
                                    alt=""
                                    className="portfolio__img"
                                />
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="wrapper__link--container">
                <a href="#projects" className="right__wrapper--link">
                    <ExpandMore className="wrapper--arrow" fontSize={"large"} />
                </a>
            </div>
        </div>
    );
}
