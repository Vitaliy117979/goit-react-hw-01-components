import styled from "styled-components";

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

export const Wrapper = styled.section`
display: flex;
justify-content: center;
flex-direction: column;
width: 340px;
margin: 10px auto;

 text-align: center;
  overflow: hidden;

  border: 1px solid #3f3f3f;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0) 0px 1px 2px;

  padding: 5px;
`

export const Title = styled.h2`
font-size: 24px;
display: flex;
justify-content: center;

`


export const List = styled.ul`
list-style: none;
display: flex;
justify-content: space-evenly;
padding-left: 10px;
padding-right: 10px;
gap: 8px;
`

export const Item = styled.li`
list-style: none;
display: flex;
justify-content: space-evenly;
flex-direction: column;
width:60px ;
gap: 8px;
background-color: ${getRandomHexColor()};
box-shadow: ${getRandomHexColor()} 0px 1px 2px;

`


