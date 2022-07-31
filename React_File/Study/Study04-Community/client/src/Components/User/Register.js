import React, {useState} from 'react';
import LoginDiv from '../../Style/UserCSS.js';
import Firebase from '../../firebase.js';
import { async } from '@firebase/util';



const Register = () => {

  const [Name, setName] = useState('')
  const [ReEmail, setReEmail] = useState('')
  const [PW1, setPW1] = useState('')
  const [PW2 , setPW2] = useState('')

  const RegisterFunc = async (e) => {
    e.preventDefault();
    if(!(Name && ReEmail && PW1 && PW2)){
      return alert('모든 값을 채워주세요')
    }

    if(PW1 != PW2){
      return alert('비밀번호다 틀립니다.')
    }

    let createUser = await Firebase.auth().createUserWithEmailAndPassword(ReEmail, PW1);
    await createUser.user.updateProfile({
      displayName: Name,
    });

    console.log(createUser.user)
  }

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
        <button
          onClick={(e) => RegisterFunc(e)}
        >회원가입</button>
      </form>
    </LoginDiv>
  )
}

export default Register;