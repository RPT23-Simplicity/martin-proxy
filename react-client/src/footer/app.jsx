import React from 'react';
import Footer from './components/Footer.jsx';

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
      <Footer />
    </div>
    )
  }
}

export default App;
