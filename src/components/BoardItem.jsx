import React from 'react';
import styled from 'styled-components';

const BoardItemBlock = styled.div`
  display: flex;
  .contents {
    h2 {
      margin: 0;
    }
    a {
      color: black;
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }

  // 컴포넌트가 바로 옆에 붙어 있는 경우에 사용
  & + & {
    margin-top: 3rem;
  }
`;

const BoardItem = ({ posts }) => {
  const { title, content, url } = posts;
  return (
    <BoardItemBlock>
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{content}</p>
      </div>
    </BoardItemBlock>
  );
};

export default BoardItem;
