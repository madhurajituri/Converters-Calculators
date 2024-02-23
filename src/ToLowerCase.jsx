import React from 'react'
import {useState} from 'react'

function ToLowerCase(){
    const [text,settext] = useState("");
    const [lowercased,setans] = useState("");
    const insertvalue = () => {
        console.log(text);
        setans(text.toString().toLowerCase());
    }
    return(
        <>
        <h2 className="heading">To Lower Case</h2>
        <div className="flex gap-10 justify-center w-full">
            <div className="info flex flex-col items-center justify-center">
              <h3 className="stateheading">Enter text for conversion here!</h3>
              <textarea className="codearea" value={text} onChange={(e)=>settext(e.target.value)}></textarea>
              <button className="convertbtn" onClick={insertvalue}>Convert</button>
            </div>
            <div className="info">
              <h3 className="stateheading">Lowercased text!</h3>
              <textarea className="codearea" value={lowercased} readOnly></textarea>
            </div>
        </div>
        
        </>
    )
}

export default ToLowerCase;