import { React, useState } from 'react'
import base64 from 'base-64'
import Clipboard from "react-copy-to-clipboard";
import CopyIcon from '@mui/icons-material/ContentCopy';
import TickIcon from '@mui/icons-material/Done';
import { grey } from '@mui/material/colors';

function Base64() {

    const [inputencode, setinputencode] = useState("");
    const [outputencode, setoutputencode] = useState("");
    const [inputdecode, setinputdecode] = useState("");
    const [outputdecode, setoutputdecode] = useState("");
    const [encodecopied, setencodecopied] = useState(false);
    const [decodecopied, setdecodecopied] = useState(false);

    function encode() {
        setoutputencode(base64.encode(inputencode));

    }

    function decode() {
        setoutputdecode(base64.decode(inputdecode));
    }

    function handlecopyencode() {
        setencodecopied(true);
        setTimeout(() => {
            setencodecopied(false);
        }, 800);
    }

    function handlecopydecode() {
        setdecodecopied(true);
        setTimeout(() => {
            setdecodecopied(false);
        }, 800);
    }

    return (
        <>
            <div>
                <div className="heading">Base 64 Conversion</div>
                <div className="flex flex-col m-20 gap-24 items-center justify-center">
                    <div className="flex gap-5 items-center justify-center">
                        <div>
                            <div className="stateheading text-center">Enter input for encoding</div>
                            <textarea className="codearea w-100 h-36" value={inputencode} onChange={e => setinputencode(e.target.value)}></textarea>
                        </div>
                        <button className="convertbtn w-20" onClick={encode}>Encode</button>
                        <div>
                            <div className="stateheading text-center">Encoded output</div>
                            <textarea className="codearea w-100 h-36" value={outputencode} readOnly></textarea>
                        </div>
                        <Clipboard text={outputencode}>
                            <button onClick={handlecopyencode} className="rounded-xl bg-slate-700 h-10 w-10 hover:bg-slate-800">
                                {!encodecopied ? <CopyIcon sx={{ color: grey[50] }} /> : <TickIcon sx={{ color: grey[50] }} />}
                            </button>
                        </Clipboard>
                    </div>
                    <div className="flex gap-5 items-center">
                        <div>
                            <div className="stateheading text-center">Enter input for decoding</div>
                            <textarea className="codearea w-100 h-36" value={inputdecode} onChange={e => setinputdecode(e.target.value)}></textarea>
                        </div>
                        <button className="convertbtn w-20" onClick={decode}>Decode</button>
                        <div>
                            <div className="stateheading text-center">Decoded output</div>
                            <textarea className="codearea w-100 h-36" value={outputdecode} readOnly></textarea>
                        </div>
                        <Clipboard text={outputdecode}>
                            <button onClick={handlecopydecode} className="rounded-xl bg-slate-700 h-10 w-10 hover:bg-slate-800">
                                {!decodecopied ? <CopyIcon sx={{ color: grey[50] }} /> : <TickIcon sx={{ color: grey[50] }} />}
                            </button>
                        </Clipboard>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Base64