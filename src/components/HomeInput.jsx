import React, { useState } from 'react';
import { styled } from 'styled-components';
const InputDiv = styled.div`
  margin: 20px 0;
  text-align: center;

  input {
    width: 80%;
    height: 25px;
    font-size: 15px;
    padding: 10px 10px;
    border-radius: 1rem;
    border: 2px solid gray;
    background: #eee;

    &:focus {
      outline: none;
    }
  }

  button {
    padding: 13px 30px;
    border-radius: 1rem;
    border: 2px solid gray;
    background-color: lightskyblue;

    &:hover {
      background-color: lightcoral;
      color: white;
      transition: all 0.5s;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
const HomeInput = () => {
  const [title, setTitle] = useState('');
  const [input, setInput] = useState('');

  function addPost(input) {
    let newTitle = [...title];
    newTitle.unshift(input);
    setTitle(newTitle);
  }

  return (
    <InputDiv>
      <input onChange={(e) => setInput(e.target.value)} />
      <button
        onClick={() => {
          addPost(input);
        }}
      >
        등록하기
      </button>
    </InputDiv>
  );
};

export default HomeInput;
