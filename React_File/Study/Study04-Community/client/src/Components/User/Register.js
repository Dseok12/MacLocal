import React, {useState} from 'react';
import LoginDiv from '../../Style/UserCSS.js';

const Register = () => {

  const [Name, setName] = useState('')
  const [ReEmail, setReEmail] = useState('')
  const [PW1, setPW1] = useState('')
  const [PW2 , setPW2] = useState('')

  return (
    <LoginDiv>
      <form>
        <label for="name">닉네임</label>
        <input
          id='name'
          type="name"
          alue={Name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
        <label for="re_email">이메일</label>
        <input
          id='re_email'
          type="email"
          alue={ReEmail}
          onChange={(e) => setReEmail(e.currentTarget.value)}
        />
        <label for="re_pwa1">비밀번호</label>
        <input
          id='re_pwa1'
          type="password"
          alue={PW1}
          onChange={(e) => setPW1(e.currentTarget.value)}
        />
        <label for="re_pwa2">비밀번호 확인</label>
        <input
          id='re_pwa2'
          type="password"
          alue={PW2}
          onChange={(e) => setPW2(e.currentTarget.value)}
        />
        <button>회원가입</button>
      </form>
    </LoginDiv>
  )
}

export default Register;