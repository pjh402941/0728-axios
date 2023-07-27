// 게시판 목록 조회
import React, { useState } from 'react';
import styled from 'styled-components';
import BoardItem from './BoardItem';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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

// const initialPostList = [
//   { postID: 1, title: '동덕멋사짱.', content: '내용내용' },
//   { postID: 2, title: '프론트 사자', content: '내용내용' },
//   { postID: 3, title: '파이팅❤️', content: '내용내용' },
// ];

const BoardList = ({ postList }) => {
  // const [isPost, setIsPost] = useState(false);
  // const [postList, setPostList] = useState(initialPostList);
  console.log(postList);
  const navigate = useNavigate();
  // 요청 대기 : true, 요청 끝 : false
  const [loading, setLoading] = useState(false);

  // 대기 중인 상태라면
  if (loading) {
    return <BoardListBlock>대기중...</BoardListBlock>;
  }

  return (
    <BoardListBlock>
      {postList &&
        postList.map((e) => (
          <BoardItem
            key={e.postID}
            postID={e.postID}
            title={e.title}
            content={e.content}
          />
        ))}
    </BoardListBlock>
  );
};

export default BoardList;
