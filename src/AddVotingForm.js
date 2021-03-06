import React, { Component } from "react";
import Question from "./Question";
import App from "./App";

class AddVotingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      date: undefined,
      name: ""
    };

    this.AddQuestionOnClick = this.AddQuestionOnClick.bind(this);
  }

  AddQuestionOnClick(e) {
    e.preventDefault();
    var questions = this.state.questions;
    questions.push({
      id: questions.length,
      name: "",
      options: ""
    });
    this.setState({ questions: questions });
  }

  PostOnClick(e) {
    e.preventDefault();

    var data = JSON.stringify(this.state);
    console.log(data);

    fetch(App.serverAddr() + '/add', { method: 'POST', mode: 'cors', body: data })
      .then(res => res.json())
      .then((json) => {
        this.props.onAddNewVoting(json);
      });
  }

  QuestionNameOnChange(e) {
    var questions = this.state.questions;
    questions[parseInt(e.target.name) - 1].name = e.target.value;
    this.setState({ questions });
  }

  OptionsListOnChange(e) {
    var questions = this.state.questions;
    questions[parseInt(e.target.name) - 1].options = e.target.value;
    this.setState({ questions });
  }

  DateOnChange(e) {
    this.setState({ date: e.target.value });
  }

  NameOnChange(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      // <div className="container-fluid">
      //   <div className="row">
      //     <div className="col">
      //       <div className="card card-body mt-3 bg">
      // <div className="mt-3">
      <div>
      <h1>Создать новое голосование</h1>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="font-weight-bold">Тема голосования *</label>
            <input type="email" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите тему голосования" onChange={(e) => this.NameOnChange(e)} />
            <small id="emailHelp" className="form-text text-muted"></small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1" className="font-weight-bold">Срок голосования *</label>
            <input type="date" className="form-control form-control-sm" id="exampleInputPassword1" placeholder="Проголосовать до" onChange={(e) => this.DateOnChange(e)} />
          </div>
          {this.state.questions.map((item, i, arr) =>
            (<Question key={i} item={item} i={i + 1} QuestionNameOnChange={(e) => this.QuestionNameOnChange(e)} OptionsListOnChange={(e) => this.OptionsListOnChange(e)} />)
          )}
          <button type="button" className="btn btn-outline-info mb-3 mr-3 btn-sm"
            onClick={(e) => this.AddQuestionOnClick(e)}>Добавить вопрос</button>
          <button type="button" className="btn btn-outline-info mb-3 btn-sm"
            onClick={(e) => this.PostOnClick(e)}>Сохранить</button>
        </form>
        </div>
      // </div>
      //     </div>
      //   </div>
      // </div>
    )
  }
}

export default AddVotingForm;