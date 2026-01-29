
import { useState } from "react";
import "./Forgot.css";
import { Link } from "react-router-dom";
import { forgot,validateForgot } from "./Forgot";

function Forgot() {
  const [credentials, setCredentials] = useState({
    newpassword: "",
    conformpassword: ""
  });

  const [ error , setError] = useState({newpassword:"",conformpassword:""})

    // const [error, setError] = useState(null); 


  return (
    <div className="forgot-container">
      <form className="forgot-form">
        <h2>Forgot Password</h2>

        {/* New Password Field */}
        <div>
          <input
            type="password"
            value={credentials.newpassword}
            placeholder="New Password"
            onChange={(event) =>
              setCredentials({
                ...credentials,
                newpassword: event.target.value
              })
            }
           
          />

           <span style={{ color:"red" }}>{error.newpassword}</span>
        </div>

        {/* Confirm Password Field */}
        <div>
          <input
            type="password"
            value={credentials.conformpassword}
            placeholder="Confirm Password"
            onChange={(event) =>
              setCredentials({
                ...credentials,
                conformpassword: event.target.value
              })
            }
          />

           <span style={{ color:"red"}}>{error.conformpassword}</span>
        </div>

        <div style={{ textAlign: "center" }}>
          <button type="button"
          onClick={() =>{
            validateForgot(credentials, error, setError);
            forgot(credentials, setError);
          }}
          
          >Reset Password</button>
        </div>

        <div className="forgot-password">
          <span>
            Back to Sign in? <Link to="/sign-in">Sign in</Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Forgot;



