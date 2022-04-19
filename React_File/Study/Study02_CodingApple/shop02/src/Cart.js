import React from "react";
import {Table} from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { connect } from "react-redux";

function Cart (props) {

  // let state작명 = useSelector((state) => state.reducer);
  let state작명 = useSelector((state) => state);
  // console.log(state작명.reducer);

  let dispatch = useDispatch()

  return(
    <div>
      <Table responsive>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경</th>
        </tr>
        {
          state작명.reducer.map((a,i) => {
            return(
              <tr key={i}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.quan}</td>
                {/* button에 있는 onClick함수는 외워라 */}
                <td><button onClick={() => { dispatch({type: '수량증가', payload: a.id}) }}>
                  + </button></td>
                <td><button onClick={() => { dispatch({type: '수량감소', payload: a.id}) }}>
                  - </button></td>
              </tr>
            )
          })
        }
      </Table>
      { props.alert열렸니 === true
        ? (<div className="my-alert2">
            <p>지금 구매히시면 신규 할인 20%</p>
            <button onClick={() => { dispatch({type: '닫기'}) }}>닫기</button>
          </div>)
        : null
      }

    </div>
  )
}

// function state를props화(state){
//   console.log(state)
//   return {
//     state: state.reducer,
//     alert열렸니: state.reducer2
//   }
// }
// export default connect(state를props화)(Cart)

export default Cart;