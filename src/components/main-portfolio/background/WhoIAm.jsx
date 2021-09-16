import React from "react";

export default function WhoIAm() {
    return (
        <div className="whoIAm">
            <h2 className="section__title section__title--about">Who I am</h2>
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
                    I graduated from California State University of Los Angeles
                    in 2018 with a Bachelor of Computer Science. Ever since I
                    was young I've always had a creative and curious nature.
                    From building LEGO when I was a kid to programming and
                    producing music now, I always find pleasure in figuring out
                    how things work in tandem. With the help of my family,
                    friends, and community there's never a time where I'm not
                    learning or teaching how the world works around me.
                </p>
            </div>
        </div>
    );
}
