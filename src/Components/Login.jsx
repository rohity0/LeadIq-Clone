import { Link } from "@chakra-ui/react"
import { Navigate, useNavigate } from "react-router-dom"
import "../Css/login.css"

export function Login() {
    const xyz = useNavigate();

    function handleChange() {
        xyz("/")
    }

    return (
        <div>
            <div className="navbar-login" style={{
            
            }} >
                <div>
                    
                          <img src="https://account.leadiq.com/common/img/logo-green-full.f6ad239e.svg" onClick={handleChange} style={{cursor: "pointer"}} alt="icon" />
                   
                </div>
                <div>
                    <button className="button-signup">
                        Sign UP
                    </button>
                </div>
             </div>
            
            <div style={{margin: "auto"}} className="login-form">
                <div >
                     <img  className="logo-login" src="https://account.leadiq.com/common/img/logo-stripe.529f0a03.png" alt="logo" />
                </div>
                <div>
                    <img  className="google" src="https://account.leadiq.com/common/img/google-sign-in-2x.56f00e35.png" alt="google" />
                </div>
                <div className="line">
                    <hr />
                </div>
                <form  className="detail">
                    <div className="form">
                        <label htmlFor="">Email</label>
                        <input style={{border: "red"}} placeholder="Enter Your Email" type="text" />
                    </div>
                      <div  className="form">
                        <label htmlFor="">Password</label>
                        <input placeholder="Enter Your Password" type="text" />
                    </div>

                    
  </form>
                <div className="lower-form">
                    <button>
                        Login
                    </button>
                    <div className="tag-detail">
                        <div><p>
                            I forget my password
                        </p></div>
                        <div className="lock-detail" >
                            <div><img className="lock" src="https://account.leadiq.com/common/img/lock-solid.fcbf0e55.svg" alt="lock" /></div>
                            <span>Sign in with SSO</span>
                        </div>
                    </div>
                </div>


            </div>
            <hr style={{
                marginTop: "50px",
                   padding: "25px"
                
     }}/>
               
        </div>
    )
}