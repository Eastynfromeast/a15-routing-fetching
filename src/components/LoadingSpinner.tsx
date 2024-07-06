import { RotatingLines } from "react-loader-spinner";
import { ILoadingContext } from "../utils/interface";
import styled from "styled-components";
import { disneyTheme } from "../theme";

const LoaderWrapper = styled.div`
	margin: 0 auto;
	width: 100%;
	height: 100%;
	text-align: center;
	min-height: 100vh;
	padding-top: 30%;
	p {
		color: ${props => props.theme.textColor};
	}
`;

function LoadingSpinner({ context }: ILoadingContext) {
	return (
		<LoaderWrapper>
			<RotatingLines strokeColor={disneyTheme.textColor} strokeWidth="5" animationDuration="0.75" width="96" visible={true} />
			<p>{context}</p>
		</LoaderWrapper>
	);
}

export default LoadingSpinner;
