import React,{
  useState,
  useEffect
} from "react";
import './InputHandling.scss';

const InputHandling = () => {

  const [ userId, setUserId ] = useState('');
  const [ userPw, setUserPw ] = useState('');



  return(
    <div className="InputHandling">
      <div className="inner">
        <form action="#">
          <div className="user_id_box">
            <label for="userId">아이디: </label>
            <input
              id='userId'
              type='text'
              name='userId'
            />
          </div>
          <div className="user_pw_box">
            <label for="userPw">비밀번호: </label>
            <input
              id='userPw'
              type='password'
              name='userPw'
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default InputHandling;