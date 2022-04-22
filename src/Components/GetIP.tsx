import React, { useState } from "react";
import { ErrorMessage } from "./ErrorMessage";
import { IPInfos } from "./IPInfos";
import "../assets/styles/App.css";

export interface Infos {
  first: number;
  second: number;
  third: number;
  fourth: number;
  mask: string;
  broadcast: string;
  lastIP: string;
  firstIP: string;
}

export const GetIP: React.FC<Infos> = () => {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [third, setThird] = useState(0);
  const [fourth, setFourth] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [ipBar, setIPBar] = useState(0);
  const [mask, setMask] = useState("");
  const [broadcast, setBroadcast] = useState("");
  const [firstIP, setfirstIP] = useState("");
  const [lastIP, setlastIP] = useState("");
  const values = first + second + third + fourth;

  const checkValues = () => {
    if (
      first < 256 &&
      first > 0 &&
      first !== NaN &&
      second < 256 &&
      second !== NaN &&
      third < 256 &&
      third !== NaN &&
      fourth < 256 &&
      fourth !== NaN &&
      ipBar < 33 &&
      values > 0
    ) {
      return true;
    } else return false;
  };

  const handleValues = () => {
    if (checkValues() === true) {
      return (
        <IPInfos
          first={first}
          second={second}
          third={third}
          fourth={fourth}
          mask={mask}
          broadcast={broadcast}
          firstIP={firstIP}
          lastIP={lastIP}
        />
      );
    } else return <ErrorMessage />;
  };

  const getMask = (bitMask: number) => {
    if (checkValues() === true) {
      const Netmask = require("netmask").Netmask;
      let ip = new Netmask(
        [first, ".", second, ".", third, ".", fourth, "/", bitMask].join("")
      );

      setMask(ip.mask);
      setBroadcast(ip.broadcast);
      setfirstIP(ip.first);
      setlastIP(ip.last);
    }
  };

  return (
    <main>
      <div className='container'>
        <h1 className='texts'>
          Seu IP em valores <strong>decimais</strong> e o barramento:
        </h1>
        <div className='getip'>
          <input
            type='number'
            value={first}
            onChange={({ target }) => {
              setFirst(parseInt(target.value));
              setShowResults(false);
            }}
          />
          <input
            type='number'
            value={second}
            onChange={({ target }) => {
              setSecond(parseInt(target.value));
              setShowResults(false);
            }}
          />
          <input
            type='number'
            value={third}
            onChange={({ target }) => {
              setThird(parseInt(target.value));
              setShowResults(false);
            }}
          />
          <input
            type='number'
            value={fourth}
            onChange={({ target }) => {
              setFourth(parseInt(target.value));
              setShowResults(false);
            }}
          />
        </div>
        <div className='get-bitmask'>
          <h2 className='texts'>/</h2>
          <input
            type='number'
            value={ipBar}
            onChange={({ target }) => {
              setIPBar(parseInt(target.value));
              setShowResults(false);
            }}
          />
        </div>

        <div className='convert-btn'>
          <button
            className='to-convert-btn'
            onClick={() => {
              setShowResults(true);
              getMask(ipBar);
            }}
          >
            Gerar Resultados
          </button>
        </div>
        {showResults == true ? <div>{handleValues()}</div> : null}
      </div>
    </main>
  );
};
