import React, { useState } from 'react';
import { styled } from 'styled-components';
import BoardList from './BoardList';

const InputDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 30px 0;

  .inputTitle {
    margin: 0 auto;
    width: 30%;
    height: 25px;
    padding: 10px;
    border-radius: 1rem;
    border: 2px solid gray;
    background: lightgrey;

    &:focus {
      outline: none;
    }
  }

  .inputContent {
    margin: 0 auto;
    width: 65%;
    height: 15rem;
    padding: 10px;
    margin-top: 1rem;
    border-radius: 1rem;
    border: 2px solid gray;
    background: #eee;
    resize: none;

    &:focus {
      outline: none;
    }
  }

  .submit {
    width: 30%;
    padding: 15px 10px;
    margin: 0px auto;
    margin-top: 1rem;
    border-radius: 1rem;
    border: 2px solid gray;
    background-color: lightskyblue;
    cursor: pointer;
    text-align: center;
    font-weight: 700;

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
  return (
    <>
      <InputDiv>
        <input className="inputTitle" />
        <textarea className="inputContent" />
        <div className="submit">저장</div>
      </InputDiv>
      <BoardList />
    </>
  );
};

export default HomeInput;
