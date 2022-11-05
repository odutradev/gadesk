import React from 'react';


import { Container, Title, Description} from './styles.js'

const About = () => {
	return (
		<Container>
			<div class="title">
				Sobre
			</div>
			<div class="text">
				<div>
				<Title>Missão:</Title>
				<Description>Tornar o mercado da moda inclusivo, trazendo roupas estilosas e confortáveis, que
sejam se adeque a todos os tipos de corpos, principalmente daqueles que não tem o
corpo padrão. Além de dar espaço para estilistas iniciantes ou autônomos exporem e
venderem os seus produtos recebendo uma parcela de cada uma de suas peças
vendidas. E sempre trazendo o melhor para os nossos clientes, sempre obstinados em
prever e atender todas as necessidades dos mesmos. Manter sempre o respeito pelos
nossos clientes, mostrando a eles que estamos preocupados com suas necessidades.
Trazendo sempre a melhor qualidade de atendimento, sendo sempre solícitos e gentis
todas as vezes que entrarmos em contato com os mesmos. Além de deixar o nosso site
cada vez melhor, buscando sempre torná-lo um ambiente confortável e intuitivo<span></span></Description>
				</div>
				
				<div>
				<Title>Visão:</Title>
				<Description>Se tornar uma marca conhecida e respeitada no mercado, além de inspirar outras
empresas da indústria da moda a seguirem o nosso exemplo, assim tornando esse
ramo verdadeiramente inclusivo. E também movimentar o mercado de estilistas
freelances<span></span></Description>
				</div>
				
				<div>
				<Title>Valores:</Title>
				<Description>Inclusão, respeito, humanidade, inovação, disponibilidade, intuitivo<span></span></Description>
				</div>
			</div>
			
		</Container>
	)
		}

export default About