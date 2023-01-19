import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Register = () => {

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post("/auth/register", inputs);
      navigate("/login")
      // const res = axios.post("/auth/register", inputs);
      // console.log(res);
    } catch(err) {
      setError(err.response.data)
    }
  };

  return (
    <div className='auth'>
    <h1>Register</h1>
    <form>
      <input required type="text" placeholder="아이디를 입력하세요." name='username' onChange={handleChange} />
      <input required type="email" placeholder="이메일을 입력하세요." name='email' onChange={handleChange} />
      <input required type="password" placeholder="비밀번호를 입력하세요." name='password' onChange={handleChange} />
      <button onClick={handleSubmit}>Register</button>
      {err && <p>{err}</p> }
      <span>아이디가 없으신가요? <Link to='/login'>로그인</Link></span>
    </form>
  </div>
  )
}

export default Register;