import styled from 'styled-components'

export const StyledPlayer = styled.div`
	width: 100%;
  height: 200px;
  max-width: 500px;
  margin: 0 auto;
`;

export const StyledText = styled.p`
  width: 50%;
  float: left;
  color: gray;
  text-align: left;
  margin-left: 20px;
`;

export const StyledTextError = styled.p`
  width: 100%;
  float: left;
  color: red;
`;

export const StyledLegalText = styled.p`
  width: 100%;
  text-align: center;
  color: gray;
  font-size: 14px;
  margin-top: 40px;
  cursor: pointer;
`;

export const Row = styled.div`
	width: 100%;
	height: 50px;
  text-align: center;
`;

export const Input = styled.input`
  width: 41%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  margin-left: 10px;
  float: left;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

export const StyledButton = styled.button`
  width: 100%;
  height: 35px;
  cursor: pointer;
  background: #d23737;
  color: white;
  font-size: 14px;
  border: 1px solid #d23737;
  border-radius: 3px;
  line-height: 30px;
`;

export const Select = styled.select`
  width: 43%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-left: 10px;
  float: left;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const TitleRow = styled.div`
  width: 100%;
    height: 70px;
    text-align: center;
    line-height: 80px;
`;