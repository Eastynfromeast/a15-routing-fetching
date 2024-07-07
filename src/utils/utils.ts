import { SyntheticEvent } from "react";
import defaultImg from "../img/default_image.jpg";

export const addDefaultImg = (e: SyntheticEvent<HTMLImageElement, Event>) => {
	try {
		e.currentTarget.onerror = null;
		e.currentTarget.src = defaultImg;
	} catch {
		console.log("has image error on" + e.currentTarget);
	}
};
