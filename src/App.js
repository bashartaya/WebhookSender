import React, { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import axios from 'axios'; 

function App() {
  const [webhook , setWebhook] = useState(null); 
  const [ErrorType  , setErrorType] = useState(''); 
  const [msg , setMsg] = useState(null);

 
  function onChangeA(e) {
    setWebhook(e.target.value);
  }
  function onChangeB(e) {
    setMsg(e.target.value);
  }

  function onSubmit(e) {
      e.preventDefault(); 
      const content = {
        "content":msg
      }
    axios.post(webhook , content)
    .then(response => {
      console.log(response);
      document.querySelector("#error").style.display = "none";
      document.querySelector("#success").style.display = "block";

    }).catch(error => {
      console.log(error); 
      setErrorType('Check webhook or message !')
      document.querySelector("#success").style.display = "none"; 
      document.querySelector('#error').style.display = "block";
    }); 
  }
  return (
    <div className="App">
        <div className="nav">
          <h1><a>Webhook Sender</a></h1>
        </div>
        <div className="section">
        <div id="success" className="alert alert-info" role="alert">
            <a><FontAwesomeIcon icon="check-circle"/>&nbsp;Success! Done Send The msg</a>
         </div>
         <div id="error" className="alert alert-info" role="alert">
            <a><FontAwesomeIcon icon="times-circle"/>&nbsp;Error : {ErrorType}</a>
         </div>
          <form onSubmit={onSubmit}>
            <label htmlFor="webhook">Webhook URL</label>
            <input id="webhook" onChange={onChangeA} />
            <label htmlFor="message">Message</label>
            <input id="message" onChange={onChangeB} />
            <button className="btn btn-primary" type="submit">Send</button>
          </form>
        </div>
        <div className="section2">
          <label id="copyright">&copy; 2021 All Copyrights reserved to <a href="https://github.com/XzeroDev" target="_blank">"XzeroDev#0002"</a></label>
        </div>
    </div>
  );
}

export default App;
