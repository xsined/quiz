import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import {Game} from './components/game';
import {Result} from './components/result';
import Container from '@mui/material/Container';



function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);

  const questions = [
    {
      title: 'Столиця України?',
      variants: ['Києв', 'Львів', 'Сан-Франківськ'],
      correct: 0,
    },
    {
      title: 'Національна валюта?',
      variants: ['Грива', 'Гривня', 'Доллар'],
      correct: 1,
    },
    {
      title: 'Хочеш 100 баксів?',
      variants: ['Так', 'Ні', 'Краще сто гривень'],
      correct: 2,
    },
    {
      title: 'Герб Україні- це',
      variants: ['Тризуб', 'Орел', 'Їжак'],
      correct: 0,
    },
  ];

  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="App">

      {step !== questions.length ? (
       <Game step={step} question={question} onClickVariant={onClickVariant} questions={questions} />
      ) : (
        <Result correct={correct} questions={questions} />
      )}

    </div>
  );
}

export default App;
