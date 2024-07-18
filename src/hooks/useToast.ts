import { useState } from "react";

export function useToast() {
	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		setVisible(!visible);
	};

	return { visible, setVisible, toggleVisible };
}
