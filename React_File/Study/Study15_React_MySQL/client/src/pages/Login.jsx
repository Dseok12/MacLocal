import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder='아이디를 입력하세요' />
        <input type="email" placeholder='이메일을 입력하세요' />
        <input type="password" placeholder='비밀번호를 입력하세요' />
        <button>Login</button>
        <p>오류입니다!</p>
        <span>아이디가 없으세요?</span> <Link to="/register">회원가입하기</Link>
        {/* <span>로그인을 하세요.</span> <Link to="/login">로그인</Link> */}
      </form>
    </div>
  )
}

export default Login