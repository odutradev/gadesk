import React from 'react';

import { Container, Card, Title, Price, Button, Line, Description} from './styles.js'

const Cards = () => {
	return (

		<Container>

			<Card>
<div class='title'>
				<Title>Assinatura Padrão</Title>
				<Description>Perfeito para baixa demanda</Description>
</div>
						<Price>
				<span>R$</span> 49,99
				</Price>


				<Button>Assinar</Button>

				<Line/>
			<div>
				<p>* Profissional especializado para criação de modelos personalizados</p>
				<p>* Desconto na criação de modelos personalizados</p>
				<p>* Frete gratis para todos os estados</p>
			</div>
			</Card>
					<Card>
<div class='title'>
				<Title>Assinatura Premium</Title>
				<Description>assinatura para alta demanda</Description>
</div>
						<Price>
				<span>R$</span> 79,99
				</Price>


				<Button>Assinar</Button>

				<Line/>
			<div>
				<p>* Profissional especializado para criação de modelos personalizados</p>
				<p>* Desconto na criação de modelos personalizados</p>
				<p>* Frete gratis para todos os estados</p>
			</div>
			</Card>
			<Card>
<div class='title'>
				<Title>Assinatura Premium</Title>
				<Description>assinatura para alta demanda</Description>
</div>
						<Price>
				<span>R$</span> 79,99
				</Price>


				<Button>Assinar</Button>

				<Line/>
			<div>
				<p>* Profissional especializado para criação de modelos personalizados</p>
				<p>* Desconto na criação de modelos personalizados</p>
				<p>* Frete gratis para todos os estados</p>
			</div>
			</Card>
			
			
		</Container>

	)
}

export default Cards