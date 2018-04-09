import React, { Component } from 'react';
import debounce from 'lodash/debounce'

class Responsive extends Component {
  static defaultProps = {
    breakpoint: 300
  }

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
    const { breakpoint, layout1: LayoutA, layout2: LayoutB } = this.props;
    return (
      <div className="myApp" ref={node => this._element = node}>
        {this.state.containerWidth && this.state.containerWidth <= breakpoint && <LayoutA />}
        {this.state.containerWidth && this.state.containerWidth > breakpoint && <LayoutB />}
      </div>
    );
  }
}

export default Responsive;
