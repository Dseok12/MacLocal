import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div>
      <div className='LoginWrap'>
        <form>
          <fieldset>회원정보 입력</fieldset>
          <label for="inputId">아이디</label>
        </form>
      </div>
    </div>
  )
}

export default Login