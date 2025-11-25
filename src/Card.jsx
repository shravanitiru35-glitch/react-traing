


import styled from "styled-components";

const CardContainer = styled.div`
  padding: 20px;
  border-radius: 8px;
  background-color: #eee;
  text-align: center;
`;

const Title = styled.h2`
  color: #333;
`;

function Card() {
  return (
    <CardContainer>
      <Title>Styled Component Card</Title>
    </CardContainer>
  );
}

export default Card;