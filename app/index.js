import React from 'react'
import Hello from './hello.js'
import ReactDOM from 'react-dom'
import './index.css'

function isAuthed() {
  return true
}

export default class App extends React.Component {
  render() {
    const name = "Ludwig Gerdes"

    return (
      <Hello
        name={name}
        authed={isAuthed()}
        logout={() => alert('Logged Out!')}
        header={<h1>Welcome back!</h1>}
      />
    )
  }
};

ReactDOM.render(
  <App/>, document.getElementById('app')
);
