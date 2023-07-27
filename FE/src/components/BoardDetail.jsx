import React from 'react';
import { styled } from 'styled-components';

const DetailBlock = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightgoldenrodyellow;
`;

const PostTitle = styled.span`
  margin-top: 5rem;
  margin-bottom: 5rem;
  font-size: 25px;
`;

const PostContent = styled.div`
  margin-top: 1rem;
`;

const BoardDetail = () => {
  return (
    <>
      <DetailBlock>
        <PostTitle>제목</PostTitle>
        <PostContent>내용</PostContent>
      </DetailBlock>
    </>
  );
};

export default BoardDetail;
