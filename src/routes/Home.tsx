import { useQuery } from "react-query";
import { fetchCharacters } from "../utils/api";
import { Link, Outlet } from "react-router-dom";
import { ICharacter, IQueryError } from "../utils/interface";
import styled from "styled-components";
import { useEffect } from "react";
import ErrorAlert from "../components/ErrorAlert";

const Container = styled.div`
	width: 100%;
	padding: 30px 15px;
`;

const Title = styled.h1`
	text-align: center;
	font-size: 48px;
	padding: 20px 15px;
	margin-bottom: 15px;
`;

const CharacterGrid = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(120px, 280px));
	grid-gap: 15px;
	justify-content: center;
`;

const Character = styled.li`
	text-align: center;
	transition: all 0.2s ease-in;
	a {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		transition: all 0.2s ease-in;
	}
	&:hover {
		a {
			transform: scale(1.2);
		}
	}
`;

function Home() {
	const { isLoading, data, isError, error } = useQuery<ICharacter[], IQueryError>({
		queryKey: ["characters"],
		queryFn: fetchCharacters,
	});

	useEffect(() => {
		if (isError) {
			console.log(error);
		}
	}, [isError]);

	return (
		<Container>
			<Title>Disney Characters</Title>
			{isLoading && <p>We are calling the characters!</p>}
			<CharacterGrid>
				{data &&
					data.slice(2800, 2899).map(character => (
						<Character key={character.id}>
							<Link to={`/character/${character.id}`}>
								<img src={character.imageUrl} alt={character.name} />
								<h3>{character.name}</h3>
							</Link>
						</Character>
					))}
			</CharacterGrid>
			{isError && <ErrorAlert statusCode={error.statusCode} message={error.message} />}
			<Outlet />
		</Container>
	);
}

export default Home;
