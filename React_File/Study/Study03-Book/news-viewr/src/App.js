import React, {useState} from "react";
import axios from "axios";

const App = () => {
  const [data,setData] = useState(null);
  const onClick = async () => {
    try{
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=fe3a727c3dd3403890cfad606e65b73d');
      setData(response.data);
    } catch (e) {
      console.log(e)
    };

  }

  return (
    <div>
      <div>
        <button
          onClick={onClick}
        >불러오기</button>
      </div>
      {
        data && <textarea rows={7} value={JSON.stringify(data, null, 2)} />
      }
    </div>
  )
}

export default App;