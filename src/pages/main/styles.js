import styled from "styled-components";

export const Container = styled.div`

	text-align: center;

	.footer{
		height: 5vh;
	width: 95%;
		margin: 0 2.5%;
		justify-content: center;
		align-items: center;

		p{
			font-size: 12px;

color: #A7A6A6;

	}

	`


export const ContainerTitle = styled.div`
  font-size: 30px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.text}
`;

export const Home = styled.div`
  height: 55vh;
  justify-content: center;
  align-items: flex-end;
  display: flex;
  position: relative;
`;

export const Title = styled.h1`
  font-size: 150px;
  font-weight: 1000;
  position: abslute;
`;

export const SubNavbar = styled.ul`
		height: 50px;
width: 40%;
	margin: 0 30%;
	display: flex;

		align-items: center;


	justify-content: space-between;
flex-direction: row;

	li{
		list-style: none;
		font-weight: 500;
		width: auto;
		height: auto;
		padding: 7px 10px;
		transition: 0.5s;
		border-radius: 5px;
		color: ${({ theme }) => theme.colors.text};
		&:hover{
			  background-color: ${({ theme }) => theme.colors.secondaryBackground};
			  color: ${({ theme }) => theme.colors.primary};
	}
		a, a:hover{
			color: unset;
			text-decoration: unset;
			
		}
`;
export const Cards = styled.ul`
  display: flex;
  height: 80vh;
  widht: 80%;
  align-items: center;
  margin: 0 10%;
`;

export const Price = styled.p``;
export const Card = styled.li`
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  border-radius: 10px;
  height: 50%;
  widht: 200px;
  list-style: none;
  align-items: center;
  flex-direction: colunm;
  display: flex;
`;
export const CardTitle = styled.p``;
export const CardImage = styled.div`
  width: 90%;
  height: 60%;
`;
