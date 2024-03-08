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
            <div className='m-20'>
                <div className="heading">Base 64 Conversion</div>
                <div className="mt-10 flex flex-col min-[1125px]:flex-row min-[1125px]:gap-24 items-center justify-center">

                    <div className="justify-center items-center w-full sm:w-fit">
                        <div className="heading text-lg sm:ml-16">Base 64 encoding</div>
                        <div className="flex gap-2 flex-col">
                            <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-2 sm:gap-6">
                                <div className="text-red-300 sm:w-16 text-center">Enter input for encoding</div>
                                <textarea className="codearea max-[370px]:w-64 w-80 h-20 sm:w-96" value={inputencode} onChange={e => setinputencode(e.target.value)}></textarea>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-2 sm:gap-6">
                                <div className="text-red-300 sm:-mt-16 sm:w-16 text-center">Encoded output</div>
                                <div className="flex flex-col">
                                    <textarea className="codearea max-[370px]:w-64 w-80 sm:w-96 h-20" value={outputencode} readOnly></textarea>
                                    <div className="flex justify-between items-center">
                                        <button className="convertbtn w-20" onClick={encode}>Encode</button>
                                        <Clipboard text={outputencode}>
                                            <button onClick={handlecopyencode} className="rounded-xl bg-slate-700 h-10 w-10 hover:bg-slate-800">
                                                {!encodecopied ? <CopyIcon sx={{ color: grey[50] }} /> : <TickIcon sx={{ color: grey[50] }} />}
                                            </button>
                                        </Clipboard>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div>

                    <div className="justify-center items-center w-full sm:w-fit">
                        <div className="heading text-lg sm:ml-16">Base 64 decoding</div>
                        <div className="flex gap-2 flex-col">
                            <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-2 sm:gap-6">
                                <div className="text-red-300 sm:w-16 text-center">Enter input for decoding</div>
                                <textarea className="codearea max-[370px]:w-64 w-80 h-20 sm:w-96" value={inputdecode} onChange={e => setinputdecode(e.target.value)}></textarea>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-2 sm:gap-6">
                                <div className="text-red-300 sm:-mt-16 sm:w-16 text-center">Decoded output</div>
                                <div className="flex flex-col">
                                    <textarea className="codearea max-[370px]:w-64 w-80 sm:w-96 h-20" value={outputdecode} readOnly></textarea>
                                    <div className="flex justify-between items-center">
                                        <button className="convertbtn w-20" onClick={decode}>Decode</button>
                                        <Clipboard text={outputdecode}>
                                            <button onClick={handlecopydecode} className="rounded-xl bg-slate-700 h-10 w-10 hover:bg-slate-800">
                                                {!decodecopied ? <CopyIcon sx={{ color: grey[50] }} /> : <TickIcon sx={{ color: grey[50] }} />}
                                            </button>
                                        </Clipboard>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div>

                </div>
            </div>
        </>
    )
}

export default Base64