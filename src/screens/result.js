import React, { Component } from 'react';
class ResultPage extends Component {
    constructor(props){
        super(props);
        // console.log(this.props);
        this.props.resulted();

        if(localStorage.getItem('resultArray')){
            console.log('making result array****');
        }
        else{
            localStorage.setItem('resultArray',JSON.stringify([]));
        }

        // console.log(this.props.trues.length + "/" + this.props.length);
        // console.log(this.props.percentage + "%");
        // console.log(new Date().toLocaleDateString());
        // console.log(this.props.thisjs.startedQuiz);
        var user = JSON.parse(localStorage.getItem('currentUser'));

        const forLocal = {
            quiz : this.props.thisjs.startedQuiz,
            date: new Date().toLocaleDateString(),
            score: this.props.trues.length + "/" + this.props.length,
            percentage: this.props.percentage + "%",
            user: user.name
        };

        var arr = JSON.parse(localStorage.getItem('resultArray'));
        console.log(typeof arr);
        arr.push(forLocal);
        console.log(arr);
        localStorage.setItem('resultArray',JSON.stringify(arr));
        // console.log(forLocal);
    }
    render() { 

        const { length,percentage,trues } = this.props;
        return ( 
            <div class="container">
            
<nav class="navbar navbar-primary bg-primary">
            <span class="navbar-brand mb-0 h1" style={{color: 'white'}}>SCORE</span>

          </nav>
          <table class="table mt-3">
    
    <tbody>
          
      <tr class="success">
        <td>Your Marks are :</td>
        <td>{trues.length} / {length}</td>
      </tr>
      <tr class="danger">
        <td>Your percentage is : </td>
        <td>{percentage}%</td>
      </tr>
      
      <tr class="warning">
        <td>Date : </td>
        <td>{new Date().toLocaleDateString()}</td>
      </tr>
      
    </tbody>
  </table>
            <button class="btn btn-primary" onClick={this.load}>DashBoard</button>
            </div>

         );
    }
    load(){
        window.location.reload();
    }
}
 
export default ResultPage;