import { SyntheticEvent } from "react";
import { ICharacter } from "./interface";

export const defaultImg = `${process.env.PUBLIC_URL}/images/default_image.jpg`;

export const addDefaultImg = (e: SyntheticEvent<HTMLImageElement, Event>) => {
	try {
		e.currentTarget.onerror = null;
		e.currentTarget.src = defaultImg;
	} catch {
		console.log("has image error on" + e.currentTarget);
	}
};

export const chunkArray = (array: ICharacter[], chunkSize: number) => {
	const chunks = [];
	for (let i = 0; i < array.length; i += chunkSize) {
		chunks.push(array.slice(i, i + chunkSize));
	}
	return chunks;
};
