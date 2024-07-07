import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchCharacters } from "../utils/api";
import { chunkArray } from "../utils/utils";
import { ICharacter, IQueryError } from "../utils/interface";
import ErrorAlert from "../components/ErrorAlert";
import CharacterCoin from "../components/character/CharacterCoin";
import LoadingSpinner from "../components/LoadingSpinner";
import Footer from "../layout/Footer";
import styled, { keyframes } from "styled-components";

const TwinkleText = keyframes`
	0%, 100%{
		text-shadow:0 0 0px rgba(255, 255, 255, 0.75);
	}
	50% {
		text-shadow:0 0 5px rgba(255, 255, 255, 0.75), 0 0 10px rgba(255, 255, 255, 0.5), 0 0 15px #0f51cc;
	}
`;

const TwinkleBox = keyframes`
	0%, 100%{
		box-shadow:0 0 0px rgba(255, 255, 255, 0.75);
	}
	50% {
		box-shadow:0 0 5px rgba(255, 255, 255, 0.75), 0 0 10px rgba(255, 255, 255, 0.5), 0 0 15px #0f51cc;
	}
`;

const Container = styled.div`
	width: 100%;
	padding: 30px 15px;
	background: ${props => props.theme.bgGradientColor};
`;

const Title = styled.h2`
	text-align: center;
	font-size: 48px;
	padding: 20px 15px;
	margin-bottom: 15px;
	color: ${props => props.theme.textColor};
	transition: all 0.2s ease-in-out;
	animation: ${TwinkleText} 3s ease-in-out infinite;
`;

const GridList = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(60px, 240px));
	grid-auto-rows: minmax(60px, 240px);
	grid-gap: 15px;
	justify-content: center;
	clear: both;
`;

const SelectCharacters = styled.select`
	display: block;
	margin: 0 auto 30px;
	text-align: center;
	padding: 10px 10px;
	border-radius: 15px;
	background-color: ${props => props.theme.bgColor};
	color: ${props => props.theme.textColor};
	border: none;
	box-shadow: 0 0 7px #269de8;
	animation: ${TwinkleBox} 3s ease-in-out 5;
`;

function Home() {
	const { isLoading, data, isError, error } = useQuery<ICharacter[], IQueryError>({
		queryKey: ["characters"],
		queryFn: fetchCharacters,
	});

	const [value, setValue] = useState(0);
	const [numbers, setNumbers] = useState({ a: 0, b: 99 });
	const [chunks, setChunks] = useState<ICharacter[][]>();
	const onSelect = (event: React.FormEvent<HTMLSelectElement>) => {
		const level = parseInt(event.currentTarget.value);
		setValue(level);
		setNumbers({
			a: 100 * level,
			b: 99 + 100 * level,
		});
	};

	useEffect(() => {
		if (data && data !== undefined) {
			const chunkedData = chunkArray(data, 100);
			setChunks(chunkedData);
		}
	}, [data]);

	return (
		<Container>
			<Title>Disney Characters</Title>
			{isLoading && <LoadingSpinner context="We are calling our buddies!" />}
			{data && (
				<>
					<SelectCharacters onChange={onSelect} value={value}>
						{chunks?.map((chunk, index) => (
							<option key={index} value={index}>
								{`Character No.${index * 100 + 1} ~ No.${index * 100 + chunk.length}`}
							</option>
						))}
					</SelectCharacters>
					<GridList>
						{data.slice(numbers.a, numbers.b).map(character => (
							<CharacterCoin key={character.id} {...character} />
						))}
					</GridList>
				</>
			)}
			{isError && <ErrorAlert statusCode={error.statusCode} message={error.message} />}
			<Outlet />
			<Footer />
		</Container>
	);
}

export default Home;
