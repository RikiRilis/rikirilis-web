import { useToast } from "@/hooks/useToast";
import { useEffect } from "react";

export const Toast = ({ text, children }) => {
	const { visible, setVisible, toggleVisible } = useToast();

	useEffect(() => {
		if (visible) {
			setTimeout(() => {
				setVisible(false);
			}, 3000);
		}
	}, [visible]);

	const handleClick = () => {
		toggleVisible();
	};

	return (
		<>
			<div
				className={`${!visible ? "-top-full" : "top-4"} fixed left-4 z-[9999] flex w-full max-w-xs items-center rounded-xl bg-slate-200 px-4 py-2 text-gray-500 shadow-md transition-all duration-500 dark:bg-slate-800 dark:text-gray-400`}
				role="alert"
			>
				<div className="inline-flex size-6 items-center justify-center rounded-lg text-slate-600 dark:text-slate-400">
					{children}
				</div>

				<div className="ms-2 text-sm font-normal">{text}</div>

				<button
					onClick={handleClick}
					id="close-btn"
					className="ms-auto inline-flex items-center justify-center rounded-lg p-1.5 text-slate-600 transition-colors hover:bg-slate-600 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-slate-700 dark:hover:text-slate-200"
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						<path d="M18 6l-12 12"></path>
						<path d="M6 6l12 12"></path>
					</svg>
				</button>
			</div>
		</>
	);
};
