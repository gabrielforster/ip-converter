import * as React from 'react'
import { IPInfos } from './IPInfos'

interface Props{
  firstQuarter: number,
  secondQuarter: number,
  thirdQuarter: number,
  fourthQuarter: number;
}

export const IPResult: React.FC<Props> = ({firstQuarter,secondQuarter,thirdQuarter,fourthQuarter}) => {

  const ipToBin = (number:number) => {
    let finalBinIp:string = number.toString(2)
    while(finalBinIp.length<8){
      finalBinIp = '0' + finalBinIp
    }
    return (finalBinIp)
  }

  return (
    <>
      <div className='ip-results'>
        <h1 className='texts'>Seu IP convertido para <strong>binário</strong>:</h1>
        <div className='ip-values'>
          <p>{firstQuarter > 0 ? ipToBin(firstQuarter): 0}</p>
          <p>{secondQuarter > 0 ? ipToBin(secondQuarter): 0}</p>
          <p>{thirdQuarter > 0 ? ipToBin(thirdQuarter): 0}</p>
          <p>{fourthQuarter > 0 ? ipToBin(fourthQuarter): 0}</p>
        </div>

        {/* <h1>{
          firstQuarter >= 0 ? firstQuarter.toString(2) : 0}.{
          secondQuarter >= 0 ? secondQuarter.toString(2) : 0}.{
          thirdQuarter >= 0 ? thirdQuarter.toString(2) : 0}.{
          fourthQuarter >= 0 ? fourthQuarter.toString(2) : 0}
        </h1> */}
      </div>
      <IPInfos />
    </>
)
}
