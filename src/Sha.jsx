import { useState, React } from "react";
import sha1 from 'crypto-js/sha1';
import sha224 from 'crypto-js/sha224';
import sha256 from 'crypto-js/sha256';
import sha384 from 'crypto-js/sha384';
import sha512 from 'crypto-js/sha512';
// import jsSHA from 'js-sha256';
// import sha224 from 'sha224';
// import sha224 from 'sha224';
// import sha224 from 'sha.js/sha224';
// import { Buffer } from 'safe-buffer';


function Sha() {

    const [sha1input, setsha1input] = useState("");
    const [sha1output, setsha1output] = useState("");
    const [sha224input, setsha224input] = useState("");
    const [sha224output, setsha224output] = useState("");
    const [sha256input, setsha256input] = useState("");
    const [sha256output, setsha256output] = useState("");
    const [sha384input, setsha384input] = useState("");
    const [sha384output, setsha384output] = useState("");
    const [sha512input, setsha512input] = useState("");
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

    function convert384(){
        let ans = sha384(sha384input);
        setsha384output(ans);
    }

    function convert512(){
        let ans = sha512(sha512input);
        setsha512output(ans);
    }

    return (
        <>
            <div className="flex flex-row m-10 gap-5 items-center justify-center">

                <div className="flex flex-col items-center justify-center">

                    <div className="flex flex-col mx-10 items-center">
                        <div className="heading text-lg ml-12">SHA-1</div>
                        <div className="flex gap-5">
                            <div className="flex flex-col items-center gap-8">
                                <div className="text-red-300">Input</div>
                                <div className="text-red-300">Output</div>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <textarea className="codearea w-50 h-20" value={sha1input} onChange={e => setsha1input(e.target.value)}></textarea>
                                <textarea className="codearea w-50 h-20" value={sha1output} readOnly></textarea>
                            </div>
                        </div>
                        <button className="convertbtn ml-12 w-20" onClick={convert1}>Convert</button>
                    </div>

                    <div className="flex flex-col mx-10 items-center">
                        <div className="heading text-lg ml-12">SHA-224</div>
                        <div className="flex gap-5">
                            <div className="flex flex-col items-center gap-8">
                                <div className="text-red-300">Input</div>
                                <div className="text-red-300">Output</div>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <textarea className="codearea w-50 h-20" value={sha224input} onChange={e => setsha224input(e.target.value)}></textarea>
                                <textarea className="codearea w-50 h-20" value={sha224output} readOnly></textarea>
                            </div>
                        </div>
                        <button className="convertbtn ml-12 w-20" onClick={convert224}>Convert</button>
                    </div>

                </div>

                <div className="flex flex-col items-center justify-center">

                    <div className="flex flex-col mx-10 items-center">
                        <div className="heading text-lg ml-12">SHA-256</div>
                        <div className="flex gap-5">
                            <div className="flex flex-col items-center gap-8">
                                <div className="text-red-300">Input</div>
                                <div className="text-red-300">Output</div>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <textarea className="codearea w-50 h-20" value={sha256input} onChange={e => setsha256input(e.target.value)}></textarea>
                                <textarea className="codearea w-50 h-20" value={sha256output} readOnly></textarea>
                            </div>
                        </div>
                        <button className="convertbtn ml-12 w-20" onClick={convert256}>Convert</button>
                    </div>

                    <div className="flex flex-col mx-10 items-center">
                        <div className="heading text-lg ml-12">SHA-384</div>
                        <div className="flex gap-5">
                            <div className="flex flex-col items-center gap-8">
                                <div className="text-red-300">Input</div>
                                <div className="text-red-300">Output</div>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <textarea className="codearea w-50 h-20" value={sha384input} onChange={e => setsha384input(e.target.value)}></textarea>
                                <textarea className="codearea w-50 h-20" value={sha384output} readOnly></textarea>
                            </div>
                        </div>
                        <button className="convertbtn ml-12 w-20" onClick={convert384}>Convert</button>
                    </div>


                </div>

            </div>
                    <div className="flex flex-col mx-10 -my-10 items-center">
                        <div className="heading text-lg ml-12">SHA-512</div>
                        <div className="flex gap-5">
                            <div className="flex flex-col items-center gap-8">
                                <div className="text-red-300">Input</div>
                                <div className="text-red-300">Output</div>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                            <textarea className="codearea w-50 h-20" value={sha512input} onChange={e => setsha512input(e.target.value)}></textarea>
                                <textarea className="codearea w-50 h-20" value={sha512output} readOnly></textarea>
                            </div>
                        </div>
                        <button className="convertbtn ml-12 w-20" onClick={convert512}>Convert</button>
                    </div>
        </>
    )
}

export default Sha;