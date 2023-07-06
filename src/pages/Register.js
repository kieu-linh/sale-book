import React, {useState} from "react";
import "../assets/css/register.css";

const Register = () => {
  const [enteredTen, setenteredTen] = useState("");
  const [enteredUserName, setenteredUserName] = useState("");
  const [enteredTelephone, setenteredTelephone] = useState("");
  const [enteredPassword, setenteredPassword] = useState("");



  const tenChangeHandler = (e) => {
    setenteredTen(e.target.value);
    console.log(enteredTen);
  }

  const userNameChangeHandler = (e) => {
    setenteredUserName(e.target.value);
    console.log(enteredUserName);

  }
  const telephoneChangeHandler = (e) => {
    setenteredTelephone(e.target.value);
    console.log(enteredTen);
    
  }
  const passwordChangeHandler = (e) => {
    setenteredPassword(e.target.value);
    console.log(enteredTen);
    
  }
  
  const submitRegisterHandler = (e) => {
    e.preventDefault();
    alert("Hello");
    console.log(enteredUserName);
    console.log(enteredPassword);
    console.log(enteredTen);
    console.log("test");
    // const txtTen = document.getElementById("txtTen").value;
    // const txtUserName = document.getElementById("txtUserName").value;
    // const txtTelephone = document.getElementById("txtTelephone").value;
    // const txtPassword = document.getElementById("txtPassword").value;
    // console.log(txtTen);

    const data = {
      user_username: enteredUserName,
      user_password: enteredPassword,
      user_full_name: enteredTen,
      user_telephone: enteredTelephone,
    };

    console.log(data.typeof);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 col-xl-4 offset-xl-4 offset-lg-4 offset-md-3 offset-xl-3">
            <div className="row">
              <div className="page-login">
                <form
                  action="http://34.29.205.142:85/api/create-user"
                  className="form_register"
                  method="POST"
                  onSubmit={submitRegisterHandler}
                >
                  <h1 className="text-center fs-3">ĐĂNG KÝ</h1>
                  <div className="text-center pb-2 text-register">
                    Đã có tài khoản đăng nhập,
                    <a className="btn-link-style" href="./">
                      tại đây
                    </a>
                  </div>

                  <div class="mb-3">
                    <input
                      id="txtTen"
                      type="text"
                      class="form-control"
                      placeholder="Tên"
                      value={enteredTen}
                      onChange={tenChangeHandler}
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      id="txtUserName"
                      type="text"
                      class="form-control"
                      placeholder="Tên đăng nhập"
                      value={enteredUserName}
                      onChange={userNameChangeHandler}
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      id="txtTelephone"
                      type="text"
                      class="form-control"
                      placeholder="Số điện thoại"
                      value={enteredTelephone}
                      onChange={telephoneChangeHandler}
                    />
                  </div>

                  <div class="mb-3">
                    <input
                      id="txtPassword"
                      type="password"
                      class="form-control"
                      placeholder="Mật khẩu"
                      value={enteredPassword}
                      onChange={passwordChangeHandler}
                    />
                  </div>
                  <div class="btn-register">
                    <button class="btn btn-login" type="submit">
                      Đăng ký
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
