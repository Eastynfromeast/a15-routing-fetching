import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchCharacterDetail } from "../utils/api";
import styled from "styled-components";
import { ICharacterDetail, IQueryError } from "../utils/interface";
import ErrorAlert from "../components/ErrorAlert";
import CharacterCard from "../components/character/CharacterCard";
import LoadingSpinner from "../components/LoadingSpinner";

const ModalContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background: rgba(43 44 51 / 50%);
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	flex-direction: row;
	align-items: center;
`;

function Detail() {
	const { id } = useParams();
	const {
		isLoading,
		data: character,
		error,
		isError,
	} = useQuery<ICharacterDetail, IQueryError>({
		queryKey: ["character", id],
		queryFn: () => fetchCharacterDetail(id!),
	});

	console.log(character);

	return (
		<ModalContainer>
			{isLoading && <LoadingSpinner context={"We are calling the character you want to know"} />}
			{character && <CharacterCard {...character} />}
			{isError && <ErrorAlert statusCode={error.statusCode} message={error.message} />}
		</ModalContainer>
	);
}

export default Detail;
