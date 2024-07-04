const BASE_URL = `https://disney_api.nomadcoders.workers.dev/characters`;

export async function fetchCharacters() {
	const response = await (await fetch(BASE_URL)).json();
	return response;
}

export async function fetchCharacterDetail(id: string) {
	const response = await (await fetch(`${BASE_URL}/${id}`)).json();
	return response;
}
