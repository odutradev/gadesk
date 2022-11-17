import React from 'react';
import gabi from '../../../assets/imgs/gabi.png'
import anna from '../../../assets/imgs/anna.png'
import { Container, Card} from './styles.js'

const Team = () => {
	return (

		<Container>
<Card>
<div>
	<img src={gabi}/>
</div>
<div class='informations'>
	<h1>Gabriela Viana</h1>
<div class='about'>
<p>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ullam recusandae explicabo ab atque. Fugiat tenetur, facilis non eveniet aspernatur iste culpa cupiditate reprehenderit aliquid unde architecto suscipit corporis excepturi at laborum, obcaecati ea deserunt!
	</p>
</div>

	<span>curso administração - cebrac BH</span>
</div>
</Card>
<Card>
<div>
	<img src={anna}/>
</div>
<div class='informations'>
	<h1>Anna Karolina</h1>
<div class='about'>
<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ad laborum corrupti. Deleniti eaque, quisquam beatae laudantium culpa consectetur illum maxime tempore omnis dolorem sapiente.
	</p>
</div>

	<span>curso administração - cebrac BH</span>
</div>
</Card>

		</Container>

	)
}

export default Team