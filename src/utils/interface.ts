export interface ICharacter {
	id: number;
	name: string;
	imageUrl: string;
}

export interface ICharacterDetail {
	id: number;
	films: string[];
	name: string;
	imageUrl: string;
	sourceUrl: string;
}

export interface IQueryError {
	message: string;
	statusCode?: number;
}

export interface ILoadingContext {
	context: string;
}
