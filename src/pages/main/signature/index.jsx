import React from 'react';

import { Container, Card, Title, Price, Button, Line, Description} from './styles.js'

const Cards = () => {
	return (

		<Container>

			<Card>
<div class='title'>
				<Title>Assinatura Mensal</Title>
				<Description>1 mês*</Description>
</div>
						<Price>
				<span>R$</span> 59,99<span>/mês</span>
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
				<Title>Assinatura Semestral</Title>
				<Description>6 meses*</Description>
</div>
						<Price>
				<span>R$</span> 39,99<span>/mês</span>
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
				<Title>Assinatura Anual</Title>
				<Description>12 meses*</Description>
</div>
						<Price>
				<span>R$</span> 29,99<span>/mês</span>
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