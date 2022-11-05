import React from 'react';

import Icon from '../../assets/imgs/logo.svg'
import Navbar from '../../components/navbar'
import Work from './work'
import Signature from './signature'
import About from './about'
import Cards from './cards'

import { Container, Home, Title, SubNavbar} from './styles.js'

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
					<li><a href='#'>Equipe</a></li>
				</SubNavbar>
			<div id='produtos'>
		<Cards />
				</div>
			
<div id='sobre'>
			<About/>
</div>
			
			<div id='assinatura'>			
			<h1 class="containerTitle">
				Escolha sua assinatura
			</h1>
		<Signature/>
			</div>
			
<div id='work'>
			<h1 class="containerTitle">
				Trabalhe conosco
			</h1>
			<Work/>
</div>
<div class='footer'>
			<span></span>
			<p>Copyright © 2022 </p>
</div>
		</Container>
	)
}

export default Main