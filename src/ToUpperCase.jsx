import React, { useState } from 'react'
import Clipboard from "react-copy-to-clipboard";
import CopyIcon from '@mui/icons-material/ContentCopy';
import TickIcon from '@mui/icons-material/Done';
import { grey } from '@mui/material/colors';

function ToUpperCase() {
  const [text, settext] = useState("");
  const [lowercased, setans] = useState("");
  const [copied , setcopied] = useState(false);

  const insertvalue = () => {
    console.log(text);
    setans(text.toString().toUpperCase());
  }

  function handlecopy() {
    setcopied(true);
    setTimeout(() => {
      setcopied(false);
    }, 800);
  }

  return (
    <>
      <h2 className="heading">To Upper Case</h2>
      <div className="flex gap-10 justify-center w-full mb-16">
        <div className="info flex flex-col items-center justify-center">
          <h3 className="stateheading">Enter text for conversion here!</h3>
          <textarea className="codearea" value={text} onChange={(e) => settext(e.target.value)}></textarea>
          <button className="convertbtn" onClick={insertvalue}>Convert</button>
        </div>
        <div className="info flex flex-col items-center">
          <h3 className="stateheading">Uppercased text!</h3>
          <textarea className="codearea" value={lowercased} readOnly></textarea>
          <Clipboard text={lowercased}>
            <button onClick={handlecopy} className="rounded-xl mt-2 bg-slate-700 h-10 w-10 hover:bg-slate-800">
              {!copied ? <CopyIcon sx={{ color: grey[50] }} /> : <TickIcon sx={{ color: grey[50] }} />}
            </button>
          </Clipboard>
        </div>
      </div>

    </>
  )
}
export default ToUpperCase;