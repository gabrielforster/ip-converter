import * as React from 'react'

interface Infos{
  first: string,
  second: string,
  third: string,
  fourth: string;
}

export const IPInfos: React.FC<Infos> = ({first, second, third, fourth}) => {

  const [ipBar, setipBar] = React.useState(0)
  const [mask, setMask] = React.useState('')
 
  const getMask = (ipBar:number) => {
    let cutPoint
    {ipBar <=8 ? cutPoint = ipBar : cutPoint = ipBar - 8}

    //testing
    let finalMask = [parseInt(first, 2), '.', parseInt(second, 2), '.', parseInt(third, 2),'.', parseInt(fourth, 2)].join('')
    setMask(finalMask)
  }

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
