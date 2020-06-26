import styled from 'styled-components'


export const ListPartsUl = styled.ul`
  -ms-box-orient: horizontal;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: baseline; 
  align-items: baseline;
  width: 100px;
  heigth: 100px;
  padding: 0px;
`;

export const CarPartsLi = styled.li`
  list-style: none;
  width:100%
`;

export const StyledText = styled.p`
  width: 50%;
  float: left;
`;

export const StyledCar = styled.div`
  background: url(../../assets/images/car.png); 
  width:400px;
  height:200px;
  background-position:center;
	background-repeat:no-repeat;
	background-size:cover;
  margin: 0 auto;
  margin-bottom: 50px;
`;

export const StyledPart =  styled.div`
  position: absolute;
  border: 1px solid gray;
`;

export const StyledTextError = styled.p`
  width: 100%;
  color: red;
  max-width: 400px;
  margin: 0 auto;
`;

export const Row = styled.div`
  width: 100%;
  height: 80px;
  text-align: center;
`;

export const RowStatus = styled.div`
  width: 100%;
  height: 50px;
  text-align: center;
`;