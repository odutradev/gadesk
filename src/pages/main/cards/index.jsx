import React from 'react';


import {  RiTShirt2Line } from "react-icons/ri";
import { Container, CardTitle, Card, Price, ImageContainer, InformationsContainer} from './styles.js'

const Cards = () => {
	return (

		<Container>
			
			<Card>
			<ImageContainer>
			<RiTShirt2Line color={'#EEEEEE'} size={80}/>
			</ImageContainer> 
				<InformationsContainer>
							<Price>
				<span>R$</span> 79,90
				</Price>
									<CardTitle>
				Calça alfaiataria adaptada 
				</CardTitle>
				</InformationsContainer>
			</Card>
			
			<Card>
			<ImageContainer>
			<RiTShirt2Line color={'#EEEEEE'} size={80}/>
			</ImageContainer> 
				<InformationsContainer>
							<Price>
				<span>R$</span> 59,90
				</Price>
									<CardTitle>
				Regata branca
				</CardTitle>
				</InformationsContainer>
			</Card>
			
			<Card>
			<ImageContainer>
			<RiTShirt2Line color={'#EEEEEE'} size={80}/>
			</ImageContainer> 
				<InformationsContainer>
				<Price>
				<span>R$</span> 165,40
				</Price>
									<CardTitle>
				Blazer feminino preto
				</CardTitle>
				</InformationsContainer>
			</Card>
			
			<Card>
			<ImageContainer>
			<RiTShirt2Line color={'#EEEEEE'} size={80}/>
			</ImageContainer> 
				<InformationsContainer>
							<Price>
				<span>R$</span> 98,00
				</Price>
									<CardTitle>
				Sobretudo feminino adaptado
				</CardTitle>
				</InformationsContainer>
			</Card>
			
			<Card>
			<ImageContainer>
			<RiTShirt2Line color={'#EEEEEE'} size={80}/>
			</ImageContainer> 
				<InformationsContainer>
							<Price>
				<span>R$</span> 186,99
				</Price>
									<CardTitle>
				Blusa de couro 
				</CardTitle>
				</InformationsContainer>
			</Card>
			
		</Container>

	)
}

export default Cards