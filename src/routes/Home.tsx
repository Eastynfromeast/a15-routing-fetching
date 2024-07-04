import { useQuery } from "react-query";
import { fetchCharacters } from "../utils/api";
import { Link, Outlet } from "react-router-dom";

interface ICharacter {
	id: number;
	name: string;
	imageUrl: string;
}

function Home() {
	const { isLoading, data, error } = useQuery<ICharacter[]>({
		queryKey: ["characters"],
		queryFn: fetchCharacters,
	});

	return (
		<>
			<h1>Disney Characters</h1>
			{isLoading && <p>We are calling the characters!</p>}
			<ul>
				{data &&
					data.slice(2800, 2899).map(character => (
						<li key={character.id}>
							<Link to={`/character/${character.id}`}>
								<img src={character.imageUrl} alt={character.name} />
								<span>{character.name}</span>
							</Link>
						</li>
					))}
			</ul>
			<Outlet />
		</>
	);
}

export default Home;
