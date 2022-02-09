import React, { useState, useRef } from "react";
import "./contact.scss";

export default function Contact() {
    const contactForm = useRef();
    const [isEmailSuccess, setIsEmailSuccess] = useState(false);
    const [isEmailSent, setIsEmailSent] = useState(false);

    const [emailText, setEmailText] = useState("");
    const submitHandler = async (e) => {
        e.preventDefault();
        setIsEmailSent(true);
        try {
            await fetch("http://localhost:5000/send_mail", {
                method: "post",
                body: JSON.stringify({body: emailText}),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            })
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    setIsEmailSuccess(true);
                });
        } catch (error) {
            setIsEmailSuccess(false);
            console.log(error);
        }
    };

    const emailHandler = (e) => {
        setEmailText(e.target.value);
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
                {!isEmailSent ? (
                    <div className="section__form">
                        <h2 className="section__title right__item right__item--title">
                            Send me a message..
                        </h2>
                        <form
                            onSubmit={submitHandler}
                            className="right__item right__item--form"
                            ref={contactForm}
                        >
                            <input
                                className="form__item"
                                type="text"
                                placeholder="name"
                                name="from_name"
                            />
                            <input
                                className="form__item"
                                type="text"
                                placeholder="email@email.com"
                                name="from_email"
                                onChange={emailHandler}
                            />
                            <textarea
                                className="form__item"
                                placeholder="Doesn't work yet - Sorry!  Please email me instead!"
                                cols="30"
                                rows="10"
                                name="message"
                            ></textarea>
                            <button
                                type="submit"
                                className="form__item btn__form form--submit"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                ) : (
                    <div className="thank-you-msg">
                        <div className="thank-you-msg--text">
                            {isEmailSuccess
                                ? "Thanks for the message! I'll get back to you soon..."
                                : "An error occured.  Please try again."}
                        </div>
                        <button
                            type="submit"
                            className="btn__form btn__send-another"
                            onClick={() => setIsEmailSent(false)}
                        >
                            Send another?
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
