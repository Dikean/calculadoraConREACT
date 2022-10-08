import React, { useState, Component } from "react";
import './App.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import ReactDOM from "react-dom";

const App = ()=>{
   
    const MySwal = withReactContent(Swal)
    const [result, setResult] = useState('')
    const [History, setHistory] = useState([])
  
    const box = document.getElementById('box');
    const handleClick = (e) => {
      setResult(result.concat(e.target.name));

    }

    const clear = () => {
      setResult('');
    }
    
    const backspace = () => {
      setResult(result.slice(0,result.length -1))
    }

    const calculate = () => {
     
        try {
            if(result.indexOf('.')>=2){
                MySwal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo a fallado!',
                })
            }else{
                setResult(eval(result).toString());
          
                   setHistory([
                    ...History, 
                    result+" = "+eval(result)
                 ])
            }
            setResult('')
        } catch (error) {
            
        }


    

         
      }
    
    const cleanHistory = () => {
         setHistory([])
     
         MySwal.fire(
            'Good job!',
            'Historial Eliminado correctamente!!',
            'success'
          )
    }

    const double = () => {
        
    
        MySwal.fire(
           'Good job!',
           'Doble click',
           'success'
         )
   }

const nota = () => {
    Swal.fire('No se puede ingresar dos o mas veces el signo punto, Ejemplos de Error: - 2.1.2 + 2 valores validos: 2.1+2.3+4.1 ')
}

    return (
        <div className="row">
            <div className="container col-md-5">
        
                <form>
                     <input type='text' value={result} id="inputResult" />
                </form>

                <div className="keypad">
                    <button className="highlight" onClick={clear} id='Clear'>Clear</button>
                    <button className="highlight" onClick={backspace} id='backspace' >C</button>
                    <button className="highlight" name="/" onClick={handleClick}>&divide;</button>
                    <button name="7" onClick={handleClick}>7</button>
                    <button name="8" onClick={handleClick}>8</button>
                    <button name="9" onClick={handleClick}>9</button>
                    <button className="highlight" name="*" onClick={handleClick}>&times;</button>
                    <button name="4" onClick={handleClick}>4</button>
                    <button name="5" onClick={handleClick}>5</button>
                    <button name="6" onClick={handleClick}>6</button>
                    <button className="highlight" name="-" onClick={handleClick}>&ndash;</button>
                    <button name="1" onClick={handleClick}>1</button>
                    <button name="2" onClick={handleClick}>2</button>
                    <button name="3" onClick={handleClick}>3</button>
                    <button className="highlight" name="+" onClick={handleClick}>+</button>
                    <button name="0" onClick={handleClick}>0</button>
                    <button name="." onClick={handleClick}>.</button>
                    <button className="highlight" onClick={calculate} onDoubleClick={double} id='result' >=</button>


                </div>
            </div> 

            {/** Historial */}
            <br></br><div className="col-md-7">
            <div className="shadow-lg p-3 mb-5 bg-body rounded">
            
              {/** Historial and button */}
              <div className="row"> 
              
              <div className="col-md-9">
               <h2>Historial by Dylan Aponte</h2> 
               </div> 
               <div className="col-md-3">
               <button className="btn btn-danger" onClick={nota}>Nota!!</button>
               </div> 
              
               </div>  {/** end Historial and button*/}
              
                <button onClick={cleanHistory} className="btn btn-success">Limpiar</button>
                <br/><br/><div id="box" className="overflow-auto">
                 
                   {
                    History.map((x,index)=>
                    <div className="alert alert-info" role="alert" key={index}>
                     {x}
                    </div>
                    )
                   }
                </div>
            </div>
            </div>

         {/** end row */} </div>

        
    );
}

export default App