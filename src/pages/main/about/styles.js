import styled from "styled-components";


export const Container = styled.div`
	height: 65vh;
display: flex;
flex-direction: column;
justify-content: center;

	.title {
		height:10vh;
		width: 100%;
		text-align: center;
				justify-content: flex-start;
	font-size: 30px;
		font-weight:900
	}
	.cards{
		width: 100%;
		padding: 10px 0;
		justify-content: flex-end;

		display: flex;
flex-direction: column;
align-items: center;



	}
	`

export const Title = styled.h1`
		font-size: 22px;
		font-weight:500
	`
export const Description = styled.p`

	span{
		background-color:  #9A74B8;
				height:10px;
		width: 10px;
		
	}
	`