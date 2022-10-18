import styled from '@emotion/styled';

export const Box = styled.section`
  text-align: center;
  width: 300px;
  margin: 0px auto 20px;
  box-shadow: 0px 0px 10px;
  padding-top: 20px;
  border-radius: 10px;
`;
export const Title = styled.h2`
  margin: 0px auto 20px;
  text-transform: uppercase;
  font-weight: 500;
  color: #5f5f5f;
`;
export const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  justify-content: center;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 55px;
  justify-content: center;
`;

export const Label = styled.span`
  color: white;
  font-size: 12px;
  margin-bottom: 2px;
`;
export const Percentage = styled.span`
  color: white;
  font-size: 18px;
  font-weight: 600;
`;
