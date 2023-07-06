import React from "react";
import '../styles/Login.scss';
import 'bootstrap/dist/css/bootstrap.css';

const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('https://64a6346f00c3559aa9c0766f.mockapi.io/account/v1/user', {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
        }).then(data => {
            console.log(data);
            //kiem tra data co ton tai hay khong
            if(data.length > 0){
                //kiem tra username va password co trung khop hay khong
                for(let i = 0; i < data.length; i++){
                    if(data[i].username === document.getElementById("username").value && data[i].password === document.getElementById("password").value){
                        alert("Dang nhap thanh cong");
                        return;
                    }
                }
                alert("Dang nhap that bai");
            }
            // Do something with the list of tasks
        }).catch(error => {
            console.log(error);
            // handle error
        })
        // Xử lý khi form được submit
    }
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
                        {/* <img className="icon" alt="this" /> */}
                        <input
                            //placeholder={LanguageUtils.getMessageByKey("login.username", lang)}
                            placeholder="Tên đăng nhập"
                            id="username"
                            name="username"
                            type="text"
                            className="form-control"
                            required
                        // value="Linh"
                        // onChange={this.onUsernameChange}
                        />
                    </div>

                    <div id="phone-input-container" className="form-group icon-true">
                        {/* <img className="icon" alt="this" /> */}
                        <input
                            // placeholder={LanguageUtils.getMessageByKey("login.password", lang)}
                            placeholder="Mật khẩu"
                            id="password"
                            name="password"
                            type="password"
                            className="form-control"
                            required
                        // value="123456"
                        // onChange={this.onPasswordChange}
                        />
                    </div>

                    {/* {loginError !== '' && (
                        <div className='login-error'>
                            <span className='login-error-message'>{loginError}</span>
                        </div>
                    )} */}

                    <div className="form-group login">
                        <button
                            // ref={this.btnLogin}
                            id="btnLogin"
                            type="submit"
                            className="btn"
                            value="Đăng nhập"


                        // onClick={this.processLogin}

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