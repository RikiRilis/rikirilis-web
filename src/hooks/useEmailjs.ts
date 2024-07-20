import type { Email } from "@/interfaces/email";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export function useEmailjs() {
	const [sending, setSending] = useState(false);
	const [error, setError] = useState(false);

	const sendEmail = ({ user_name, user_email, message }: Email) => {
		if (user_name?.trim() === "" || user_email?.trim() === "" || message?.trim() === "") return;

		setSending(true);
		setError(false);

		try {
			emailjs.init({
				publicKey: import.meta.env.EMAILJS_KEY,
				blockHeadless: true,
				limitRate: {
					id: "app",
					throttle: 120000,
				},
			});

			emailjs
				.send(import.meta.env.EMAILJS_SERVICE_ID, import.meta.env.EMAILJS_TEMPLATE_ID, {
					from_name: user_name,
					to_name: "RikiRilis",
					from_email: user_email,
					subject: "Email from contact form | RikiRilis",
					message: message,
				})
				.then(() => {
					setSending(false);
				})
				.catch(() => {
					setSending(false);
					setError(true);
					throw new Error("Error sending form.");
				});
		} catch (e) {
			setSending(false);
			setError(true);
			throw new Error("Error sending form.");
		}
	};

	return { sending, setSending, error, setError, sendEmail };
}
