import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='auth'>
    <h1>Register</h1>
    <form>
      <input required type="text" placeholder="아이디를 입력하세요." />
      <input required type="password" placeholder="비밀번호를 입력하세요." />
      <input required type="email" placeholder="이메일을 입력하세요." />
      <button>Register</button>
      <p>잘못 입력 되었어요!</p>
      <span>아이디가 없으신가요? <Link to='/login'>로그인</Link></span>
    </form>
  </div>
  )
}

export default Register