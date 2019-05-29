import React from 'react'
import Hello from './components/hello'
import Popular from './components/Popular'
import ReactDOM from 'react-dom'
import './index.css'

function isAuthed() {
  return true
}

export default class App extends React.Component {
  render() {
    const name = "Ludwig Gerdes"

    return (
      <React.Fragment>
      <Hello
        name={name}
        authed={isAuthed()}
        logout={() => alert('Logged Out!')}
        header={<h1>Welcome back!</h1>}
      />
      <div className='container'>
        <Popular/>
      </div>
      </React.Fragment>
    )
  }
};

ReactDOM.render(
  <App/>, document.getElementById('app')
);
