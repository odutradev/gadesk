import styled from 'styled-components'


export const Container = styled.ul`
	display: flex;
	height: 80vh;
	width: 95%;
	align-items: center;
	justify-content: space-around;
margin: 0 2.5%; 
	`

export const Card = styled.li`
	width: 25%;
	height: 60%;
background-color: #211F1F;
	list-style: none;
	padding: 20px;
	border-radius: 10px;
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	.title {
	flex-direction: column;
	display: flex;
	align-items: center;
	}

	p{
		text-align: center;
			color: #A7A6A6;
		font-size: 12px
	}
	&:hover{
			width: 30%;
	height: 65%;
		transition: 0.5s;
	}

	`

export const Title = styled.h1`
	font-size: 22px;
				font-weight: 600;

	`

export const Description = styled.h1`
	font-size: 11px;
				  color: ${({theme}) => theme.colors.textSecondary};
	`
export const Price = styled.h1`

			font-weight: 800;
	font-size: 40px;
	 span{
		 font-size: 20px;


	 }
	`
export const Button = styled.button`
	background-color: ${({theme}) => theme.colors.primary};
 color: ${({theme}) => theme.colors.text};
 padding: 10px;
 border: none;
 width: 80%;
 border-radius: 5px;
 &:hover{
 width: 90%;
	 transition: 0.5s;
	 filter: brightness(1.1);
 }
	`


export const Line = styled.span`
	width: 90%;
	height: 0.8px;
	background-color: #A7A6A6;
	`