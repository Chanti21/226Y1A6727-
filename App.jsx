import React,{useState} from 'react';
import {fetchNumbers} from "./api/apiService";
function App(){
  const[data,setData]=useState(null);
  const getNumbers= async(type)=>{
    const result=await fetchNumbers(type);
    setData(result);
  };
  return(
    <div>
      <h1>Averagecal</h1>
      <button onClick={() => getNumbers("p")}>Prime</button>
      <button onClick={()=>getNumbers("f")}>Fibonacci</button>
      <button onClick={()=>getNumbers("e")}>evenNumbers</button>
      {data &&(
        <div>
          <h2>Numbers:{data.numbers?.join(",")}</h2>
          <h2>Average:{data.avg}</h2>
          </div>
      )}
    </div>
  );

  }
  export default App;
