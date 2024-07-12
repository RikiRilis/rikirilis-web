import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { getI18N } from "@/languages/index";

export const SendForm = (currentLocale) => {
	const user_name = useRef(),
		user_email = useRef(),
		message = useRef(),
		i18n = getI18N({ currentLocale }),
		[sending, setSending] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();

		if (sending) return;

		setSending(true);

		emailjs.init({
			publicKey: "sBTAHA5e6bTr3L4lD",
			blockHeadless: true,
			limitRate: {
				id: "app",
				throttle: 120000,
			},
		});

		emailjs
			.send("service_q4ed9v6", "template_yv5sx76", {
				from_name: user_name.current.value.trim(),
				to_name: "RikiRilis",
				from_email: user_email.current.value.trim(),
				subject: "Email from contact form | RikiRilis",
				message: message.current.value.trim(),
			})
			.then(() => {
				user_name.current.value = "";
				user_email.current.value = "";
				message.current.value = "";
				setSending(false);
			})
			.catch(() => {
				setSending(false);
			});
	};

	return (
		<form onSubmit={sendEmail} className="flex-1 pt-6 sm:w-full sm:pt-0">
			<span className="text-sm italic text-slate-400">{i18n.CONTACT_TXT_6}</span>

			<div className="mt-4 flex flex-col gap-2">
				<label className="mb-1 flex flex-col font-semibold text-slate-600 dark:text-slate-200">
					{i18n.NAME}
					<input
						ref={user_name}
						required
						autoComplete="name"
						className="h-10 rounded-lg border dark:border-cyan-800 bg-slate-200 dark:bg-cyan-950 text-slate-600 dark:text-slate-400 px-2 font-normal placeholder-slate-400 transition-colors ease-in-out dark:focus:border-cyan-600 focus:bg-slate-200/20 dark:focus:bg-transparent focus:shadow-sm focus:outline-none placeholder:focus:invisible"
						type="text"
						name="user_name"
						placeholder="Rikelvi Capellán"
					/>
				</label>

				<label className="mb-1 flex flex-col font-semibold text-slate-600 dark:text-slate-200">
					{i18n.EMAIL}
					<input
						ref={user_email}
						required
						autoComplete="email"
						className="h-10 rounded-lg border dark:border-cyan-800 bg-slate-200 dark:bg-cyan-950 text-slate-600 dark:text-slate-400 px-2 font-normal placeholder-slate-400 transition-colors ease-in-out autofill:!bg-yellow-200 dark:focus:border-cyan-600 focus:bg-slate-200/20 dark:focus:bg-transparent focus:outline-none placeholder:focus:invisible"
						type="email"
						name="user_email"
						placeholder="example@example.com"
					/>
				</label>

				<label className="mb-1 flex flex-col font-semibold text-slate-600 dark:text-slate-200">
					{i18n.MESSAGE}
					<textarea
						ref={message}
						required
						className="h-28 rounded-lg border dark:border-cyan-800 bg-slate-200 dark:bg-cyan-950 text-slate-600 dark:text-slate-400 px-2 py-1 font-normal placeholder-slate-400 transition-colors ease-in-out dark:focus:border-cyan-600 focus:bg-slate-200/20 dark:focus:bg-transparent focus:outline-none placeholder:focus:invisible"
						name="message"
						placeholder={i18n.MESSAGE_PLACEHOLDER}
					></textarea>
				</label>
			</div>

			<button
				type="submit"
				className={`mt-4 flex w-full flex-row items-center justify-center gap-2 ${!sending ? "cursor-pointer bg-cyan-600 text-slate-200" : "cursor-not-allowed bg-cyan-800 text-slate-400"} ${sending ? "" : "active:border-cyan-600 active:bg-transparent active:text-cyan-600 sm:hover:border-cyan-600 sm:hover:bg-transparent sm:hover:text-cyan-600"} rounded-xl border border-transparent px-3 py-2 text-lg font-bold transition`}
			>
				{!sending ? (
					<svg
						className="size-5"
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
						<path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
					</svg>
				) : (
					<svg className="size-5" width="38" height="38" viewBox="0 0 38 38">
						<defs>
							<linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
								<stop stopColor="currentColor" stopOpacity="0" offset="0%" />
								<stop stopColor="currentColor" stopOpacity=".631" offset="63.146%" />
								<stop stopColor="currentColor" offset="100%" />
							</linearGradient>
						</defs>
						<g fill="none" fillRule="evenodd">
							<g transform="translate(1 1)">
								<path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" strokeWidth="2">
									<animateTransform
										attributeName="transform"
										type="rotate"
										from="0 18 18"
										to="360 18 18"
										dur="0.9s"
										repeatCount="indefinite"
									/>
								</path>
								<circle fill="currentColor" cx="36" cy="18" r="1">
									<animateTransform
										attributeName="transform"
										type="rotate"
										from="0 18 18"
										to="360 18 18"
										dur="0.9s"
										repeatCount="indefinite"
									/>
								</circle>
							</g>
						</g>
					</svg>
				)}
				{i18n.SEND}
			</button>
		</form>
	);
};
