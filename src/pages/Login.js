import React, { useState } from "react";
import '../styles/Login.scss';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const Login = {
            user_username: event.target.username.value,
            user_password: event.target.password.value,
        };
        console.log(Login);
        axios.post("http://34.29.205.142:85/api/get-user", Login)
            .then(function (respone) {
                console.log(respone);
                console.log(respone.data);
                alert("succcess");
            })
            .catch(function (error) {
                console.log(error);
                console.log(error.respone);
            });
        if (Login.user_username === document.getElementById("user_username").value && Login.user_password === document.getElementById("user_password").value) {
            alert("Đăng nhập thành công"   );
            // window.location.href = "./";
            //luu vao localstorage
            localStorage.setItem("user_username", Login.user_username);
            localStorage.setItem("user_password", Login.user_password);
        } else {
            alert("Đăng nhập thất bại");
        }
    };
    return (
        <div className="login-wrapper">
            <div className="login-container">
                <form className="form_login" onSubmit={handleSubmit}>
                    <h1 className="title">
                        Đăng nhập
                    </h1>
                    <span className="note-title">
                        Nếu bạn chưa có tài khoản hãy <a href="./">đăng ký tại đây</a>
                    </span>
                    <div className="form-group icon-true">
                        <input
                            placeholder="Tên đăng nhập"
                            id="user_username"
                            name="username"
                            type="text"
                            className="form-control"
                            required
                        />
                    </div>

                    <div id="phone-input-container" className="form-group icon-true">
                        <input
                            placeholder="Mật khẩu"
                            id="user_password"
                            name="password"
                            type="password"
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="form-group login">
                        <button
                            id="btnLogin"
                            type="submit"
                            className="btn"
                            value="Đăng nhập"
                        > Đăng nhập
                        </button>
                    </div>
                    <div className="form-group connect d-flex ">
                        <div className="px-3">
                            <span className="note-title">
                                <a href="./">Quên tài khoản</a>
                            </span>
                        </div>
                        <div className="link">
                            <span> Hoặc đăng nhập bằng link</span>
                            <div className="link-connect">
                                <a className="link-img" href="./">
                                    <img src="https://bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg" alt="this" />
                                </a>
                                <a className="link-img" href="./">
                                    <img src="https://bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg" alt="this" />
                                </a>


                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;