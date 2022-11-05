import { BiMenu } from "react-icons/bi";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { FiX } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import React, {useState} from 'react';

import { Container, Sidebar } from './styles.js'
import Icon from '../../assets/imgs/icon.svg'
const Navbar = () => {

	const [sidebar, setSidebar] = useState(false);
	
	return (
		<>
		<Container>
<img src={Icon} />
	<div id='menu'>
		
	<div id='heartButton'>
	<AiOutlineHeart color={'#EEEEEE'} size={25}/>
		<p>Favoritos</p>
	</div>
		
	<div id='cartButton'>
	<RiShoppingBasket2Line color={'#EEEEEE'} size={25}/>
	</div>
		
<div id='menuButton' onClick={() => setSidebar(!sidebar)}>
	{!sidebar ? <BiMenu color={'#EEEEEE'} size={45}/> : <FiX color={'#EEEEEE'} size={45}/>}
</div>
		
	</div>
		</Container>
			
		</>
	)
}

export default Navbar

/*
{sidebar && (
			<Sidebar>
			teste
			</Sidebar>
			)}
**/