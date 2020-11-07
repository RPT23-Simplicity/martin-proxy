import React from 'react';
import Header from './components/Header.jsx';
import HeaderBottom from './components/HeaderBottom.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  render () {
    return (
    <div>
      <Header />
      <HeaderBottom />
    </div>
    )
  }
}

export default App;
