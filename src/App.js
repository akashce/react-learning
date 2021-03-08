import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
    const [personState, setPersons] = useState({
      persons:[
        {name:'max', age:28}
      ]
    })
    return (
      <div className="App">
        <h1>Hi their</h1>
        <Person />
      </div>
    );
}

export default app;
