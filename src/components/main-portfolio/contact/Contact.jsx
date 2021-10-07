import React, { useState } from "react";
import "./contact.scss";

export default function Contact() {
    const [thankYouMessage, setThankYouMessage] = useState(false);
    const submitHandler = (e) => {
        setThankYouMessage(true);
        e.preventDefault();
    };
    return (
        <div id="contact-me" className="section section__contact">
            <div className="section__contact--item section__contact--left">
                <div className="section__left--item img--container">
                    <img
                        className="left__item--img"
                        src="img/glass_bottle_in_water_pngtree_trans.png"
                        alt="mail"
                    ></img>
                </div>
            </div>
            <div className="section__contact--item section__contact--right">
                {!thankYouMessage ? (
                    <div className="section__form">
                        <h2 className="section__title right__item right__item--title">
                            Send me a message..
                        </h2>
                        <form
                            onSubmit={submitHandler}
                            className="right__item right__item--form"
                        >
                            <input className="form__item" type="text" placeholder="email@email.com"/>
                            <textarea
                            className="form__item" 
                                placeholder="Doesn't work yet - Sorry!  Please email me instead!"
                                cols="30"
                                rows="10"
                            ></textarea>
                            <button className="form__item btn__form form--submit">Send</button>
                        </form>
                    </div>
                ) : (
                    <div className="thank-you-msg">
                        <div className="thank-you-msg--text">Thanks for the message! I'll get back to you soon...</div>
                        <button onClick={() => setThankYouMessage(false)} className="btn__form btn__send-another">Send another?</button>
                    </div>
                )}
            </div>
        </div>
    );
}
