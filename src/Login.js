import React from "react";
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
    
    return(
        <div>
            <div className="join_bgcolor">
                <div className="join_box">
                    <ul>
                        <h3>로그인</h3>
                        <li>아이디 : <input type="text"></input></li>
                        <li>비밀번호 : <input type="text"></input></li>
                        <button>로그인</button>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Login;