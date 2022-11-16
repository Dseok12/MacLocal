import React, {useContext, useState} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const Login = () => {

  const [inputs, setInputs] = useState({
    username: "",
    password: ""
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const {login} = useContext(AuthContext);

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
        <input type="text" onChange={handleChange} name="username" placeholder="아이디를 입력하세요." />
        <input type="password" onChange={handleChange} name="password" placeholder="비밀번호를 입력하세요." />
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>아이디가 없으신가요? <Link to='/register'>회원가입</Link></span>
      </form>
    </div>
  )
}

export default Login