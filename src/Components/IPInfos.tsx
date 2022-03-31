import * as React from 'react'

interface Infos{
  first: string,
  second: string,
  third: string,
  fourth: string;
}

export const IPInfos: React.FC<Infos> = ({first, second, third, fourth}) => {

  const [mask, setMask] = React.useState('')
  const [ipBar, setipBar] = React.useState(0)
  const [cutPoint, setCutPoint] = React.useState(0)
  const [cutOctet, setCutOctet] = React.useState(0)

  const ipToBin = (number:number) => {
    let finalBinIp:string = number.toString(2)
    while(finalBinIp.length<8){
      finalBinIp = '0' + finalBinIp
    }
    return (finalBinIp)
  }
 
  const getMask = (ipBar:number) => {
   
    {
      ipBar <=8 ? setCutPoint(ipBar) :
      ipBar <=16 ? setCutPoint(ipBar + 1) :
      ipBar <=24 ? setCutPoint(ipBar + 2) :
      setCutPoint(ipBar + 3)  
    }
    
    {
      ipBar <= 8 ? setCutOctet(1) : 
      ipBar > 8 ? setCutOctet(2) : 
      ipBar > 16 ? setCutOctet(3) : 
      ipBar > 24 ? setCutOctet(4) : null
    }
  
    let arrMask = [first, '.', second,'.', third, '.', fourth]

    //testing
    let finalMask = [parseInt(first, 2), '.', parseInt(second, 2), '.', parseInt(third, 2),'.', parseInt(fourth, 2)].join('')
    setMask(finalMask)
  }

  console.log(cutPoint)

  return (
    <>
    <div className="bar">
      <h2 className='texts'>
        Informe o barramento do seu IP
      </h2>
      <div className="get-bar">
        <input type="number" value={ipBar} onChange={(e)=>setipBar(e.target.valueAsNumber)}/>
        <button className='bar-btn' onClick={()=>getMask(ipBar)}>Mostrar</button>
      </div>

      <div className="mask">
        {mask !== ''
        ?
        <div className="finalMask">
          <h2 className='texts'>Máscara do IP</h2>
          <p className='values'>{mask}</p>
        </div>
        :
        null
        }
      </div>
    </div>

    
    </>
  )
}
