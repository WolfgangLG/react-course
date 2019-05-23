import React from 'react'

class Hello extends React.Component {
  render() {
    return (
      <div>
        {this.props.header}
        <h2>{this.props.name}</h2>
        <p>Today is {new Date().toLocaleString()}</p>
        <p>What is 2 + 2? The answer is {2 + 2}</p>
        {this.props.authed === true
          ? < button onClick={this.props.logout}>Logout</button> : null}
      </div>
    )
  }
}

export default Hello
