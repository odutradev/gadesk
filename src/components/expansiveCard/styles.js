import styled from "styled-components";



export const Container = styled.div`

width: 70%;
height: auto;

padding: 10px 40px;
border-radius: 10px;
margin: 10px 0;
background-color: ${({theme}) => theme.colors.secondaryBackground};
align-items: center;

#title{
    display: flex;
    flex-direction: row;
}
#text, #button {
    width: 50%;

}
#text {
    display: flex;
    justify-content: flex-start;
    align-items: center;


}

#button {
    display: flex;
    justify-content: flex-end;

}

p{
    color: ${({theme}) => theme.colors.secondaryText};
    font-size: 10;
    font-weight: 400;
}
`

export const TextContainer = styled.div`

padding: 20px;
//border-color: ${({theme}) => theme.colors.secondaryText};
//border-top-width: 0.01px;
//border-top-style: solid;
margin-top:7px;
p {
    text-align: justify;
    color: ${({theme}) => theme.colors.text};
    font-size: 12px;

}

`