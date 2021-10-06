import './App.css';
import React , {useState} from 'react';
import axios from 'axios';

const App = () => {

  const [textVal, setTextVal] = useState("Melbourne,AU");
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');

  // Handle form submit event.
  const handleSubmit = event => {
    event.preventDefault();

    // callin an external API 
   axios.get(`http://localhost:8080/weather?city=${textVal}`, {}).
      then(response => {
        setResponse(response.data);
      }).catch(error => {
        setError("Not found");
        setResponse('');
    })
  }

  // handle input change for controlled form.
  const handleInputChange = event => {
    event.preventDefault();
    setTextVal(event.target.value);
  }

  // UI rendering.
  return (
    <div>
     <form onSubmit={handleSubmit} > 
      <label>
        Enter city    
        <input type="text" value = {textVal} onChange={handleInputChange}/>
        </label>
        <input type="submit" />
     </form>
      <div> 
      Temprature: {response ? response.temp : 'Not found'}<br/>
      Description : {response ? response.description : 'Not found'}
      </div>
    </div>
  );
}

export default App;