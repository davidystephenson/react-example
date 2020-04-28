import React from 'react';
// const react = require('react')
import logo from './logo.svg';
import './App.css';

function Message () {
  return <p>Welcome students</p>
}

// <Message />
// Message()

function say (phrase, punctuation) {
  return `${phrase}${punctuation}`
}

say('Hello', '!')
// Hello!

function Greet (props) {
  console.log('props test:', props)

  const punctuation = '!'

  const greeting = props.greeting || 'Hello'

  return <p>{greeting} {props.student}{punctuation}</p>
}

function Greetings ({ custom, subtitle }) {
  return <div>
    <h3>{subtitle}</h3>
    <Greet student='Amy' greeting={custom} />
    <Greet student='Donald' />
  </div>
}

function Greetings2 (props) {
  const { custom, subtitle } = props

  return <div>
    <h3>{subtitle}</h3>
    <Greet student='Amy' greeting={custom} />
    <Greet student='Donald' />
  </div>
}

function Greetings3 (props) {
  return <div>
    <h3>{props.subtitle}</h3>
    <Greet student='Amy' greeting={props.custom} />
    <Greet student='Donald' />
  </div>
}

function App() {
  return (
    <div>
      <Message />

      <a href='http://google.com'>google</a>

      <Greetings
        subtitle='I hope you all are welcome'
        custom="What's up my good friend"
      />
    </div>
  );
}

export default App;
