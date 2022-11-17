import styled from 'styled-components'


export const Container = styled.ul`
	display: flex;
	height: 80vh;
	widht: 80%;
	align-items: center;
	justify-content: space-between;
margin: 0 10%; 
	`

export const Price = styled.p`
	display: flex;
			font-weight: 300;
	 span{
		 font-size: 12px;
align-items: flex-start;
		 margin-right: 3px;
	 }
	`
export const Card = styled.li`
	 background-color: ${({theme}) => theme.colors.secondaryBackground};
border-radius: 10px;	
	height: 50%;
 margin: 0 10px;
width: 180px;
 list-style: none;
	align-items: center;
justify-content: space-between;
flex-direction: column;
	display: flex;
 padding: 10px;
 &:hover{
	 	height: 50.5%;
	width: 180.5px;
	 transition: 0.2s;
 }
 `
export const CardTitle = styled.p`
	
	`
export const ImageContainer = styled.div`
	width: 70%;
	height: 50%;
 border-radius: 5px;	
display: flex;
		align-items: center;
justify-content: center;
background-color: ${({theme}) => theme.colors.background};
	`
export const InformationsContainer = styled.div`
	width: 90%;
	height: 40%;
	justify-content: space-around;
	display: flex;
	flex-direction: column;
	`
