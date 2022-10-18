import styled from '@emotion/styled';

export const Card = styled.div`
  width: 300px;
  margin: 20px auto 20px;
  box-shadow: 0px 0px 10px;
  border-radius: 8px;
`;

export const Description = styled.div`
  text-align: center;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  padding: 20px;
  box-shadow: inset 0px 0px 5px;
  border-radius: 50%;
  width: 50%;
  margin-top: 40px;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Tag = styled.p`
  color: grey;
  margin-bottom: 10px;
`;
export const Location = styled.p`
  color: grey;
  margin-bottom: 30px;
`;

export const CardList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  padding: 0;
  background-color: #d7ebeb;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin: 0;
`;

export const CardItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 33%;
  border-top: 1px solid #ddd4d4;
  padding: 10px 0px;
`;

export const Label = styled.span`
  color: grey;
  margin-bottom: 5px;
`;

export const CardItemFirst = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 33%;
  border-top: 1px solid #ddd4d4;
  border-right: 1px solid #ddd4d4;
  padding: 10px 0px;
  border-bottom-left-radius: 10px;
`;

export const CardItemLast = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 33%;
  border-top: 1px solid #ddd4d4;
  border-left: 1px solid #ddd4d4;
  padding: 10px 0px;
  border-bottom-right-radius: 10px;
`;

export const Quantity = styled.span`
  font-weight: 700;
  font-size: 18px;
`;

export const kaka = styled.div`
  padding: 300px;
`;
