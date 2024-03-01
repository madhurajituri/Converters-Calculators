import { React, useState } from 'react'
import base64 from 'base-64'

function Base64() {

    const [inputencode, setinputencode] = useState("");
    const [outputencode, setoutputencode] = useState("");
    const [inputdecode, setinputdecode] = useState("");
    const [outputdecode, setoutputdecode] = useState("");

    function encode() {
        setoutputencode(base64.encode(inputencode));
    }

    function decode() {
        setoutputdecode(base64.decode(inputdecode));
    }

    return (
        <>
            <div>
                <div className="heading">Base 64 Conversion</div>
                <div className="flex flex-col m-20 gap-24 items-center justify-center">
                    <div className="flex gap-10 items-center justify-center">
                        <div>
                            <div className="stateheading text-center">Enter input for encoding</div>
                            <textarea className="codearea w-100 h-36" value={inputencode} onChange={e => setinputencode(e.target.value)}></textarea>
                        </div>
                        <button className="convertbtn w-20" onClick={encode}>Encode</button>
                        <div>
                            <div className="stateheading text-center">Encoded output</div>
                            <textarea className="codearea w-100 h-36" value={outputencode} readOnly></textarea>
                        </div>
                    </div>
                    <div className="flex gap-10 items-center">
                        <div>
                            <div className="stateheading text-center">Enter input for decoding</div>
                            <textarea className="codearea w-100 h-36" value={inputdecode} onChange={e => setinputdecode(e.target.value)}></textarea>
                        </div>
                        <button className="convertbtn w-20" onClick={decode}>Decode</button>
                        <div>
                            <div className="stateheading text-center">Decoded output</div>
                            <textarea className="codearea w-100 h-36" value={outputdecode} readOnly></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Base64