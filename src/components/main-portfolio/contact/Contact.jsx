import React, { useState } from "react";
import "./contact.scss";

export default function Contact() {
    const [thankYouMessage, setThankYouMessage] = useState(false);
    const submitHandler = (e) => {
        setThankYouMessage(true);
        e.preventDefault();
    };
    return (
        <div id="contact-me" className="contact">
            <div className="section section__left">
                <div className="section__left--item img--container">
                    <img
                        className="left__item--img"
                        src="img/glass_bottle_in_water_pngtree_trans.png"
                        alt="mail"
                    ></img>
                </div>
            </div>
            <div className="section section__right">
                {!thankYouMessage ? (
                    <div className="section__form">
                        <h2 className="right__item right__item--title">
                            Contact.
                        </h2>
                        <form
                            onSubmit={submitHandler}
                            className="right__item right__item--form"
                        >
                            <input type="text" placeholder="email@email.com" />
                            <textarea
                                placeholder="Message"
                                cols="30"
                                rows="10"
                            ></textarea>
                            <button className="form--submit">Send</button>
                        </form>
                    </div>
                ) : (
                    <div className="thank-you-msg">
                        <span className="thank-you-msg--text">Thanks for the message! I'll get back to you soon...</span>
                    </div>
                )}
            </div>
        </div>
    );
}
