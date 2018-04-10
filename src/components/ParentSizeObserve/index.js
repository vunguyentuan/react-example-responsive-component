import React, { Component } from 'react';
import debounce from 'lodash/debounce'

class ParentSizeObserve extends Component {
  state = {}

  componentDidMount() {
    this.setState({
      containerWidth: this._element.clientWidth
    })

    window.addEventListener('resize', this.handleWindowResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize)
  }

  handleWindowResize = debounce(() => {
    this.setState({
      containerWidth: this._element.clientWidth
    })
  }, 100)
  
  render() {
    return (
      <div className="myApp" ref={node => this._element = node}>
        {this.props.children(this.state.containerWidth)}
      </div>
    );
  }
}

export default ParentSizeObserve;
