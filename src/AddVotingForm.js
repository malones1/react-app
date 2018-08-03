import React, { Component} from "react";

class AddVotingForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        questions: []
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
      this.setState({questions: questions});
    }

    PostOnClick(e) {
      e.preventDefault();
      console.log(this.state);
    }

    QuestionNameOnChange(e) {
      var questions = this.state.questions;
      questions[parseInt(e.target.name) - 1].name = e.target.value;
      this.setState({questions});
    }

    OptionsListOnChange(e) {
      var questions = this.state.questions;
      questions[parseInt(e.target.name) - 1].options = e.target.value;
      this.setState({questions});
    }

    render() {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7 col-sm-7">
              <div className="card card-body mt-3">
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Тема голосования</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите тему голосования" />
                  <small id="emailHelp" className="form-text text-muted"></small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Срок голосования</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Проголосовать до" />
                </div>
                {this.state.questions.map((item, i, arr) => 
                  (<Question key={i} item={item} i={i+1} QuestionNameOnChange={(e) => this.QuestionNameOnChange(e)} OptionsListOnChange={(e) => this.OptionsListOnChange(e)} />)
                )}
                <button type="button" className="btn btn-outline-secondary mb-3 btn-block" 
                      onClick={(e) => this.AddQuestionOnClick(e)}>Добавить вопрос</button>
                <button type="button" className="btn btn-outline-secondary mb-3 btn-block" 
                      onClick={(e) => this.PostOnClick(e)}>Сохранить</button>
              </form>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  export default AddVotingForm;