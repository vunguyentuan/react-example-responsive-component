import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

class MyComponent extends React.Component {
  state = {
    shouldReturnNULL: false
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        shouldReturnNULL: true
      })
    }, 5000)
  }

  render() {
    if (this.state.shouldReturnNULL) return null
    return <App />
  }
}

const Container = (props) =>  {
  console.log(props.children(100))
  return (
    <div className="container">
      <h1>Header </h1>
      <div className="body">
        {props.children(100)}
      </div>
    </div>
  )
}

const About = () => (
  <div className="about">
    <Container>
      {
        (width) => {
          return <div className="hehe">ÁDasdasdadas {width}</div>
        }
      }
    </Container>
  </div>
)

ReactDOM.render(<App breakpoint={200}/>, document.getElementById('root2'));
// ReactDOM.render(<About />, document.getElementById('root2'))

registerServiceWorker()
