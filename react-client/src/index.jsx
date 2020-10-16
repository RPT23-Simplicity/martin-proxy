import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
  }

  render () {
    return (
    <div>
      <h1 className="header">Nike</h1>
      <div>Nike</div>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));