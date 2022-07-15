import React from 'react';
import styled from 'styled-components';

interface ListData {
  children: React.ReactNode;
  [key: string]: any;
}

const List = ({ children, ...props }: ListData) => {
  return <ListStyled {...props}>{children}</ListStyled>;
};

const ListStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
`;
export default List;
