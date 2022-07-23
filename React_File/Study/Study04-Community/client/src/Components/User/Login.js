import React, {useState} from 'react';
import LoginDiv from '../../Style/UserCSS.js';
import { useNavigate  } from 'react-router-dom';

const Login = () => {

  const [Email, setEmail] = useState('')
  const [PW, setPW] = useState('');

  let navigate = useNavigate();

  return (
    <LoginDiv>
      <form>
        <label for="e_mail">이메일: </label>
        <input
          id='e_mail'
          type="email"
          value={Email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <label for="paw">비밀번호: </label>
        <input
          id='paw'
          type="password"
          value={PW}
          onChange={(e) => {setPW(e.currentTarget.value)}}
        />
        <button>로그인</button>
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate('/register'); 
          }}
        >회원가입</button>
      </form>
    </LoginDiv>
  )
}

export default Login;