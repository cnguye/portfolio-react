import React, { useState } from "react";
import { Collapse } from "@material-ui/core";
// import {
//     Accordion,
//     AccordionSummary,
//     AccordionDetails,
// } from "@material-ui/core";

import "./moreAboutMe.scss";

export default function MoreAboutMe() {
    const [expanded, setExpanded] = useState(false);

    const handleClick = (panel) => (event) => {
        setExpanded(expanded === panel ? "" : panel);
    };

    return (
        <div className="my-work" id="more-me">
            <h2 className="section__title">Find out more about Me</h2>
            <p className="section__subtitle"></p>

            <div className="portfolio">
                <a href="#projects" className="portfolio__item">
                    <div className="portfolio__item--img">
                        <div className="portfolio__item--container grow-box">
                            <div className="portfolio__description">
                                Projects
                            </div>
                            <img
                                src="./img/some-code-on-a-laptop.jpg"
                                alt=""
                                className="portfolio__img"
                            />
                        </div>
                    </div>
                </a>
                <div
                    className="portfolio__item"
                    onClick={handleClick("panel1")}
                >
                    <div className="portfolio__item--img">
                        <div
                            className={
                                `portfolio__item--container grow-box ` +
                                (expanded === "panel1" && "keep-expanded")
                            }
                        >
                            <div className="portfolio__description">Music</div>
                            <img
                                src="./img/flstudio-workspace.png"
                                alt=""
                                className="portfolio__img"
                            />
                        </div>
                    </div>
                </div>
                <Collapse
                    className={`portfolio--collapse `}
                    in={expanded === "panel1"}
                >
                    <div className="more-me__description more-me__description--producer">
                        <p>
                            In 2016, I began teaching myself how to make music
                            on Fruity Loops Studio when I started to feel that
                            DJing was just not enough to express myself
                            creatively. Creating music allows me to tell others
                            how I'm feeling at the exact moment I'm in my
                            studio.
                        </p>
                        <br />
                        <p>
                            I started DJing in highschool after hearing recorded
                            live sets from big room DJs such as Hardwell,
                            Bassjackers, and Afrojack. The way they were able to
                            get a crowd jumping made me feel that there was no
                            reason I couldn't either. I started off with a
                            Newmark Mix Track Pro II as a bedroom DJ. A few
                            years later, I became the main EDM DJ for Cal State
                            LA, playing live sets with my XDJ-RX2. From there I
                            started learning how to scratch and to read a crowd.
                            With a solid DJing foundation, I began my journey of
                            music production.
                        </p>
                    </div>
                </Collapse>
                <div
                    className="portfolio__item"
                    onClick={handleClick("panel2")}
                >
                    <div className="portfolio__item--img">
                        <div
                            className={
                                `portfolio__item--container grow-box ` +
                                (expanded === "panel2" && "keep-expanded")
                            }
                            onChange={handleClick("panel2")}
                        >
                            <div className="portfolio__description">Life</div>
                            <img
                                src="./img/portfolio-ldrk.jpg"
                                alt=""
                                className="portfolio__img"
                            />
                        </div>
                    </div>
                </div>
                <Collapse
                    className={`portfolio--collapse `}
                    in={expanded === "panel2"}
                >
                    <div className="more-me__description more-me__description--life">
                        <p>
                            LDRK consists of 11 chapters that make up the Los
                            Angeles County. In 2015, I became a Catholic youth
                            group leader of one of these chapters to guide and
                            educate children to good morals and discovering
                            their individual values. My mission is to build the
                            kids' faith through Catholic teachings and current
                            affairs.
                        </p>
                        <br />
                        <p>
                            The VEYM is a national non-profit organization that
                            focuses on building kids into well-rounded
                            individuals. Its aim is to teach youths to be
                            virtuous people and good Christians. It also offers
                            apostolate services for the youth. Throughout its
                            years of service, the Movement has kept pace with
                            social and cultural changes of the day in an attempt
                            to reach out to the youth of all times. Find out
                            more about The Vietnamese Eucharistic Youth Movement
                            (VEYM)&nbsp;
                            <a
                                href="https://veym.net/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                here
                            </a>
                            .
                        </p>
                    </div>
                </Collapse>
            </div>
        </div>
    );
}
