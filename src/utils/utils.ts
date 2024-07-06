import { SyntheticEvent } from "react";
import defaultImg from "../img/default_image.jpg";

export const addDefaultImg = (e: SyntheticEvent<HTMLImageElement, Event>) => {
	e.currentTarget.src = defaultImg;
};
