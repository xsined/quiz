import React, { useState } from 'react';
import Button from '@mui/material/Button';
import './result.css';


export const Result = ({ correct, questions }) => {
  return (
    <div className="result">
      <h2>Правильних відповідей {correct} з {questions.length}</h2>
      <a href="/">
        <Button variant="contained">Спробувати ще раз</Button>
      </a>
    </div>
  );
};






