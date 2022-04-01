import * as React from 'react'
import { ErrorMessage } from './ErrorMessage'
import { IPInfos } from './IPInfos'
import '../assets/styles/App.css'

export const GetIP = () => {

  const [first, setFirst] = React.useState(0)
  const [second, setSecond] = React.useState(0)
  const [third, setThird] = React.useState(0)
  const [fourth, setFourth] = React.useState(0)
  const [showResults, setShowResults] = React.useState(false)
  const [ipBar, setIPBar] = React.useState(0)
  const [mask, setMask] = React.useState('')
  const [broadcast, setBroadcast] = React.useState('')
  const [firstIP, setfirstIP] = React.useState('')
  const [lastIP, setlastIP] = React.useState('')
  const values = first + second + third + fourth

  const checkValues = () =>{
    if((first < 256 && first > 0 && first !== NaN) &&
     (second < 256 && second !== NaN) &&
      (third < 256 && third !== NaN) &&
       (fourth < 256 && fourth !== NaN) &&
        (ipBar < 33)&&
        values > 0)
      { return true }
    else return false
  }

  const handleValues = () => {
    if (checkValues() === true){ 
      return (<IPInfos 
        first={first}
        second={second}
        third={third}
        fourth={fourth}
        ipBar={ipBar}
        mask={mask}
        broadcast={broadcast}
        firstIP={firstIP}
        lastIP={lastIP}
        />) 
      }
      
    else return(<ErrorMessage/>) 
  }

  const getMask = (bitMask:number) => {
    if(checkValues() === true){
    const Netmask = require('netmask').Netmask
    let ip = new Netmask([first, '.', second,'.', third, '.', fourth,'/',bitMask].join(''));
    
    setMask(ip.mask)
    setBroadcast(ip.broadcast)
    setfirstIP(ip.first)
    setlastIP(ip.last)
    }
  }

  return (
    <main>
      <div className='container'>
        <h1 className='texts'>Seu IP em valores <strong>decimais</strong> e o barramento:</h1>
        <div className="getip">
          <input type="number" value={first} max={255} onChange={({target})=>{
            setFirst(parseInt(target.value)) 
            setShowResults(false)
            }}/>
          <input type="number" value={second} max={255} onChange={({target})=>{
            setSecond(parseInt(target.value))
            setShowResults(false)
            }}/>
          <input type="number" value={third} max={255} onChange={({target})=>{
            setThird(parseInt(target.value))
            setShowResults(false)
            }}/>
          <input type="number" value={fourth} max={255} onChange={({target})=>{
            setFourth(parseInt(target.value))
            setShowResults(false)
            }}/>
        </div>
        <div className="get-bitmask">
          <h2 className='texts'>/</h2>
          <input type="number" value={ipBar} max={32} onChange={({target})=>{
            setIPBar(parseInt(target.value))
            setShowResults(false)
            }}/>
        </div>

        <div className="convert-btn">
          <button className='to-convert-btn' onClick={() => {
            setShowResults(true)
            getMask(ipBar)
            }}>Gerar Resultados</button>
        </div>
        {
          (showResults != false) 
          ?
          <div>
            {handleValues()}
          </div>
          :
          null
        }
        
      </div>
    </main>
  )
}
