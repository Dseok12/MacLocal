import React, {useState, useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { AuthContext } from '../context/authContext';

const Login = () => {

  const [inputs, setInputs] = useState({
    username: "",
    password: ""
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const {login} = useContext(AuthContext);

  console.log(login)

  const handleChange = (e) => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await login(inputs)
      navigate("/")
    } catch(err) {
      setError(err.response.data)
    }
  };

  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder='아이디를 입력하세요' name='username' onChange={handleChange} />
        <input type="password" placeholder='비밀번호를 입력하세요' name='password' onChange={handleChange} />
        <button onClick={handleSubmit}>Login</button>
        {err && <p>오류입니다!</p>}
        <span>아이디가 없으세요?</span> <Link to="/register">회원가입하기</Link>
        {/* <span>로그인을 하세요.</span> <Link to="/login">로그인</Link> */}
      </form>
    </div>
  )
}

export default Login