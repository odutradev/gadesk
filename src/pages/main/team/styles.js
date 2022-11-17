import styled from 'styled-components'


export const Container = styled.ul`
	display: flex;
	height: 80vh;

	width: 80%;
margin: 0 10%;
display:flex;
justify-content: space-between;
align-items: center;

	`
	export const Card = styled.div`
	 background-color: ${({theme}) => theme.colors.secondaryBackground};
border-radius: 10px;	
	height: 50%;

width:40%;
 list-style: none;
	align-items: center;
justify-content: space-between;
flex-direction: row;
	display: flex;
	padding: 20px;


img {
 width:170px;
 height: 170px;
 }
 div{
	display: flex;
	width:45%;
	height: 95%;
	justify-content: center;
:nth-child(1){
	align-items: center;
}

 }

 .informations{
	flex-direction: column;
	justify-content: space-between;
	h1{
		
		font-weight: 600;
		font-size: 18px;
	}

	.about{

		height: 60%;
		width: 95%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 2.5%;
	}
p{

	text-align: center;
			color: #A7A6A6;
		font-size: 12px
}

span{
	font-size: 10px;
	color: ${({theme}) => theme.colors.text};
}
 }
 `