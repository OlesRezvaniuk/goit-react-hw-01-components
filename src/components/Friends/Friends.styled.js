import styled from '@emotion/styled';

export const List = styled.ul`
  width: 240px;
  margin: auto;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Item = styled.li`
  height: 60px;
  display: flex;
  box-shadow: 0px 0px 5px;
  border-radius: 4px;
  padding: 5px;

  > li {
  }

  &:nth-child(even) {
  }

  &:hover {
  }

  &__button {
  }
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  background-color: red;
  border-radius: 50%;
  margin: auto 10px;
  box-shadow: 0px 0px 2px;
`;

export const Img = styled.img`
  box-shadow: inset 0px 0px 3px;
  padding: 5px;
  border-radius: 4px;
`;

export const Name = styled.p`
  display: block;
  margin: auto 20px;
  font-size: 20px;
  font-weight: bold;
`;
