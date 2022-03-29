import React, { Component } from "react";

class Counter extends Component {
  constructor(props){
    super(props)
    // state의 초깃값 설정하기
    this.state = {
      number: 0
    };
  }

  render(){
    const { number } = this.state;

    return (
      <div>
        <h1>{number}</h1>
        <button
          onClick={() => {
            this.setState({number: number+1})
          }}
        >
          {/* onClick을 통해 버튼이 클릭되었을 떄 호출 할 함수를 지정 */}
          +1
        </button>
        <button
          onClick={() => {
            if(number === 0){
              alert('더 이상 숫자를 내릴 수 없습니다.')
            } else {
              this.setState({number: number-1})
            }
          }}
        >
          -1
        </button>
      </div>
    )
  }
}


export default Counter;
