import React, { Component } from 'react';
import ScrollBox from './ScrollBox';

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => this.ScrollBox = ref} />
        <button onClick={() => this.ScrollBox.scrollToBottom()}>맨밑으로 가는 버튼</button>
      </div>
    );
  }
}
export default App;
