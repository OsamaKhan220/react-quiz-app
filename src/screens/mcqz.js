import React, { Component } from "react";
class McqsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      length: this.props.startedQuiz.questions.length,
      time: null
    };
    this.next = this.next.bind(this);
    this.finish = this.finish.bind(this);
    this.localStorageItems = this.localStorageItems.bind(this);
    this.countDown = this.countDown.bind(this);
    console.log(this.props.openQuizPage.time);
    this.countDown();
  }
  render() {
    const { length,time } = this.state;
    const { openQuizPage, startedQuiz, msqNum, nextNum } = this.props;

    return (
      <div class="container">

      
<nav class="navbar navbar-primary bg-primary">
            <span class="navbar-brand mb-0 h1" style={{color: 'white'}}>{openQuizPage.name} Quiz</span>
            
          </nav>
        {/* <h1>{startedQuiz.time}</h1>
               <h1>{startedQuiz.key}</h1> */}

               <h6 style={{marginTop: 10,}}>Remaining time = {time}</h6><br />
        <div class="card mt-1">
          <div class="card-header">Question : {msqNum + 1}</div>
          <div class="card-body">
            <h5 class="card-title">{startedQuiz.questions[msqNum].question}</h5>

            {startedQuiz.questions[msqNum].options.map((value, index) => {
              return (
                <p class="card-text">
                  <div class="radio">
                    <label>
                      <input type="radio" name="quest" value={value} />
                      {value}
                    </label>
                  </div>
                </p>
              );
            })}

            {msqNum + 1 < length && (
              <button class="btn btn-primary btn-lg mt-2" onClick={this.next}>
                NEXT
              </button>
            )}
            {length == msqNum + 1 && (
              <button class="btn btn-primary btn-lg mt-2" onClick={this.finish}>
                Finish
              </button>
               
            )}
            {/* <button class="btn btn-primary btn-lg mt-2" onClick={this.localStorageItems}>
               updateLocalStorage
             </button> */}
          </div>
        </div>
      </div>
    );
  }

  next() {
      this.localStorageItems();
    const { openQuizPage, startedQuiz, msqNum, nextNum, tr, fl } = this.props;
    var radios = document.getElementsByName("quest");

    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        //   alert(radios[i].value);
        var chkd = radios[i].value;
        //   console.log(chkd);
        //   console.log(startedQuiz.questions[msqNum].ans);
        if (chkd == startedQuiz.questions[msqNum].ans) {
          console.log(startedQuiz.questions[msqNum].ans);
          tr();
        } else {
          console.log("miss");
          fl();
        }
      }
    }
    nextNum();
  }

  finish() {
    this.localStorageItems;
    const { openQuizPage, startedQuiz, msqNum, finishMsq, tr, fl } = this.props;
    var radios = document.getElementsByName("quest");

    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        //   alert(radios[i].value);
        var chkd = radios[i].value;
        //   console.log(chkd);
        //   console.log(startedQuiz.questions[msqNum].ans);
        if (chkd == startedQuiz.questions[msqNum].ans) {
          console.log(startedQuiz.questions[msqNum].ans);
          tr();
        } else {
          console.log("miss");
          fl(); 
        }
      }
    }
    
    clearInterval();
    localStorage.removeItem('countDownDate');
    finishMsq();
  }
  countDown(){
      const { openQuizPage,startedQuiz,finishMsq } = this.props;
      const { time } = this.state;
      var lastTime = parseInt(startedQuiz.time) * 60000;
      // console.log("aaaaa"+lastTime);
    var now = new Date().getTime();
    var countDownDate;
    if(localStorage.getItem('countDownDate')){
      countDownDate = JSON.parse(localStorage.getItem('countDownDate'));
    }
    else{
      countDownDate = new Date().setTime(now + lastTime);
      localStorage.setItem('countDownDate',JSON.stringify(countDownDate));
    }
      // var countDownDate = new Date().setTime(now + lastTime);
      // localStorage.setItem('countDownDate',JSON.stringify(countDownDate));
      console.log(this.countDown);
var th = this;
var x = setInterval(function() {

    var now = new Date().getTime();
    var distance = countDownDate - now;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // console.log(minutes + ":" + seconds + "s "); 
    th.setState({
      time: minutes + ":" + seconds + "s "
    })
    if (distance < 0) {
      clearInterval(x);
      localStorage.removeItem('countDownDate');
        
      finishMsq();
        alert("EXPIRED");
    }
}, 1000);




    // setInterval(() => { console.log("Hello");
    // var time = new Date().toLocaleTimeString();

    // this.setState({
    //     // time
    // })

// }, 1000);
    
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
}

export default McqsPage;
