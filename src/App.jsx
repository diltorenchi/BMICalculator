import { useState } from 'react'

import './App.css'

function App() {
  const [weight,setWeight] = useState(0)
  const [height,setHeight] = useState(0)
  const [bmi,setBmi] = useState('')
  const [message,setMessage] = useState('')

  const calBmi = (e)=>{
    e.preventDefault()

    if(weight===0 || height===0){
      alert('Please enter a valid weight and height')
    }else{
      const heightInMeter = height /100;
      const bmi = (weight/(heightInMeter*heightInMeter))
      setBmi(bmi.toFixed(2))

      if(bmi<25){
        setMessage('You are underweight')
      }else if (bmi>=25 && bmi<30){
        setMessage('You have a healthy weight ')
      }
      else{
        setMessage('You are Overweight')
      }
    }

    
  }

  const reload =()=>{
    window.location.reload()
  }

  return (
    <>
      <div className='app'>
        <div className="container">
          <h2 style={{textAlign:'center'}}>BMI Calculator</h2>
        
        <form onSubmit={calBmi}>
       <div>
        <label htmlFor="">Weight:</label>
        <input onChange={(e)=> setWeight(e.target.value)} value={weight} className='bmi-input' type="text"  />
       </div>

       <div>
        <label htmlFor="">Height:</label>
        <input onChange={(e)=> setHeight(e.target.value)} value={height} className='bmi-input' type="text"  />
       </div>

       <div>
       <button className='btn' type='submit'>Calculate</button>
       <button onClick={reload} className='btn btn-outline' type='submit'>Reload</button>
       </div>

        </form>


        <div>
          <h3 style={{textAlign:'center'}}>Your BMI is:{bmi} </h3>
          <p style={{textAlign:'center', fontWeight:'500'}} >{message}</p>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
