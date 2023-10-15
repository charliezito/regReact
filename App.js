import { useState } from "react";
import './App.css';
export default function Form()
{
  const [name, setName]=useState('');
  const [email, setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [submitted,setSubmitted]=useState(false);


  const handleName=(e)=>{
    setName(e.target.value);
  };

  const handleEmail=(e)=>{
    setEmail(e.target.value);
  };

  const handlePassword=(e)=>{
    setPassword(e.target.value);
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(name==='' || email===''||password===''){
      alert('Please enter all fields');
    }else{
      setSubmitted(true);
    }
    };

    const successMessage=()=>{
      if(submitted)
      return(
        <div className="success">
          <h1>User {name} successfully registerd.</h1>
        </div>
        );
      };
      return(
        <div className="form">
        <div className="messages">
            {successMessage()}
        </div>
        

        <form>
          <div className="wrapper">
            <h1>User Registration</h1>
              <div className="input-box">
                <input onChange={handleName} className="input" value={name} type="text" placeholder="Name"/><br></br>
                </div>

            <div className="input-box">
                <input onChange={handleEmail} className="input" value={email} type="email" placeholder="Email"/><br></br>
            </div>

            <div className="input-box">
              <input onChange={handlePassword} className="input" value={password} type="password" placeholder="Password"/><br></br>
            </div>
            <button onClick={handleSubmit} className="btn" type="submit">Submit</button>
          </div>

        </form>
        </div>
      );
  }





