import React from "react";
import ReactDOM from "react-dom";

const fizzFuzz = () => {
  
  const iteratorData = [];

  // Outer loop to create parent
  for (let i = 1; i <= 100; i++) {
    if (i%3 === 0){
      //iteratorData.splice(i);
      iteratorData[i] = 'Fizz\n'
    }

    if (i%5 === 0){
     // iteratorData.splice(i);
      iteratorData[i] = 'Buzz\n'
    }

    if (i%5 === 0 && i%3 === 0){
      //iteratorData.splice(i);
      iteratorData[i] = 'FizzBuzz\n'
    }

    if (i%5 !== 0 && i%3 !== 0){
      iteratorData[i] = i + '\n';
    }

  }
   
  return iteratorData;
}


function App() {
  return (
    <div className="App">
     {fizzFuzz()}
    </div>
  );
}


export default App;
