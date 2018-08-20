import React, { Component } from "react";

class Question extends React.Component {
    constructor(props) {
        super(props);
    }

    QuestionNameOnChange(e) {
        this.props.QuestionNameOnChange(e);
    }

    OptionsListOnChange(e) {
        this.props.OptionsListOnChange(e);
    }

    render() {
        return (
            <div className="form-group">
                <input type="email" name={this.props.i} value={this.props.item.name} onChange={(e) => this.QuestionNameOnChange(e)} className="form-control mb-3" id={"questionName" + (this.props.i)} key={"questionName" + (this.props.i)} aria-describedby="emailHelp" placeholder={"Вопрос " + (this.props.i)} />
                <input type="email" name={this.props.i} value={this.props.item.options} onChange={(e) => this.OptionsListOnChange(e)} className="form-control" aria-describedby="emailHelp" id={"questionOptions" + (this.props.i)} key={"questionOptions" + (this.props.i)} placeholder={"Варианты ответов на вопрос " + (this.props.i)} />
            </div>
        )
    }
}

export default Question;