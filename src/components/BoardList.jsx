import React from 'react';
import styled from 'styled-components';
import BoardItem from './BoardItem';
const BoardListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const sampleData = {
  title: '제목',
  content: '내용내용',
  url: 'www.google.com',
};

const BoardList = () => {
  return (
    <BoardListBlock>
      <BoardItem posts={sampleData} />
      <BoardItem posts={sampleData} />
      <BoardItem posts={sampleData} />
      <BoardItem posts={sampleData} />
    </BoardListBlock>
  );
};

export default BoardList;
