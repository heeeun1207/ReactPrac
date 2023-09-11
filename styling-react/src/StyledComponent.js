import styled, { css } from 'styled-components';

/* props로 넣어준 값을 직접 전달해 줄 수 있다. */
const Box = styled.div`
  background: ${props => props.color || 'blue'};
  padding: 1rem;
  display: flex;
  /* 기본적으로 가로 크기 1024px에 가운데 정렬하고 
  가로 크기가 작아짐에 따라 크기를 줄이고 
  768px 미만이 되면 꽉 채운다. */
  width: 1024px;
  margin: 0 auto;
  @media (max-width:1024px){
    width: 768px;
  }
  @media (max-width:768px){
    width: 100%;
  }
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: border-box;
  font-size: 1rem;
  font-weight: 600;

&:hover {
  background:rgba(255,255,255,0.9);
}

${props =>
    props.inverted &&
    css`
    background: none;
    border: 2px solid white;
    color: white;
    &:hover {
      background: white;
      color: black;
    }
  `};

& + button{
  margin-left: 1rem;
}
`;

const StyledComponent = () => (
  <Box color="black">
    <Button>안녕하세요</Button>
    <Button inverted={true}>테두리만</Button>
  </Box>
);

export default StyledComponent;
