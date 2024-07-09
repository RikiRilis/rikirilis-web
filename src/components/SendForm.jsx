import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { getI18N } from '@/languages';

export const SendForm = (currentLocale) => {
    const user_name = useRef(),
        user_email = useRef(),
        message = useRef(),
        i18n = getI18N({ currentLocale });

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.init({
            publicKey: "sBTAHA5e6bTr3L4lD",
            blockHeadless: true,
            limitRate: {
                id: "app",
                throttle: 120000,
            },
        });

        emailjs.send("service_q4ed9v6", "template_yv5sx76", {
            from_name: user_name.current.value.trim(),
            to_name: "RikiRilis",
            from_email: user_email.current.value.trim(),
            subject: "Email from contact form | RikiRilis",
            message: message.current.value.trim(),
        }).then((result) => {
            user_name.current.value = "";
            user_email.current.value = "";
            message.current.value = "";
        }).catch((error) => {
            console.log({ "Sending failed!": error});
        });
    };

    return (
        <form onSubmit={sendEmail}
            className="flex-1 pt-6 sm:pt-0 sm:w-full"
        >
            <span className="italic text-slate-400 font-semibold text-sm">
                {i18n.CONTACT_TXT_6}
            </span>

            <div className="flex flex-col gap-2 mt-4">
                <label className="font-semibold mb-1 flex flex-col">
                    {i18n.NAME}
                    <input
                        ref={user_name}
                        required
                        autoComplete="name"
                        className="h-10 font-normal rounded-lg px-2 focus:outline-none border border-cyan-800 focus:border-cyan-600 focus:bg-transparent focus:shadow-cyan-600 focus:shadow-sm transition-colors placeholder:focus:invisible bg-cyan-950 placeholder-slate-400 ease-in-out duration-200"
                        type="text"
                        name="user_name"
                        placeholder="Rikelvi Capellán"
                    />
                </label>

                <label className="font-semibold mb-1 flex flex-col">
                    {i18n.EMAIL}
                    <input
                        ref={user_email}
                        required
                        autoComplete="user_email"
                        className="h-10 font-normal autofill:!bg-yellow-200 rounded-lg px-2 focus:outline-none border border-cyan-800 focus:border-cyan-600 focus:bg-transparent transition-colors placeholder:focus:invisible bg-cyan-950 placeholder-slate-400 ease-in-out duration-200"
                        type="email"
                        name="user_email"
                        placeholder="example@example.com"
                    />
                </label>

                <label className="font-semibold mb-1 flex flex-col">
                    {i18n.MESSAGE}
                    <textarea
                        ref={message}
                        required
                        className="h-28 font-normal rounded-lg px-2 focus:outline-none border border-cyan-800 focus:border-cyan-600 focus:bg-transparent transition-colors placeholder:focus:invisible bg-cyan-950 placeholder-slate-400 ease-in-out duration-200 py-1"
                        name="message"
                        placeholder={i18n.MESSAGE_PLACEHOLDER}></textarea>
                </label>
            </div>

            <button
                type="submit"
                className="flex flex-row w-full justify-center items-center mt-4 gap-2 bg-cyan-600 text-slate-200 sm:hover:text-cyan-600 sm:hover:bg-transparent sm:hover:border-cyan-600 active:text-cyan-600 active:bg-transparent active:border-cyan-600 transition py-2 px-3 rounded-xl text-lg font-bold cursor-pointer border border-transparent"
            >
                <svg
                    className="w-5 h-5"
                    width="800px"
                    height="800px"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M10 14l11 -11"></path>
                    <path
                        d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"
                    ></path>
                </svg>
                {i18n.SEND}
            </button>
        </form>
    );
};