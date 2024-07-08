import styled from "styled-components";
import GoBackButton from "../GoBackButton";
import { ICharacterDetail } from "../../utils/interface";
import defaultImg from "../../assets/img/default_image.jpg";

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
	font-size: 18px;
	background: ${props => props.theme.bgGradientColor};
	color: ${props => props.theme.textColor};
	border-radius: 25px;
	gap: 15px;
	box-shadow: 0 0 10px rgba(255, 255, 255, 0.75), 0 0 15px rgba(255, 255, 255, 0.5), 0 0 rgba(255, 255, 255, 0.5) #0f51cc;
`;

const Name = styled.h1`
	font-size: 2em;
	text-transform: uppercase;
`;

const ProfilePhoto = styled.div`
	display: flex;
	width: 240px;
	height: 240px;
	border-radius: 100%;
	overflow: hidden;
	img {
		width: 100%;
		object-fit: cover;
	}
`;

const Filmography = styled.div`
	h3 {
		font-size: 1.2em;
		margin-bottom: 10px;
	}
	ul {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 7px;
		font-family: "NewWaltDisneyFontRegular-BPen";
	}
	li {
		padding: 10px 12px;
		border: 1px solid;
		border-radius: 5px;
		transition: all 0.2s ease-in;
		&:hover {
			background-color: ${props => props.theme.textColor};
			color: ${props => props.theme.bgColor};
		}
	}
`;

const Source = styled.a`
	display: block;
	width: 100%;
	border: 1px solid;
	border-radius: 5px;
	margin-top: 5px;
	padding: 10px 15px;
	transition: all 0.2s ease-in;
	font-family: "NewWaltDisneyFontRegular-BPen";
	background-color: ${props => props.theme.accentColor};
	color: ${props => props.theme.textColor};
	&:hover {
		color: ${props => props.theme.accentColor};
		background-color: ${props => props.theme.textColor};
	}
`;

function CharacterCard(character: ICharacterDetail) {
	return (
		<Card>
			<GoBackButton />
			<Name>{character.name}</Name>
			<ProfilePhoto>
				<img src={character.imageUrl ? character.imageUrl : defaultImg} alt={character.name} />
			</ProfilePhoto>
			<Filmography>
				<h3>Philmography</h3>
				<ul>
					{character.films.map((film, index) => (
						<li key={`film_${index}`}>{film}</li>
					))}
				</ul>
			</Filmography>
			<Source href={character.sourceUrl} target="_blank">
				Click here for more!
			</Source>
		</Card>
	);
}

export default CharacterCard;
