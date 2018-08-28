import React, { Component } from "react";

class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            // <div className="container-fluid">
            //     <div className="row justify-content-center">
            //         <div className="col">
                        // {/* <div className="card card-body mt-3 bg"> */}
                            <form>
                                <div className="form-group">
                                    <label htmlFor="username">Имя пользователя</label>
                                    <input type="text" className="form-control form-control-sm" id="username" aria-describedby="usernameHelp" placeholder="Имя пользователя" />
                                    <small id="usernameHelp" className="form-text text-muted"></small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Адрес электронной почты</label>
                                    <input type="email" className="form-control form-control-sm" id="email" aria-describedby="emailHelp" placeholder="Адрес электронной почты" />
                                    <small id="emailHelp" className="form-text text-muted"></small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Пароль</label>
                                    <input type="password" className="form-control form-control-sm" id="password" aria-describedby="passwordHelp" placeholder="Пароль" />
                                    <small id="passwordHelp" className="form-text text-muted"></small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirmPassword">Подтверждение пароля</label>
                                    <input type="password" className="form-control form-control-sm" id="confirmPassword" aria-describedby="confirmPasswordHelp" placeholder="Подтверждение пароля" />
                                    <small id="confirmPasswordHelp" className="form-text text-muted"></small>
                                </div>
                                <button type="submit" class="btn btn-primary">Отправить</button>
                            </form>
                        // {/* </div> */}
            //         </div>
            //     </div>
            // </div>
        );
    }
}

export default RegistrationForm;