import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="아이디를 입력하세요." />
        <input type="password" placeholder="비밀번호를 입력하세요." />
        <button>Login</button>
        <p>잘못 입력 되었어요!</p>
        <span>아이디가 없으신가요? <Link to='/register'>회원가입</Link></span>
      </form>
    </div>
  )
}

export default Login