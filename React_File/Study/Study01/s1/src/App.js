import React, {Component} from "react";
// import MyComponent from "./MyComponent";
// import Counter from "./Counter";
// import Say from "./Say";
// import EventPractice from "./EventPractice";
// import EventPractice2 from "./EventPractice2";
// import ValidationSample from "./ValidationSample";
// import ScrollBox from './ScrollBox'
import IterationSample from "./IterationSample";

class App extends Component {
  render(){
    return (
      <div>
        {/* <MyComponent>App.js에서 뿌려주는 값</MyComponent> */}
        {/* <Counter /> */}
        {/* <Say/> */}
        {/* <EventPractice /> */}
        {/* <EventPractice2 /> */}
        {/* <ValidationSample /> */}
        {/* <ScrollBox ref={(ref) => this.scrollBox=ref} />
        <button
          onClick={() => this.scrollBox.scrollToBottom()}
        >맨 밑으로</button> */}
        <IterationSample />
      </div>
    );
  }
}

export default App;
