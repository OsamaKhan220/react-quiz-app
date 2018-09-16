import React, { Component } from 'react';
class StartQuiz extends Component {
    constructor(props){
        super(props);
        this.state={
            time: 0,
        }
        this.continue = this.continue.bind(this);    
        this.updateKey = this.updateKey.bind(this);
    this.localStorageItems = this.localStorageItems.bind(this);
    this.chk = this.chk.bind(this);

        console.log(this.props.resTwo);
        this.chk();
    }

    chk(){
        const { startedQuiz,resTwo } = this.props;
        var user = JSON.parse(localStorage.getItem('currentUser'));
        var name = user.name;
       var arr =  JSON.parse(localStorage.getItem('resultArray'));
       if(localStorage.getItem('resultArray')){
        console.log(arr);
        arr.map(res => {
            console.log(res.quiz);
            console.log(res.user);
            var st = JSON.stringify(res.quiz);
            var usr = JSON.stringify(res.user);
            if(JSON.stringify(res.quiz) == JSON.stringify(startedQuiz) && JSON.stringify(res.user) == JSON.stringify(name)){
                console.log("Match he");
                localStorage.setItem('resultTwo',JSON.stringify(res));
                resTwo();
            }
            
        })
       }
       
    }
    render() { 
        const { openQuizPage,startedQuiz,startPageBack } = this.props;

        return ( 
            <div class="container">
            
<nav class="navbar navbar-primary bg-primary">
            <span class="navbar-brand mb-0 h1" style={{color: 'white'}}>QUIZ APP</span>
            
          </nav>
               {/* <h1>{startedQuiz.time}</h1>
               <h1>{startedQuiz.key}</h1> */}
               <div class="card mt-5">
  <div class="card-header">
  Enter Key to Continue
  </div>
  <div class="card-body">
    <h5 class="card-title">{openQuizPage.name} Quiz</h5>
    <p class="card-text">Time : {startedQuiz.time}</p>
    <input type="number" class="form-control" onChange={this.updateKey} value={this.state.key} placeholder="Enter Key" />
    <button class="btn btn-primary btn-lg mt-2" onClick={() => this.continue()}>Continue</button>
  </div>
</div>
<button class="btn btn-primary mt-2" onClick={startPageBack}>BACK</button>
            </div>
         );
    }

    continue(){
        // if(startedQuiz)
        this.localStorageItems();
        const { startedQuiz,keyCheckedFunc } = this.props;
        const { key } = this.state;
        if(key == startedQuiz.key){
            console.log(key);
            keyCheckedFunc();
        }
    }

    localStorageItems(){
        const { openQuizPage, startedQuiz, msqNum, nextNum,thisjs } = this.props;
        // console.log(openQuizPage);
        // console.log(startedQuiz);
        // console.log(msqNum);
        console.log(thisjs);
    
        localStorage.setItem('quizStarted','yes');
        localStorage.setItem('thisjs',JSON.stringify(thisjs));
        // localStorage.setItem('startedQuiz',JSON.stringify(startedQuiz));
        // localStorage.setItem('msqNum',JSON.stringify(msqNum+1));
    
      }

    updateKey(e){
        this.setState({key : e.target.value});
    }
}
 
export default StartQuiz;