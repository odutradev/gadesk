import React from 'react';

import Icon from '../../assets/imgs/logo.svg'
import Team from './team';
import Navbar from '../../components/navbar'
import Work from './work'
import Signature from './signature'
import About from './about'
import Cards from './cards'
import Contact from './contact';

import { Container, Home, Title, SubNavbar, ContainerTitle} from './styles.js'

const Main = () => {
	return (
		<Container>
			<Navbar/>
			<Home>
					<Title>
					GADESK
					</Title>
			</Home>

					<SubNavbar>
					<li><a href='#produtos'>Produtos</a></li>
					<li><a href='#sobre'>Sobre</a></li>
					<li><a href='#work'>Trabalhe conosco</a></li>
					<li><a href='#assinatura'>Assinatura</a></li>
					<li><a href='#team'>Equipe</a></li>
				</SubNavbar>
			<div id='produtos'>
		<Cards />
				</div>
			
<div id='sobre'>
	<ContainerTitle>
		Sobre
	</ContainerTitle>
			<About/>
</div>
			
			<div id='assinatura'>			
			<ContainerTitle>
				Escolha sua assinatura
			</ContainerTitle>
		<Signature/>
			</div>
		
<div id='team'>
			<ContainerTitle>
				Equipe
			</ContainerTitle>
			<Team/>
</div>

<div id="contact">
	<Contact/>
</div>

<div class='footer'>
			<span></span>
			<p>Copyright © 2022 </p>
</div>
		</Container>
	)
}

export default Main


/*
<div id='work'>
			<ContainerTitle>
				Trabalhe conosco
			</ContainerTitle>
			<Work/>
</div>
*/