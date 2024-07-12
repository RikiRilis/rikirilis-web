import { getI18N } from "@/languages/index";
import { type Experience } from "../interfaces/experience.interface";

export const experiencesService = (currentLocale?: string): Experience[] => {
	const getI18 = getI18N({ currentLocale });

	return [
		{
			title: "Actually",
			date: "May 2024",
			description: "I'm a freelancer developer. I'm open to collaborate on any project you want.",
		},
		{
			title: "ANJOCC Oficial Website",
			date: "jul 2024",
			description:
				"I created the oficial website for ANJOCC (Asociación Nacional de Jóvenes Candeleros de Cristo) from Dominican Republic, with an user loggin, registration form, Supabase DB and more.",
		},
		{
			title: "ANJOCC Oficial Website",
			date: "jul 2024",
			description:
				"I created the oficial website for ANJOCC (Asociación Nacional de Jóvenes Candeleros de Cristo) from Dominican Republic, with an user loggin, registration form, Supabase DB and more.",
		},
	];
};
