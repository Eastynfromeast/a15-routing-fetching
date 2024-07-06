import { Link } from "react-router-dom";
import styled from "styled-components";
import { ICharacter } from "../../utils/interface";
import { addDefaultImg } from "../../utils/utils";
import defaultImg from "../../img/default_image.jpg";

const Coin = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	padding: 15px;
	text-align: center;
	transition: all 0.2s ease-in;
	a {
		display: block;
		position: relative;
		overflow: hidden;
		width: 100%;
		height: 100%;
		border-radius: 100%;
		transition: all 0.2s ease-in;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		filter: grayscale(1) blur(10px);
		transition: all 0.2s ease-in;
	}
	h2 {
		font-size: 1.5em;
		text-align: center;
		color: ${props => props.theme.textColor};
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		transition: all 0.2s ease-in;
	}
	&:hover {
		a {
			box-shadow: 0 0 10px 8px rgba(255, 255, 255, 0.75), 0 0 15px 10px rgba(255, 255, 255, 0.25);
		}
		img {
			filter: none;
		}
		h2 {
			color: ${props => props.theme.popColor};
		}
	}
`;

function CharacterCircle(character: ICharacter) {
	return (
		<Coin key={character.id}>
			<Link to={`/character/${character.id}`}>
				<img
					src={character.imageUrl ? character.imageUrl : defaultImg}
					alt={character.name}
					onError={e => {
						(e.target as HTMLImageElement).src = defaultImg;
					}}
				/>
				<h2>{character.name}</h2>
			</Link>
		</Coin>
	);
}

export default CharacterCircle;
