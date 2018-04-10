import React, { Component } from 'react';
import ParentSizeObserve from '../ParentSizeObserve'

class Responsive extends Component {
  static defaultProps = {
    breakpoint: 300
  }
  
  render() {
    const { breakpoint, layout1: LayoutA, layout2: LayoutB } = this.props;
    return (
      <div>
        <ParentSizeObserve>
          {( size ) => (
            <div>
              {size <= breakpoint && <LayoutA />}
              {size > breakpoint && <LayoutB />}
            </div>
          )}
        </ParentSizeObserve>

        <ParentSizeObserve>
          {( size ) => (
            <div style={{height: 300, backgroundColor: size > 300 ? 'red': 'yellow'}}>
              content
            </div>
          )}
        </ParentSizeObserve>
      </div>
    );
  }
}

export default Responsive;
