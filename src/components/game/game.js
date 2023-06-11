import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import './game.css';
import LinearProgress from '@mui/material/LinearProgress';


export const Game = ({ step, question, onClickVariant, questions }) => {
  const percentage =
    questions.length > 0 ? Math.round((step / questions.length) * 100) : 0;

  return (
    <div>
      <LinearProgress  className="progbar" color="inherit" variant="determinate" max="100" value={percentage}></LinearProgress >
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <ListItemButton component="a" onClick={() => onClickVariant(index)} key={text}>
            {text}
          </ListItemButton >
        ))}
      </ul>
    </div>
  );
};
