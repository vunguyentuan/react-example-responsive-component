import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class MyComponent extends React.Component {
  state = {
    shouldReturnNULL: false
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        shouldReturnNULL: true
      })
    }, 5000);
  }
  
  render() {
    if (this.state.shouldReturnNULL) return null;
    return <App />
  }
}

ReactDOM.render(<App breakpoint={200}/>, document.getElementById('root'));
ReactDOM.render(<MyComponent />, document.getElementById('root2'));

registerServiceWorker();
