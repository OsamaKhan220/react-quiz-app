import React, { Component } from 'react';
class QuizListScreen extends Component {
    constructor(props){
        super(props);
    }
    render() { 
        const { quizList,listDisa } = this.props;
        return (
            
        <div class="container">


            {quizList.map((res,index) => {
                console.log(res);
                //   return (<div><h1>{res.name}</h1><button onClick={() => listDisa(index)}>Open</button><hr /></div>);
               return(

                <div>
                  <h5 class="card-title">{res.name}</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button class="btn btn-primary" onClick={() => listDisa(index)}>OPEN</button>
                </div>

               )

            })}
            </div>
         );
    }

}
 
export default QuizListScreen;