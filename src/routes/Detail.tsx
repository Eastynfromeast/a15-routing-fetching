import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchCharacterDetail } from "../api";

interface IDetailData {
	id: number;
	films: string[];
	name: string;
	imageUrl: string;
	sourceUrl: string;
}

function Detail() {
	const { id } = useParams();
	const {
		isLoading,
		data: character,
		error,
	} = useQuery<IDetailData>({
		queryKey: ["character", id],
		queryFn: () => fetchCharacterDetail(id!),
	});

	return (
		<>
			<h1>{isLoading ? "Character..." : character?.name}</h1>
			{isLoading && <p>We are calling the character you want to know</p>}
			{character && (
				<div>
					<img src={character.imageUrl} alt={character.name} />
					<h2>{character.name}</h2>
					<ul>
						{character.films.map((film, index) => (
							<li key={`film_${index}`}>{film}</li>
						))}
					</ul>
				</div>
			)}
		</>
	);
}

export default Detail;
