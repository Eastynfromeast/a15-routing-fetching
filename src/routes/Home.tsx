import { useQuery } from "react-query";
import { fetchCharacters } from "../utils/api";
import { Outlet } from "react-router-dom";
import { ICharacter, IQueryError } from "../utils/interface";
import ErrorAlert from "../components/ErrorAlert";
import styled from "styled-components";
import CharacterCircle from "../components/character/CharacterCircle";
import LoadingSpinner from "../components/LoadingSpinner";

const Container = styled.div`
	width: 100%;
	padding: 30px 15px;
	background: ${props => props.theme.bgColor};
`;

const Title = styled.h2`
	text-align: center;
	font-size: 48px;
	padding: 20px 15px;
	margin-bottom: 15px;
	color: ${props => props.theme.popColor};
`;

const GridList = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(60px, 240px));
	grid-auto-rows: minmax(60px, 240px);
	grid-gap: 15px;
	justify-content: center;
`;

function Home() {
	const { isLoading, data, isError, error } = useQuery<ICharacter[], IQueryError>({
		queryKey: ["characters"],
		queryFn: fetchCharacters,
	});

	return (
		<Container>
			<Title>Disney Characters</Title>
			{isLoading && <LoadingSpinner context="We are calling our buddies!" />}
			{data && (
				<GridList>
					{data.slice(2800, 2899).map(character => (
						<CharacterCircle key={character.id} {...character} />
					))}
				</GridList>
			)}
			{isError && <ErrorAlert statusCode={error.statusCode} message={error.message} />}
			<Outlet />
		</Container>
	);
}

export default Home;
