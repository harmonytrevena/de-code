import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from './Card/Card';
// import './Card/card.css';

function GraditudeBoard() {
  const [cards, setCards] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('/cards')
      .then((res) => res.json())
      .then((data) => {
        // eslint-disable-next-line no-console
        console.log(data);
        setCards([...cards, ...data]);
      });
  });

  useEffect(() => {
    fetch('/tasks')
      .then((res) => res.json())
      .then((data) => {
        setTasks([...tasks, ...data]);
      });
  });

  const updateCardTitle = (cardId, newName) => {
    const edit = cards.slice();
    edit.forEach((currCard) => {
      if (currCard.cardid === cardId) {
        // eslint-disable-next-line no-console
        console.log(currCard.cardTitle);
        // eslint-disable-next-line no-param-reassign
        currCard.cardtitle = newName;
      }
    });
    setCards(edit);

    fetch(`/cards/${cardId}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cardTitle: newName,
      }),
    });
  };

  const addCard = () => {
    const nextCard = {
      cardtitle: `Gratidude Starts Here`,
      cardid: uuidv4(),
    };

    setCards([...cards, nextCard]);

    fetch(`/cards`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cardId: nextCard.cardid,
        cardTitle: nextCard.cardtitle,
      }),
    });
  };

  const deleteCard = (cardId) => {
    setTasks(tasks.filter((currTask) => currTask.parentid !== cardId));
    setCards(cards.filter((currCard) => currCard.cardid !== cardId));

    fetch(`/cards/${cardId}`, {
      method: 'DELETE',
    });
  };

  const updateTaskTitle = (taskId, newName) => {
    const edit = tasks.slice();
    edit.forEach((currTask) => {
      if (currTask.taskid === taskId) {
        // eslint-disable-next-line no-param-reassign
        currTask.tasktitle = newName;
      }
    });
    setTasks(edit);

    fetch(`/${taskId}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tasktitle: newName,
      }),
    });
  };

  const addTask = (parentCardId, addedTitle) => {
    const newTask = {
      taskid: uuidv4(),
      tasktitle: addedTitle,
      completed: false,
      parentid: parentCardId,
    };
    setTasks([...tasks, newTask]);

    fetch(`/tasks`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    });
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((currTask) => currTask.taskid !== taskId));

    fetch(`/tasks/${taskId}`, {
      method: 'DELETE',
    });
  };

  return (
    <>
      <div className="contain">
        {cards.map((currCard) => (
          <Card
            key={currCard.cardid}
            cardTitle={currCard.cardtitle}
            taskList={tasks.filter((curr) => curr.parentid === currCard.cardid)}
            cardId={currCard.cardid}
            updateCardTitle={updateCardTitle}
            deleteCard={deleteCard}
            updateTaskTitle={updateTaskTitle}
            addTask={addTask}
            deleteTask={deleteTask}
          />
        ))}
        <button type="button" className="new-list" onClick={() => addCard()}>
          +
        </button>
      </div>
    </>
  );
}

export default GraditudeBoard;
