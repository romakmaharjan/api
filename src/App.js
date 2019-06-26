import React from 'react';
import './App.css';

function App() {
  

  const url='https://jsonplaceholder.typicode.com/posts'; 
  const data={
    userId:'1',
    id:'1',
    title:'yes we did it',
    body:'ergfd asdff fdsaf dsfae'

  }
  const options={
    method:'POST',
    body:JSON.stringify(data),
    headers:{
        "content-type":"application/json; charset=UTF-8"
    }
};
getData();

async function getData(){
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
    document.getElementById('uid').innerHTML = json.userId;
    document.getElementById('tit').innerHTML =json.title;
    document.getElementById('bod').innerHTML=json.body;
    console.log(json);

}
  return (
    <div className="App">
      <p>Userid:<span id="uid"></span></p>
      <p>id:<span></span></p>
      <p>title:<span id="tit"></span></p>
      <p>Body:<span id="bod"></span></p>
    </div>
  );
}

export default App;
