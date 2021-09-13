import React from "react";
import { ExpandMore } from "@material-ui/icons";

import "./aboutme.scss";

export default function AboutMe() {
    return (
        <div id="about-me" className="section section__about-me">
            <h2 className="section__title section__title--services">
                What I do
            </h2>
            <div className="section-background-img"></div>
            <div className="services">
                <div className="service">
                    <h3>Develop</h3>
                    <p>
                        <strong>Front-end</strong> developing has been a strong
                        focus throughout my studies and career paths. It feels
                        rewarding to have people see my work while I obtain
                        experience from their feedback. Every step of the way is
                        a learning experience.
                    </p>
                    <p>
                        <strong>Back-end</strong> development allows me to
                        understand and appreciate what happens behind the scenes
                        of amazing web sites and applications. It keeps my mind
                        fresh as I continue to grow with the technologies around
                        me.
                    </p>
                </div>
                <div className="service">
                    <h3>Lead</h3>
                    <p>
                        Growing up attending a Catholic youth group community
                        has taught me how to communicate, understand, and work
                        with diverse people. Thiếu Nhi Thánh Thể expands on a
                        national level, and that makes meeting new and different
                        people that much more exciting.
                    </p>
                    <p>
                        Since 2015, I was been given the privilege to become a
                        Youth Group Leader to give back to the community, that
                        has been a key aspect of who I am today.
                    </p>
                </div>
                <div className="service">
                    <h3>Produce</h3>
                    <p>
                        I've been dancing to the beat of the drums since 2008.
                        Electronic dance music has always been my go-to source
                        for energy, relaxation, and comfort. I took up DJing to
                        control how I express myself through music.
                    </p>
                    <p>
                        Just a few years ago, I started to produce music to
                        express myself and as another way to communicate with
                        others.
                    </p>
                </div>
            </div>
            <div className="wrapper__link--container">
                <a href="#background" className="wrapper--link">
                    <ExpandMore className="wrapper--arrow" fontSize={"large"} />
                </a>
            </div>
        </div>
    );
}
