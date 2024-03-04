import { React, useState } from 'react'
import Clipboard from "react-copy-to-clipboard";
import CopyIcon from '@mui/icons-material/ContentCopy';
import TickIcon from '@mui/icons-material/Done';
import { grey } from '@mui/material/colors';

function ToCamelCase() {
    const [text, settext] = useState("");
    const [converted, setconverted] = useState("");
    const [space, setspace] = useState(true);
    const [capital, setcapital] = useState(true);
    const [copied , setcopied] = useState(false);
    function converttext() {
        let ans = "";
        let i = 0;
        let copy = text;
        while (copy[i] === " " || copy[i] === "\n") {
            i++;
        }
        copy = copy.slice(i);
        let j = copy.length - 1;
        while (copy[j] === " " || copy[j] === "\n") {
            j--;
        }
        copy = copy.slice(0, j + 1);
        console.log(copy);
        if (capital) {
            let c = copy[0].toUpperCase();
            ans += c;
        }
        else {
            let c = copy[0].toLowerCase();
            ans += c;
        }
        if (space) {
            for (let i = 1; i < copy.length; i++) {
                if (copy[i] === " " || copy[i] === "\n") {
                    ans += copy[i];
                }
                else if (copy[i] !== " " && copy[i] !== "\n" && (copy[i - 1] === " " || copy[i - 1] === "\n")) {
                    ans += copy[i].toUpperCase();
                }
                else {
                    ans += copy[i].toLowerCase();
                }
            }
        }
        else {
            for (let i = 1; i < copy.length; i++) {
                if (copy[i] !== " " && copy[i] !== "\n" && (copy[i - 1] === " " || copy[i - 1] === "\n")) {
                    ans += copy[i].toUpperCase();
                }
                else if (copy[i] === " " || copy[i] === "\n") {
                    continue;
                }
                else {
                    ans += copy[i].toLowerCase();
                }
            }
        }
        setconverted(ans);
    }

    function handlecopy() {
        setcopied(true);
        setTimeout(() => {
            setcopied(false);
        }, 800);
    }


    return (
        <>
            <h2 className="heading">To Camel Case</h2>
            <div className="flex gap-10 justify-center w-full">
                <div className="info flex flex-col items-center justify-center">
                    <h3 className="stateheading">Enter text for conversion here!</h3>
                    <textarea className="codearea" value={text} onChange={(e) => settext(e.target.value)}></textarea>
                    <label className="text-red-300 text-sm my-1 items-center">
                        <input type="checkbox" checked={space} onChange={(e) => setspace(e.target.checked)} />
                        <span className="mx-3">Preserve white spaces</span>
                    </label>
                    <label className="text-red-300 text-sm my-1 items-center">
                        <input type="checkbox" checked={capital} onChange={(e) => setcapital(e.target.checked)} />
                        <span className="mx-3">Keep first letter capital</span>
                    </label>
                    <button className="convertbtn" onClick={converttext}>Convert</button>
                </div>
                <div className="info flex flex-col items-center">
                    <h3 className="stateheading">Camelcased text!</h3>
                    <textarea className="codearea" value={converted} readOnly></textarea>
                    <Clipboard text={converted}>
                        <button onClick={handlecopy} className="rounded-xl mt-2 bg-slate-700 h-10 w-10 hover:bg-slate-800">
                            {!copied ? <CopyIcon sx={{ color: grey[50] }} /> : <TickIcon sx={{ color: grey[50] }} />}
                        </button>
                    </Clipboard>
                </div>
            </div>

        </>
    )
}

export default ToCamelCase;