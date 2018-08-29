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
            <div>
                <h1 className="mb-3">Создайте свой аккаунт</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="username" className="font-weight-bold">Имя пользователя *</label>
                        <input type="text" className="form-control form-control-sm" id="username" aria-describedby="usernameHelp" placeholder="Имя пользователя" />
                        <small id="usernameHelp" className="form-text text-muted"></small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="font-weight-bold">Адрес электронной почты *</label>
                        <input type="email" className="form-control form-control-sm" id="email" aria-describedby="emailHelp" placeholder="Адрес электронной почты" />
                        <small id="emailHelp" className="form-text text-muted"></small>
                    </div>
                    <div className="form-row">
                        <div className="form-group col">
                            <label htmlFor="password" className="font-weight-bold">Пароль *</label>
                            <input type="password" className="form-control form-control-sm" id="password" aria-describedby="passwordHelp" placeholder="Пароль" />
                            <small id="passwordHelp" className="form-text text-muted"></small>
                        </div>
                        <div className="form-group col">
                            <label htmlFor="confirmPassword" className="font-weight-bold">Подтверждение пароля *</label>
                            <input type="password" className="form-control form-control-sm" id="confirmPassword" aria-describedby="confirmPasswordHelp" placeholder="Подтверждение пароля" />
                            <small id="confirmPasswordHelp" className="form-text text-muted"></small>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description" className="font-weight-bold">Дополнительная информация</label>
                        <textarea id="description" class="form-control" aria-label="With textarea"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Регистрация</button>
                </form>
            </div>
            // {/* </div> */}
            //         </div>
            //     </div>
            // </div>
        );
    }
}

export default RegistrationForm;