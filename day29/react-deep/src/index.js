import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class MyApp extends React.Component {
  render() {
    return (
      <div>
        <h1>This is class based Component</h1>
      </div>
    )
  }
}

function Dapp() {
  return <p> affjlsjlfd </p>
}

function App() {
  return (
    <div>
      <Dapp></Dapp>
      <MyApp></MyApp>
      <h1>This is h1</h1>
    </div>
  )
}

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
)

ReactDOM.render(
  <Dapp></Dapp>,
  document.getElementById('root1')
)

