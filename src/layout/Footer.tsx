import styled from "styled-components";

const FooterContainer = styled.footer`
	border-top: 1px solid;
	background: transparent;
	text-align: right;
	padding: 20px 20px 0 20px;
	margin-top: 30px;
	display: flex;
	justify-content: space-between;
	font-size: 18px;
`;

function Footer() {
	return (
		<>
			<FooterContainer>
				<span>page created by Nulnu</span>
				<p> copyright &copy; Disney</p>
			</FooterContainer>
		</>
	);
}

export default Footer;
