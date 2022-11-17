import React from 'react';
import map from '../../../assets/imgs/map.png'
import {BsInstagram} from 'react-icons/bs'
import { Container, Title, Value} from './styles.js'

const Contact = () => {
	return (

		<Container>
				<div id='division'>
					<div id='title'>
					<h1>Contato</h1>
					</div>
					<div id='values'>
					<div>
					<Title>
						Endereço
					</Title>
					<Value>
						Belo Horizonte, Centro -  s/n
					</Value>
					</div>
					<div>
					<Title>
						Email
					</Title>
					<Value>
						gadesk.store@gmail.com
					</Value>
					</div>

			<div>
			<Title>
Horário de atendimento		
			</Title>
					<Value>
						Segunda a Sexta<br/>
						08h00 - 18h00
					</Value>
			</div>
					<a href='https://instagram.com/gadesk.store'><BsInstagram color={'#EEEEEE'} size={25}/></a>
					</div>
					
				</div>
				<div class='map'>
				<img src={map}/>
				</div>
		</Container>

	)
}

export default Contact