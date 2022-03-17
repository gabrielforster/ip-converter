import * as React from 'react'

interface Props{
  firstQuarter: number,
  secondQuarter: number,
  thirdQuarter: number,
  fourthQuarter: number;
}

export const IPResult: React.FC<Props> = ({firstQuarter,secondQuarter,thirdQuarter,fourthQuarter}) => {
  
  // const toBin: number = () => {
  //   return()
  // }

  return (
    <div className='ip-results'>
      <h1>Seu <strong>IP</strong> convertido para <strong>binário</strong></h1>
      <div className='ip-values'>
        <p>{firstQuarter.toString(2)}</p>
        <p>{secondQuarter.toString(2)}</p>
        <p>{thirdQuarter.toString(2)}</p>
        <p>{fourthQuarter.toString(2)}</p>
      </div>


      {/* <h1>{firstQuarter >= 0 ? firstQuarter.toString(2) : 0}.{secondQuarter >= 0 ? secondQuarter.toString(2) : 0}.{thirdQuarter >= 0 ? thirdQuarter.toString(2) : 0}.{fourthQuarter >= 0 ? fourthQuarter.toString(2) : 0}</h1> */}
    </div>
  )
}
