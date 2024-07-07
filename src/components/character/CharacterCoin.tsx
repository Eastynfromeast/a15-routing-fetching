import { Link } from "react-router-dom";
import styled from "styled-components";
import { ICharacter } from "../../utils/interface";
import { useEffect, useState } from "react";
import { defaultImg } from "../../utils/utils";

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
		filter: grayscale(1) blur(5px);
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
			text-shadow: 0 0 5px rgba(255, 255, 255, 0.75), 0 0 10px rgba(255, 255, 255, 0.5), 0 0 15px #0f51cc;
		}
	}
`;

function CharacterCoin(character: ICharacter) {
	const validateImageUrl = (url: string): Promise<boolean> => {
		return new Promise(resolve => {
			const img = new Image();
			img.src = url;
			img.onload = () => resolve(true);
			img.onerror = () => resolve(false);
		});
	};

	const [validImageUrl, setValidImageUrl] = useState(character.imageUrl);
	useEffect(() => {
		const checkImageUrl = async () => {
			const isValid = await validateImageUrl(character.imageUrl);
			if (!isValid) {
				setValidImageUrl(defaultImg);
				console.log(defaultImg);
			}
		};
		checkImageUrl();
	}, [character.imageUrl]);

	return (
		<Coin key={character.id}>
			<Link to={`/character/${character.id}`}>
				<img src={validImageUrl} alt={character.name} />
				<h2>{character.name}</h2>
			</Link>
		</Coin>
	);
}

export default CharacterCoin;
