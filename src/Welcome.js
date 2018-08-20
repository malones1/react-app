import React, { Component } from "react";
import Voting from "./Voting";

class Welcome extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        //isLoaded: false,
        //items: [],
        isLoaded: true,
        items: props.votingList,
        //voters: {}
      };

      //this.handleVoteClick = this.handleVoteClick.bind(this);
      //this.handleOptionChange = this.handleOptionChange.bind(this);          
    }

    getSelect(votingId, questionId) {
      var value = this.state.answers[votingId];
      if (value == undefined) {
        return undefined; 
      } else {
        return value[questionId];
      }
    }

    // componentDidMount() {
    //   fetch(App.serverAddr() + "/vote", {method: 'GET'})
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       var answers = {}
    //       var voters = {}
    //       result.map(item => {
    //         answers[item.Id] = {};
    //         item.Questions.map(q => {
    //           answers[item.Id][q.Id] = q.Options.length > 0 ? q.Options[0].Id : undefined;  
    //         });
    //         voters[item.Id] = item.Voters.length;  
    //       });
    //       this.setState({
    //         isLoaded: true,
    //         items: result,
    //         answers: answers,
    //         voters: voters
    //       });             
    //     },
    //     (error) => {
    //       this.setState({
    //         isLoaded: true,
    //         error
    //       });
    //     }
    //   );
    // }

    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div>
            {
              items.map(item => (
                <Voting voting={item} key={item.ID} />
                )
              )
            }
          </div>
        );
      }
    }
  }

  export default Welcome;