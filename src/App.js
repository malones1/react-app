import React, { Component } from "react";
import "./App.css";
import AddVotingForm from "./AddVotingForm";
import Welcome from "./Welcome";
import checklist from "./../public/svg/checklist.svg";
import gear from "./../public/svg/gear.svg";
import person from "./../public/svg/person.svg";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/*class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Hello, World!</h1>
      </div>
    );
  }
}*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  static serverAddr() {
    return "http://localhost:7777";
  }

  sidebarClick() {
    document.getElementById("sidebar1").style.width = "0";
  }

  sidebarClick1() {
    document.getElementById("sidebar1").style.width = "300px";
  }

  addVoting(e) {
    e.preventDefault();
    fetch(App.serverAddr() + '/add', {mode: "cors"})
      .then(res => res.json())
      .then((json) => {
        this.state.items.push(json);
        this.setState({
          items: this.state.items
        });
      }
      )
    // this.state.items.push(this.state.items[this.state.items.length - 1]);
    //   this.setState({
    //     items: this.state.items
    //   });
  }

  getVotingList() {
    return "Hello, World!"
  }

  componentDidMount() {
    fetch(App.serverAddr() + "/vote/", { method: 'GET', mode: "cors" })
      .then(res => {
        console.log(res);
        return res.json()
      })
      .then(
        (result) => {
          var answers = {}
          var voters = {}
          result.map(item => {
            answers[item.ID] = {};
            item.Questions.map(q => {
              answers[item.ID][q.ID] = q.Options.length > 0 ? q.Options[0].ID : undefined;
            });
            voters[item.ID] = item.Voters.length;
          });
          this.setState({
            isLoaded: true,
            items: result,
            answers: answers,
            voters: voters
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  onAddNewVoting(data) {
    this.state.items.push(data);
    this.setState({
      items: this.state.items
    });
}

  render() {

    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-light" style={{ backgroundColor: "#ffffff" }}>
          <a className="navbar-brand" href="#">
            <img src={checklist} width="20" height="20" className="d-inline-block" alt="" /> Голосование
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active d-none">
                <a className="nav-link" href="#">
                  Список
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item d-none">
                <a className="nav-link" href="#" onClick={(e) => this.addVoting(e)}>
                  Добавить</a>
              </li>
              <li className="nav-item d-none">
                <a className="nav-link" href="#">Отчет</a>
              </li>
            </ul>
            <div className="dropdown">
              <a className="mr-2" href="#collapseExample1" onClick={(e) => this.sidebarClick1(e)}>
                <img src={gear} width="20" height="20" alt="" />
              </a>
            </div>
            <div className="dropdown">
              <a href="#" data-toggle="dropdown" id="dropdownMenuLink1" aria-expanded="false">
                <img src={person} width="20" height="20" alt="" />
              </a>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink1">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
          </div>
        </nav>
        <div id="sidebar1" className="sidebar bg" style={{ bottom: "0px" }} onClick={(e) => this.sidebarClick(e)}>
          <button type="button" className="close mr-3 mt-3" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7 col-sm-7">
              {this.state.isLoaded ? <Welcome votingList={this.state.items} /> : <span></span>}
            </div>
          </div>
        </div>
        <AddVotingForm onAddNewVoting={this.onAddNewVoting.bind(this)} />
      </div>
    )
  }
}

export default App;