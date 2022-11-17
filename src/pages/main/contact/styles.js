import styled from 'styled-components'


export const Container = styled.ul`
	display: flex;
	height: 80vh;

	width: 80%;
margin: 0 10%;
flex-direction: row;
justify-content: space-between;
align-items: center;

#division{
 width: 45%;
 height: 70%;
 padding: 20px;
 display: flex;
 flex-direction: column;
 justify-content: space-between;

}
h1{
	font-weight: 600;
 font-size: 30px;
}

#title{

	display: flex;
	flex-direction: column;
	align-items: flex-start;
}
#values{
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-around;
	height:70%;

}

	`

export const Title = styled.h3`
text-align: start;
color: ${({theme}) => theme.colors.text};
font-size: 18px;
`

export const Value = styled.p`
text-align: start;
font-size: 15px;
color: ${({theme}) => theme.colors.secondaryText};
`