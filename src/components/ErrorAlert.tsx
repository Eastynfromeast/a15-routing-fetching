import { IQueryError } from "../utils/interface";
import styled from "styled-components";

const AlertContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background: rgba(215, 77, 77, 0.5);
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	flex-direction: row;
	align-items: center;
`;

function ErrorAlert({ statusCode, message }: IQueryError) {
	return (
		<AlertContainer>
			<strong>{statusCode}</strong>
			<p>{message}</p>
		</AlertContainer>
	);
}

export default ErrorAlert;
