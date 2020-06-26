import styled from 'styled-components'

export const StyledName =  styled.div`
	width:100px;
	text-transform: capitalize;
	text-align: center;
`;

export const StyledMechanic = styled.div`
	background: url(../../assets/images/${(props)=>props.gender}${(props)=>props.position}.png); 
	border-radius: 3px;
	cursor: pointer;
	border: 1px solid palevioletred;
	width:100px;
	height:100px;
	background-position:center;
	background-repeat:no-repeat;
	background-size:cover;
`;
