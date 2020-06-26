import styled from 'styled-components'

export const StyledDashboard = styled.div`
  width: 100%;
  height: 200px;
  max-width: 500px;
  margin: 0 auto;
  border: 1px solid gray;
`;

export const StyledSuccess = styled.div`
  background: url(../../assets/images/pits-team.png); 
  width:400px;
  height:200px;
  background-position:center;
  background-repeat:no-repeat;
  background-size:cover;
  margin: 0 auto;
  margin-bottom: 50px;
`;

export const StyledText = styled.p`
  width: 100%;
  color: gray;
  text-align: center;
`;

export const Row = styled.div`
  width: 100%;
  height: 50px;
  text-align: center;
`;

export const TitleRow = styled.div`
  width: 100%;
  height: 70px;
  text-align: center;
  line-height: 80px;
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