import React, { useState, useRef } from "react";
import ReCaptchaV2 from "react-google-recaptcha";
import { useForm, Controller } from "react-hook-form";

import "./contact.scss";

require("dotenv").config();

const REACT_APP_CAPTCHA_SITE_KEY = process.env.G_CAPTCHA_SITE_KEY;

export default function Contact() {
    const contactForm = useRef();
    const [isEmailSuccess, setIsEmailSuccess] = useState(false);
    const [isEmailSent, setIsEmailSent] = useState(false);

    const recaptchaRef = useRef();

    // useForm variables
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    const onVerifyCaptcha = (token) => {
        setValue("captchaToken", token);
    };

    const submitHandler = (data) => {
        console.log(data);
        setIsEmailSent(true);
        try {
            fetch("http://localhost:5000/send_mail", {
                method: "post",
                body: JSON.stringify({
                    name: "hello",
                    email: "emailText",
                    message: "messageText",
                }),
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
                            onSubmit={handleSubmit(submitHandler)}
                            className="right__item right__item--form"
                            ref={contactForm}
                        >
                            <input
                                className="form__item"
                                type="text"
                                placeholder="name"
                                name="name"
                                {...register("name", { required: true, maxLength: 180})}
                            />
                            {errors.name && <p>name is required</p>}
                            <input
                                className="form__item"
                                type="text"
                                placeholder="email@email.com"
                                name="from_email"
                                {...register("email", { required: true, pattern: /^\S+@\S+$/i})}
                            />
                            {errors.email && <p>valid email is required</p>}
                            <textarea
                                className="form__item"
                                placeholder="Your message here..."
                                cols="30"
                                rows="10"
                                name="message"
                                {...register("message", { required: true })}
                            ></textarea>
                            {errors.message && <p>message is required</p>}

                            <ReCaptchaV2
                                sitekey={REACT_APP_CAPTCHA_SITE_KEY}
                                name="reCapcha"
                                ref={recaptchaRef}
                                {...register("recaptcha", { required: true })}
                                onVerifyCaptcha={onVerifyCaptcha}
                            />
                            {errors.recaptcha && <p>reCAPTCHA is required</p>}

                            <button type="submit" className="form__item btn__form form--submit" onClick={()=>console.log(errors)}>
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
                            {isEmailSuccess ? "Send another?" : "Try again"}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
