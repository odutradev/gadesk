
import styled from 'styled-components'

export const Container = styled.div`
		height: 50px;
	margin: 10px 0 ;
	padding: 2px 20px;
	widht: 100%;

	justify-content: space-between;
flex-direction: row;
	display: flex; 



	#menu{
		widht: 50%;
		align-items: center;

		display: flex;
		heidht: 100%
	}
 
#heartButton, #menuButton, #cartButton {
			flex-direction: row;
			align-items: center;
			display: flex;
	margin-left: 15px;
	padding: 5px;
		border-radius: 5px;
		&:hover{
			  background-color: ${({theme}) => theme.colors.secondaryBackground};
			  color: ${({theme}) => theme.colors.primary};
			cursor: pointer;
	}
}
		#heartButton{
p{
	margin-left: 5px;
	
}
		}
	#menuButton{
	margin-left: 25px;
		
	}
	#cartButton{
		
	}
	`

export const Sidebar = styled.div`
	height: 100vh;
	width: 40%;
	background-color: 
		
	`