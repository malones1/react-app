import React, { Component } from "react";
import App from "./App";
import sync from './../public/svg/sync.svg?url';
import check from './../public/svg/check.svg?url';


function formatDate(d) {
  d = new Date(d);
  return d.toLocaleDateString();
}


class Voting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      voting: this.props.voting,
      answers: {},
      voters: this.props.voting.Voters.length
    };
  }

  getSelect(question) {
    if (question.ID in this.state.answers) {
      return this.state.answers[question.ID];
    } else {
      return question.Options.length > 0 ? question.Options[0].ID : "*";
    }
  }

  handleVoteClick(e) {
    var data = JSON.stringify({ username: "orticon", votingId: this.state.voting.ID, answers: this.state.answers })
    fetch(App.serverAddr() + "/toVote", { method: 'POST', body: data, mode: 'cors' })
      .then((response) => {
        return new Promise((res, rej) => {
          if (response.ok) {
            res();
          } else {
            rej("Ошибка");
          }
        });
      })
      .then(() => {
        var voters = this.state.voters;
        voters += 1;
        this.setState({ voters: voters });
      },
        err => (
          console.log(err)
        )
      );
  }

  handleOptionChange(e, qId) {
    var target = e.target;
    var value = target.value;

    var answers = this.state.answers;
    answers[qId] = value;
    this.setState({
      answers: answers
    });
  }

  RefreshVoting(e) {
    e.preventDefault();
    this.forceUpdate(() => {
      console.log("Updated...");
    });
  }

  render() {
    const cardClass = "card border-primary" + (this.props.number > 0 ? " mt-3" : "");

    return (
      <div className={cardClass}>
        <div className="card-header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-10">
                {this.state.voting.Name}, проголосовать до {formatDate(this.state.voting.Deadline)}
              </div>
              <div className="col-md-2">

              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <ul className="list-group border-0 bg">
            {this.state.voting.Questions.map((q) => (
              <li className="list-group-item border-0 bg" key={q.ID}>
                {q.Name}
                {q.Options.map((o, i) => (
                  <div className="custom-control custom-radio">
                    <input type="radio" id={"customRadio" + this.state.voting.ID + "_" + q.ID + "_" + String(o.ID)} name={"customRadio" + this.state.voting.ID + "_" + q.ID} className="custom-control-input"></input>
                    <label className="custom-control-label" for={"customRadio" + this.state.voting.ID + "_" + q.ID + "_" + String(o.ID)}>{o.Name}</label>
                  </div>
                ))}
              </li>
            ))}
          </ul>
        </div>
        {/* <div className="w-100"> */}
        <div className="card-footer">
          <button type="button" className="btn btn-outline-info btn-sm" onClick={(e) => this.handleVoteClick(e)}>
            <img src={check} className="mr-1"></img>
            Проголосовать
          </button>
          {/* <div className="float-right">
            Проголосовали человек: {this.state.voters}
          </div> */}
          <div className="float-right">
            Уже проголосовали
            <span className="badge badge-primary badge-pill ml-1">{this.state.voters}</span>

              <a href="#" onClick={(e) => this.RefreshVoting(e)}>
                <img src={sync} alt="" style={{width: "26px", height: "26px"}} />
              </a>
          </div>
        </div>

      </div>
    )
  }
}

export default Voting;