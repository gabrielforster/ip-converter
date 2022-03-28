import React from 'react'

interface Props{
  first: number,
  second: number,
  third: number,
  fourth: number;
}

export const IPInfos: React.FC<Props> = ({first, second, third, fourth}) => {
  
  const ipClass = () => {
    if(first < 128) return 'A'
    else if(first < 192) return 'B'
    else if(first < 224) return 'C'
    else if(first < 240) return 'D'
    else return 'E' 
  }
 
 
  return (
    <div id='ip-infos' className="ip-infos">
      <h2 className='ip-class'>Classe: {ipClass()}</h2>
    </div>
  )
}
