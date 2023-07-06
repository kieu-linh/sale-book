import React from "react";
import '../styles/Login.scss';
import 'bootstrap/dist/css/bootstrap.css';
class Login extends React.Component {
    render() {
        return (
            <div className="login-wrapper">
                <div className="login-container">
                    <div className="form_login">
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
                                required="required"
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
                                required="required"
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
                            <input
                                ref={this.btnLogin}
                                id="btnLogin"
                                type="submit"
                                className="btn"
                                value="Đăng nhập"
                            // onClick={this.processLogin}
                            />
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
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;