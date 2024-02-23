import React , {useState} from 'react'

function ToUpperCase(){
    const [text,settext] = useState("");
    const [lowercased,setans] = useState("");
    const insertvalue = () => {
        console.log(text);
        setans(text.toString().toUpperCase());
    }
    return(
        <>
        <h2 className="heading">To Upper Case</h2>
        <div className="flex gap-10 justify-center w-full">
            <div className="info flex flex-col items-center justify-center">
              <h3 className="stateheading">Enter text for conversion here!</h3>
              <textarea className="codearea" value={text} onChange={(e)=>settext(e.target.value)}></textarea>
              <button className="convertbtn" onClick={insertvalue}>Convert</button>
            </div>
            <div className="info">
              <h3 className="stateheading">Uppercased text!</h3>
              <textarea className="codearea" value={lowercased} readOnly></textarea>
            </div>
        </div>
        
        </>
    )
}
export default ToUpperCase;