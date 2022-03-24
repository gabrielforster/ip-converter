import * as React from 'react'
import { IPInfos } from './IPInfos'

interface Props{
  firstQuarter: number,
  secondQuarter: number,
  thirdQuarter: number,
  fourthQuarter: number;
}

export const IPResult: React.FC<Props> = ({firstQuarter,secondQuarter,thirdQuarter,fourthQuarter}) => {
  
  const[first, setFirst] = React.useState('0')
  const[second, setSecond] = React.useState('0')
  const[third, setThird] = React.useState('0')
  const[fourth, setFourth] = React.useState('0')

  // const ipToBin = (number:number) => {
  //   // const numberIP = parseInt(number)
  //   const binIP = number.toString(2)
  //   let finalIP
  //   while(binIP.length < 8){
  //     finalIP = '0' + number
  //   }
  //   return finalIP
  // }

  return (
    <>
      <div className='ip-results'>
        <h1>Seu <strong>IP</strong> convertido para <strong>binário</strong></h1>
        <div className='ip-values'>
          <p>{first}</p>
          <p>{second}</p>
          <p>{third}</p>
          <p>{fourth}</p>
        </div>

        {/* <h1>{firstQuarter >= 0 ? firstQuarter.toString(2) : 0}.{secondQuarter >= 0 ? secondQuarter.toString(2) : 0}.{thirdQuarter >= 0 ? thirdQuarter.toString(2) : 0}.{fourthQuarter >= 0 ? fourthQuarter.toString(2) : 0}</h1> */}
      </div>
      <IPInfos />
    </>
)
}
