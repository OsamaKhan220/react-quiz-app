import React, { Component } from "react";
class ResultPage2 extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);

    var res = JSON.parse(localStorage.getItem("resultTwo"));
    console.log(res);
    this.state = {
      score: res.score,
      percentage: res.percentage,
      date: res.date
    };

    localStorage.removeItem("resultTwo");
    alert("YOUR HAVE ALREADY ATEMPTED THAT QUIZ");
  }
  render() {
    const { score, percentage, date } = this.state;
    return (
      <div class="container">
        <nav class="navbar navbar-primary bg-primary">
          <span class="navbar-brand mb-0 h1" style={{ color: "white" }}>
            SCORE{" "}
          </span>
        </nav>
        <table class="table mt-3">
          <tbody>
            <tr class="success">
              <td>Your Marks are :</td>
              <td>{score}</td>
            </tr>
            <tr class="danger">
              <td>Your percentage is : </td>
              <td>{percentage}</td>
            </tr>

            <tr class="warning">
              <td>Date : </td>
              <td>{date}</td>
            </tr>
          </tbody>
        </table>
        <button class="btn btn-primary" onClick={this.load}>
          DashBoard
        </button>
      </div>
    );
  }
  load() {
    window.location.reload();
  }
}

export default ResultPage2;
