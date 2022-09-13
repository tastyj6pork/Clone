import React, { useEffect, useState } from "react";
import './Login.css';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function Join() {

    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userCheck, setUserCheck] = useState('');

    useEffect(() => {
        axios.get('http://localhost:4000/api/get').then((response) => {
            setUserCheck(response.data)
        });
    }, []);

    const submitUser = () => {
        axios.post("http://localhost:4000/api/insert", {
            userName: userName,
            userPassword: userPassword
        }).then(() => {
            alert("successful insert!");
        });
    };

    return(
        <div>
            <div className="join_bgcolor">
                <div className="join_box">
                    <ul>
                        <h3>회원가입</h3>
                        <li>아이디 : <input type="text" name="userName" onChange={(e) => {
                            setUserName(e.target.value)
                        }}></input></li>

                        <li>비밀번호 : <input type="text" name="userPassword" onChange={(e) => {
                            setUserPassword(e.target.value)
                        }}></input></li>

                        {/*<li>비밀번호 확인 : <input type="text"></input></li>*/}

                        <button onClick={submitUser}>회원가입</button>
                        

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Join;