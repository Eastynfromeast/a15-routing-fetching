import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { fetchCharacterDetail } from "../utils/api";
import styled from "styled-components";
import { ICharacterDetail } from "../utils/interface";
import GoBackButton from "../components/GoBackButton";

const ModalContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background: rgba(175, 175, 175, 0.5);
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	flex-direction: row;
	align-items: center;
`;

const Card = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	width: 80%;
	max-width: 390px;
	margin: 0 auto;
	padding: 60px 15px;
	text-align: center;
	font-size: 16px;
	background-color: ${props => props.theme.textColor};
	color: ${props => props.theme.bgColor};
	border-radius: 25px;
	gap: 15px;
`;

const Name = styled.h1`
	font-size: 2.5em;
	text-transform: uppercase;
`;

const ProfilePhoto = styled.div`
	display: flex;
	width: 280px;
	height: 280px;
	border-radius: 15px;
	overflow: hidden;
	img {
		width: 100%;
		object-fit: cover;
	}
`;

function Detail() {
	const { id } = useParams();
	const {
		isLoading,
		data: character,
		error,
	} = useQuery<ICharacterDetail>({
		queryKey: ["character", id],
		queryFn: () => fetchCharacterDetail(id!),
	});

	console.log(character);

	return (
		<ModalContainer>
			{isLoading && <p>We are calling the character you want to know</p>}
			{character && (
				<Card>
					<GoBackButton />
					<Name>{character.name}</Name>
					<ProfilePhoto>
						<img src={character.imageUrl} alt={character.name} />
					</ProfilePhoto>
					<h2>{character.name}</h2>
					<div>
						<h3>Philmography</h3>
						<ul>
							{character.films.map((film, index) => (
								<li key={`film_${index}`}>{film}</li>
							))}
						</ul>
					</div>
				</Card>
			)}
		</ModalContainer>
	);
}

export default Detail;
