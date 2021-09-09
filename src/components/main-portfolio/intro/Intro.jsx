import React, { useEffect, useRef } from "react";
import { ExpandMore } from "@material-ui/icons";
import { init } from "ityped";

import "./intro.scss";

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            typeSpeed: 150,
            backDelay: 1500,
            strings: ["Developer", "Designer", "Creator"],
        });
    }, []);

    return (
        <div id="intro" className="intro">
            <div className="left">
                <div className="left__wrapper">
                    <img className="left__img" src="img/pfp.png" alt="me" />
                </div>
            </div>
            <div className="right">
                <div className="right__wrapper">
                    <h2 className="right__wrapper--intro">Hi There, I'm</h2>
                    <h1 className="right__wrapper--name">Christopher Nguyen</h1>
                    <h3 className="right__wrapper--title">
                        Full Stack / Software{" "}
                        <span
                            ref={textRef}
                            className="right__wrapper--title-animation"
                        ></span>
                    </h3>
                    <a href="#projects" className="right__wrapper--link">
                        <ExpandMore
                            className="right__wrapper--arrow"
                            fontSize={"large"}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}
