import React, { Component} from "react";
import App from "./App";

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
      var data = JSON.stringify({username: "orticon", votingId: this.state.voting.ID, answers: this.state.answers})
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
        this.setState({voters: voters});
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
      return (
        <div className="card card-body mt-3 bg">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-10">
                {this.state.voting.Name}, проголосовать до {formatDate(this.state.voting.Deadline)}
              </div>
              <div className="col-md-2">
                  <a href="#" onClick={(e) => this.RefreshVoting(e)}>Обновить</a>
              </div>
            </div>  
          </div>
          <ul className="list-group border-0 bg">
            {this.state.voting.Questions.map(q => (
              <li className="list-group-item border-0 bg" key={q.ID}>{q.Name}
                <select className="form-control form-control-sm" name={q.ID} value={this.getSelect(q)} onChange={(e) => this.handleOptionChange(e, q.ID)}>
                  {q.Options.map(o => (<option key={o.ID} value={o.ID}>{o.Name}</option>))}
                </select>
              </li> 
            ))} 
          </ul>  
          <div className="w-100">
            <button type="button" className="btn btn-outline-info btn-sm" onClick={(e) => this.handleVoteClick(e)}>Отправить</button>
            <div className="float-right">Проголосовали человек: {this.state.voters}</div>
          </div>
        </div>)
    }
  }

  export default Voting;