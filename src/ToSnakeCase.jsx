import { React, useState } from 'react'
import Clipboard from "react-copy-to-clipboard";
import CopyIcon from '@mui/icons-material/ContentCopy';
import TickIcon from '@mui/icons-material/Done';
import { grey } from '@mui/material/colors';

function ToSnakeCase() {
    const [text, settext] = useState("");
    const [converted, setconverted] = useState("");
    const [copied , setcopied] = useState(false);
    function converttext() {
        let copy = text;
        console.log(copy);
        let j = 0;
        while (copy[j] === " " || copy[j] === "\n") {
            j++;
        }
        copy = copy.slice(j);
        for (let i = copy.length - 1; i >= 0; i--) {
            if (copy[i] === " " || copy[i] === "\n") {
                copy = copy.slice(0, i);
            }
            else {
                break;
            }
        }
        console.log(copy);
        const words = copy.split(/\s+/);
        let ans = "";
        console.log(words);
        for (let i = 0; i < words.length; i++) {
            ans += words[i].toLowerCase() + "_";
        }
        ans = ans.slice(0, -1);
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
            <div>

                <h2 className="heading">To Snake Case</h2>
                <div className="flex flex-col md:flex-row gap-10 justify-center m-10">
                    <div className="info flex flex-col items-center justify-center w-full">
                        <h3 className="stateheading">Enter text for conversion here!</h3>
                        <textarea className="codearea" value={text} onChange={(e) => settext(e.target.value)}></textarea>
                        <button className="convertbtn" onClick={converttext}>Convert</button>
                    </div>
                    <div className="info flex flex-col items-center w-full">
                        <h3 className="stateheading">Snakecased text!</h3>
                        <textarea className="codearea" value={converted} readOnly></textarea>
                        <Clipboard text={converted}>
                            <button onClick={handlecopy} className="rounded-xl mt-2 bg-slate-700 h-10 w-10 hover:bg-slate-800">
                                {!copied ? <CopyIcon sx={{ color: grey[50] }} /> : <TickIcon sx={{ color: grey[50] }} />}
                            </button>
                        </Clipboard>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ToSnakeCase;