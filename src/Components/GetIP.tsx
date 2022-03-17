import * as React from 'react'
import { IPResult } from './IPResult'
import '../App.css'

export const GetIP = () => {

  const [firstQuarter, setFirstQuarter] = React.useState(0)
  const [secondQuarter, setSecondQuarter] = React.useState(0)
  const [thirdQuarter, setThirdQuarter] = React.useState(0)
  const [fourthQuarter, setFourthQuarter] = React.useState(0)

  return (
    <main>
      <div className='container'>
        <div className="getip">
            <input type="number" value={firstQuarter} max={255} onChange={e=>{setFirstQuarter(parseInt(e.target.value))}}/>
            <input type="number" value={secondQuarter} max={255} onChange={e=>{setSecondQuarter(parseInt(e.target.value))}}/>
            <input type="number" value={thirdQuarter} max={255} onChange={e=>{setThirdQuarter(parseInt(e.target.value))}}/>
            <input type="number" value={fourthQuarter} max={255} onChange={e=>{setFourthQuarter(parseInt(e.target.value))}}/>
        </div>

        <IPResult firstQuarter={firstQuarter} secondQuarter={secondQuarter} thirdQuarter={thirdQuarter} fourthQuarter={fourthQuarter}/>

      </div>
    </main>
  )
}
