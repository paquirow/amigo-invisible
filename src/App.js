import logo from './logo.png';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Cabecera/>
        <img src={logo} className="App-logo" alt="logo" />
        <Comprobador/> 
        <MyButton />
      </header>
    </div>
  );
}


const sorteo = {
  participantes: {
    p1:{name:'Amanda',code1:'BNS2X8BF',code2:'N5RY4C77'},
    p2:{name:'Paco (Padre)',code1:'CX6NZLDE',code2:'5LUAQ7LJ'},
    p3:{name:'Paola',code1:'RYPM6Y25',code2:'9TWRURCC'},
    p4:{name:'Sandra',code1:'2Y4SKBKD',code2:'BNS2X8BF'},
    p5:{name:'Leo',code1:'83JQVNVA',code2:'8E37N98W'},
    p6:{name:'Amelia',code1:'9TWRURCC',code2:'YP4QZKFN'},
    p7:{name:'Borja',code1:'KJNQQP97',code2:'4GVZPEJ3'},
    p8:{name:'Inma',code1:'FYEGFNJY',code2:'YLC2SX3Y'},
    p9:{name:'Pili',code1:'N5RY4C77',code2:'FMJJ24N5'},
    p10:{name:'Olga',code1:'FMJJ24N5',code2:'KJNQQP97'},
    p11:{name:'Pablo',code1:'4GVZPEJ3',code2:'RYPM6Y25'},
    p12:{name:'María',code1:'U379SR7X',code2:'6QBXSDGY'},
    p13:{name:'Lola',code1:'6QBXSDGY',code2:'83JQVNVA'},
    p14:{name:'Norma',code1:'YLC2SX3Y',code2:'2Y4SKBKD'},
    p15:{name:'Alberto',code1:'YP4QZKFN',code2:'U379SR7X'},
    p16:{name:'Armando',code1:'5LUAQ7LJ',code2:'FYEGFNJY'},
    p17:{name:'Paquito',code1:'8E37N98W',code2:'JJMM4271'},
    p18:{name:'Javi',code1:'JJMM4271',code2:'CX6NZLDE'},
  }
}


function MyButton() {

  let [name1, setName1]=useState("");
  let [name2, setName2]=useState("");


  function handleClick() {
    let code=document.getElementById("code").value
    let length = Object.keys(sorteo["participantes"]).length;
    console.log(sorteo["participantes"]["p1"]["name"])

    for (let i = 1; i <= length; i++) {
      let nam1=sorteo["participantes"]["p"+i]["name"]
      let cod1=sorteo["participantes"]["p"+i]["code1"]
      let cod2=sorteo["participantes"]["p"+i]["code2"]

      if(cod1===code){
        setName1(nam1+" tu amigo invisible es ");

        for (let y = 1; y <= length; y++) {
          let codAmigo=sorteo["participantes"]["p"+y]["code1"]
          let namAmigo=sorteo["participantes"]["p"+y]["name"]
          
          if(codAmigo===cod2){
            setName2(namAmigo);
          }

        }
      }
    }
    setTimeout(function(){
      document.getElementById("code").value=""
      setName1("");
      setName2("");
  }, 5000);
      
    }
   

  return (
    <div>
      <button onClick={handleClick}>
      COMPROBAR
    </button>
    <h2 id="name">{name1}{name2}</h2>
    </div>
  );
}



function Cabecera(){
  let titulo="AMIGO INVISIBLE 2024"
  
  return (
    <div>
      <h1>{titulo}</h1>
      <h2>Familia Francis</h2>
    </div>
  )
}

function Comprobador(){
  
  return(
  <div>
    <input type="text" id="code" name="name"  required minlength="4" maxlength="8" size="10"/>
    
  </div>
  )
}

export default App;
