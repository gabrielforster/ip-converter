import * as React from "react";
import { Infos } from "./GetIP";

export const IPInfos: React.FC<Infos> = ({
  first,
  second,
  third,
  fourth,
  mask,
  broadcast,
  firstIP,
  lastIP,
}) => {
  const ipToBin = (number: number) => {
    let finalBinIp: string = number.toString(2);
    while (finalBinIp.length < 8) {
      finalBinIp = "0" + finalBinIp;
    }
    return finalBinIp;
  };

  const ipClass = () => {
    if (first < 128) return "A";
    else if (first < 192) return "B";
    else if (first < 224) return "C";
    else if (first < 240) return "D";
    else return "E";
  };

  return (
    <>
      <div className='infos'>
        <div className='mask'>
          {mask !== "" ? (
            <>
              <h2 className='texts'>
                IP em valores <strong>binários</strong>
              </h2>
              <p className='values bin-ip'>
                {ipToBin(first)}.{ipToBin(second)}.{ipToBin(third)}.
                {ipToBin(fourth)}
              </p>

              <h2 className='texts'>
                <strong>Classe</strong> do IP
              </h2>
              <p className='values'>{ipClass()}</p>

              <h2 className='texts'>
                <strong>Máscara</strong> da rede
              </h2>
              <p className='values'>{mask}</p>

              <h2 className='texts'>
                Endereço de <strong>Broadcast</strong> da rede
              </h2>
              <p className='values'>{broadcast}</p>

              <h2 className='texts'>
                <strong>Primeiro</strong> IP da rede
              </h2>
              <p className='values'>{firstIP}</p>

              <h2 className='texts'>
                <strong>Último</strong> IP da rede
              </h2>
              <p className='values'>{lastIP}</p>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};
