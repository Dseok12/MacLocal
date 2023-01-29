import axios from 'axios';
import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {

  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState('');

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = upload()
    try{

    }catch(err){
      console.log(err);
    }
  }

  // console.log(value)

  return (
    <div className='add'>
      <div className='content'>
        <input type="text" placeholder='제목을 입력하세요.' onChange={ e => setTitle(e.target.value) } />
        <div className="editorContainer">
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className='menu'>
        <div className='item'>
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            name=""
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            이미지 업로드
          </label>
          <div className="buttons">
            <button>저장하기</button>
            <button onClick={handleClick}>등록하기</button>
          </div>
        </div>
        <div className='item'>
          <h1>카테고리</h1>
          <div className="cat">
            <input type="radio" name='cat' value="art" id='art' onChange={ e => setCat(e.target.value) }  />
            <label htmlFor='art'>Art</label>
          </div>
          <div className="cat">
            <input type="radio" name='cat' value="science" id='Science' onChange={ e => setCat(e.target.value) }  />
            <label htmlFor='Science'>Science</label>
          </div>
          <div className="cat">
            <input type="radio" name='cat' value="technology" id='technology' onChange={ e => setCat(e.target.value) }  />
            <label htmlFor='technology'>Technology</label>
          </div>
          <div className="cat">
            <input type="radio" name='cat' value="cinema" id='cinema' onChange={ e => setCat(e.target.value) }  />
            <label htmlFor='cinema'>Cinema</label>
          </div>
          <div className="cat">
            <input type="radio" name='cat' value="design" id='design' onChange={ e => setCat(e.target.value) }  />
            <label htmlFor='design'>Design</label>
          </div>
          <div className="cat">
            <input type="radio" name='cat' value="food" id='food' />
            <label htmlFor='food'>Food</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write