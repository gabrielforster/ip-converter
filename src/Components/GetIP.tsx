import * as React from 'react'
import { IPResult } from './IPResult'
import { ErrorMessage } from './ErrorMessage'
import '../assets/styles/App.css'

export const GetIP = () => {

  const [firstQuarter, setFirstQuarter] = React.useState(0)
  const [secondQuarter, setSecondQuarter] = React.useState(0)
  const [thirdQuarter, setThirdQuarter] = React.useState(0)
  const [fourthQuarter, setFourthQuarter] = React.useState(0)
  const [showResults, setShowResults] = React.useState(false)
  let values = firstQuarter + secondQuarter + thirdQuarter + fourthQuarter

  const checkHigh = () =>{
    if((firstQuarter < 256 && firstQuarter > 0 && firstQuarter != NaN) &&
     (secondQuarter < 256 && secondQuarter != NaN) &&
      (thirdQuarter < 256 && thirdQuarter != NaN) &&
       (fourthQuarter < 256 && fourthQuarter != NaN) &&
        values > 0)
      { return true }
    else return false
  }

  const checkValues = () => {
    if (checkHigh() === true){ 
      return (<IPResult 
        first={firstQuarter}
        second={secondQuarter}
        third={thirdQuarter}
        fourth={fourthQuarter}
        />) 
      }
      
    else return(<ErrorMessage/>) 
  }

  return (
    <main>
      <div className='container'>
        <h1 className='texts'>Seu IP em valores <strong>decimais</strong>:</h1>
        <div className="getip">
          <input type="number" value={firstQuarter} max={255} onChange={({target})=>{
            setFirstQuarter(parseInt(target.value)) 
            setShowResults(false)
            }}/>
          <input type="number" value={secondQuarter} max={255} onChange={({target})=>{
            setSecondQuarter(parseInt(target.value))
            setShowResults(false)
            }}/>
          <input type="number" value={thirdQuarter} max={255} onChange={({target})=>{
            setThirdQuarter(parseInt(target.value))
            setShowResults(false)
            }}/>
          <input type="number" value={fourthQuarter} max={255} onChange={({target})=>{
            setFourthQuarter(parseInt(target.value))
            setShowResults(false)
            }}/>
        </div>

        <div className="convert-btn">
          <button className='to-convert-btn' onClick={() => setShowResults(true)}>Converter</button>
        </div>
        {
          (showResults != false) 
          ?
          <div>
            {checkValues()}
          </div>
          :
          null
        }
        
      </div>
    </main>
  )
}
