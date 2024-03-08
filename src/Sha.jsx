import { useState, React } from "react";
import sha1 from 'crypto-js/sha1';
import sha224 from 'crypto-js/sha224';
import sha256 from 'crypto-js/sha256';
import sha384 from 'crypto-js/sha384';
import sha512 from 'crypto-js/sha512';
import Clipboard from "react-copy-to-clipboard";
import CopyIcon from '@mui/icons-material/ContentCopy';
import TickIcon from '@mui/icons-material/Done';
import { grey } from '@mui/material/colors';


function Sha() {

    const [sha1input, setsha1input] = useState("");
    const [sha1copied, setsha1copied] = useState(false);
    const [sha1output, setsha1output] = useState("");
    const [sha224input, setsha224input] = useState("");
    const [sha224copied, setsha224copied] = useState(false);
    const [sha224output, setsha224output] = useState("");
    const [sha256input, setsha256input] = useState("");
    const [sha256copied, setsha256copied] = useState(false);
    const [sha256output, setsha256output] = useState("");
    const [sha384input, setsha384input] = useState("");
    const [sha384copied, setsha384copied] = useState(false);
    const [sha384output, setsha384output] = useState("");
    const [sha512input, setsha512input] = useState("");
    const [sha512copied, setsha512copied] = useState(false);
    const [sha512output, setsha512output] = useState("");


    function convert1() {
        let x = sha1(sha1input);
        setsha1output(x);
    }

    function convert224() {
        let x = sha224(sha224input);
        setsha224output(x);
    }

    function convert256() {
        let ans = sha256(sha256input);
        setsha256output(ans);
    }

    function convert384() {
        let ans = sha384(sha384input);
        setsha384output(ans);
    }

    function convert512() {
        let ans = sha512(sha512input);
        setsha512output(ans);
    }

    function handle1() {
        setsha1copied(true);
        setTimeout(() => {
            setsha1copied(false);
        }, 800);
    }

    function handle224() {
        setsha224copied(true);
        setTimeout(() => {
            setsha224copied(false);
        }, 800);
    }

    function handle256() {
        setsha256copied(true);
        setTimeout(() => {
            setsha256copied(false);
        }, 800);
    }

    function handle384() {
        setsha384copied(true);
        setTimeout(() => {
            setsha384copied(false);
        }, 800);
    }

    function handle512() {
        setsha512copied(true);
        setTimeout(() => {
            setsha512copied(false);
        }, 800);
    }

    return (
        <>
            <div className="m-20">
                <div className="flex flex-col items-center lg:flex-row m-10 gap-2 lg:gap-5 justify-center">

                    <div className="flex flex-col justify-center items-center">

                        <div className="flex flex-col justify-center items-center w-full">
                            <div className="heading text-lg sm:ml-12">SHA-1</div>
                            <div className="flex gap-2 flex-col">
                                <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-2">
                                    <div className="text-red-300">Input</div>
                                    <textarea className="codearea w-80 h-20 sm:w-96 max-[370px]:w-64" value={sha1input} onChange={e => setsha1input(e.target.value)}></textarea>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-2">
                                    <div className="text-red-300 sm:-mt-16">Output</div>
                                    <div className="flex flex-col">
                                        <textarea className="codearea w-80 sm:w-96 h-20 max-[370px]:w-64" value={sha1output} readOnly></textarea>
                                        <div className="flex justify-between items-center">
                                            <button className="convertbtn w-20" onClick={convert1}>Convert</button>
                                            <Clipboard text={sha1output}>
                                                <button onClick={handle1} className="rounded-xl bg-slate-700 h-10 w-10 hover:bg-slate-800">
                                                    {!sha1copied ? <CopyIcon sx={{ color: grey[50] }} /> : <TickIcon sx={{ color: grey[50] }} />}
                                                </button>
                                            </Clipboard>
                                        </div>
                                    </div>
                                </div>
                            </div >
                        </div>

                        <div className="flex flex-col justify-center items-center w-full">
                            <div className="heading text-lg sm:ml-12">SHA-224</div>
                            <div className="flex gap-2 flex-col">
                                <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-2">
                                    <div className="text-red-300">Input</div>
                                    <textarea className="codearea w-80  max-[370px]:w-64 h-20 sm:w-96" value={sha224input} onChange={e => setsha224input(e.target.value)}></textarea>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-2">
                                    <div className="text-red-300 sm:-mt-16">Output</div>
                                    <div className="flex flex-col">
                                        <textarea className="codearea max-[370px]:w-64 w-80 sm:w-96 h-20" value={sha224output} readOnly></textarea>
                                        <div className="flex justify-between items-center">
                                            <button className="convertbtn w-20" onClick={convert224}>Convert</button>
                                            <Clipboard text={sha224output}>
                                                <button onClick={handle224} className="rounded-xl bg-slate-700 h-10 w-10 hover:bg-slate-800">
                                                    {!sha224copied ? <CopyIcon sx={{ color: grey[50] }} /> : <TickIcon sx={{ color: grey[50] }} />}
                                                </button>
                                            </Clipboard>
                                        </div>
                                    </div>
                                </div>
                            </div >
                        </div>

                    </div>

                    <div className="flex flex-col items-center justify-center">

                        <div className="flex flex-col justify-center items-center w-full">
                            <div className="heading text-lg sm:ml-12">SHA-256</div>
                            <div className="flex gap-2 flex-col">
                                <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-2">
                                    <div className="text-red-300">Input</div>
                                    <textarea className="codearea w-80 h-20 sm:w-96 max-[370px]:w-64" value={sha256input} onChange={e => setsha256input(e.target.value)}></textarea>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-2">
                                    <div className="text-red-300 sm:-mt-16">Output</div>
                                    <div className="flex flex-col">
                                        <textarea className="codearea w-80 max-[370px]:w-64 sm:w-96 h-20" value={sha256output} readOnly></textarea>
                                        <div className="flex justify-between items-center">
                                            <button className="convertbtn w-20" onClick={convert256}>Convert</button>
                                            <Clipboard text={sha256output}>
                                                <button onClick={handle256} className="rounded-xl bg-slate-700 h-10 w-10 hover:bg-slate-800">
                                                    {!sha256copied ? <CopyIcon sx={{ color: grey[50] }} /> : <TickIcon sx={{ color: grey[50] }} />}
                                                </button>
                                            </Clipboard>
                                        </div>
                                    </div>
                                </div>
                            </div >
                        </div>

                        <div className="flex flex-col justify-center items-center w-full">
                            <div className="heading text-lg sm:ml-12">SHA-384</div>
                            <div className="flex gap-2 flex-col">
                                <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-2">
                                    <div className="text-red-300">Input</div>
                                    <textarea className="codearea w-80 max-[370px]:w-64 h-20 sm:w-96" value={sha384input} onChange={e => setsha384input(e.target.value)}></textarea>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-2">
                                    <div className="text-red-300 sm:-mt-16">Output</div>
                                    <div className="flex flex-col">
                                        <textarea className="codearea max-[370px]:w-64 w-80 sm:w-96 h-20" value={sha384output} readOnly></textarea>
                                        <div className="flex justify-between items-center">
                                            <button className="convertbtn w-20" onClick={convert384}>Convert</button>
                                            <Clipboard text={sha384output}>
                                                <button onClick={handle384} className="rounded-xl bg-slate-700 h-10 w-10 hover:bg-slate-800">
                                                    {!sha384copied ? <CopyIcon sx={{ color: grey[50] }} /> : <TickIcon sx={{ color: grey[50] }} />}
                                                </button>
                                            </Clipboard>
                                        </div>
                                    </div>
                                </div>
                            </div >
                        </div>


                    </div>

                </div>
                <div className="flex flex-col justify-center items-center w-full">
                    <div className="heading text-lg sm:ml-12">SHA-512</div>
                    <div className="flex gap-2 flex-col">
                        <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-2">
                            <div className="text-red-300">Input</div>
                            <textarea className="codearea max-[370px]:w-64 w-80 h-20 sm:w-96" value={sha512input} onChange={e => setsha512input(e.target.value)}></textarea>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-2">
                            <div className="text-red-300 sm:-mt-16">Output</div>
                            <div className="flex flex-col">
                                <textarea className="codearea max-[370px]:w-64 w-80 sm:w-96 h-20" value={sha512output} readOnly></textarea>
                                <div className="flex justify-between items-center">
                                    <button className="convertbtn w-20" onClick={convert512}>Convert</button>
                                    <Clipboard text={sha512output}>
                                        <button onClick={handle512} className="rounded-xl bg-slate-700 h-10 w-10 hover:bg-slate-800">
                                            {!sha512copied ? <CopyIcon sx={{ color: grey[50] }} /> : <TickIcon sx={{ color: grey[50] }} />}
                                        </button>
                                    </Clipboard>
                                </div>
                            </div>
                        </div>
                    </div >
                </div>
            </div>
        </>
    )
}

export default Sha;