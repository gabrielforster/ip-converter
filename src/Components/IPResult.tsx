import * as React from 'react'
import { IPInfos } from './IPInfos'
import arrDown from '../assets/imgs/arrDown.svg'
import arrRight from '../assets/imgs/arrRight.svg'

interface Props{
  first: number,
  second: number,
  third: number,
  fourth: number;
}

export const IPResult: React.FC<Props> = ({first,second,third,fourth}) => {

  const [showInfos, setShowInfos] = React.useState(false)
  

  const ipToBin = (number:number) => {
    let finalBinIp:string = number.toString(2)
    while(finalBinIp.length<8){
      finalBinIp = '0' + finalBinIp
    }
    return (finalBinIp)
  }

  const ipClass = () => {
    if(first < 128) return 'A'
    else if(first < 192) return 'B'
    else if(first < 224) return 'C'
    else if(first < 240) return 'D'
    else return 'E' 
  }

  return (
    <>
      <div className='results'>
        <h1 className='texts'>Seu IP convertido para valores <strong>binários</strong>:</h1>
        <div className='ip-values'>
          <p className={first == 0 ? 'zero': ''}>{first > 0 ? ipToBin(first): '000000000'}</p>
          <p className={second == 0 ? 'zero': ''}>{second > 0 ? ipToBin(second): '000000000'}</p>
          <p className={third == 0 ? 'zero': ''}>{third > 0 ? ipToBin(third): '000000000'}</p>
          <p className={fourth == 0 ? 'zero': ''}>{fourth > 0 ? ipToBin(fourth): '000000000'}</p>
        </div>

        <hr />

        <div id='ip-infos' className="ip-infos">
          <h2 className='ip-class'>Classe</h2>
          <p className='values'>{ipClass()}</p>
        </div>

        <a className='showmore' 
        onClick={()=> setShowInfos(showInfos == true ? false : true)}
        href="#ip-infos"
        >
          <h3>Ver mais</h3>
          <img src={showInfos == true ? arrDown : arrRight}
          alt="Clique para mostrar mais informações" 
          /> 
          </a>
        { showInfos
          ?
          <IPInfos first={ipToBin(first)} second={ipToBin(second)} third={ipToBin(third)} fourth={ipToBin(fourth)} />
          :
          null
        }
      </div>
    </>
)
}
