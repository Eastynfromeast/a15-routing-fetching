import { Link } from "react-router-dom";
import styled from "styled-components";

const GoBackBtn = styled.span`
	display: block;
	position: absolute;
	top: 3%;
	right: 3%;
	width: 35px;
	height: 35px;
	background-color: rgba(0, 0, 0, 0.5);
	color: #fff;
	border-radius: 50%;
	a {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
	}
	svg {
		width: 80%;
	}
`;

function GoBackButton() {
	return (
		<GoBackBtn>
			<Link to={"/"}>
				<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
					<path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
				</svg>
			</Link>
		</GoBackBtn>
	);
}

export default GoBackButton;
