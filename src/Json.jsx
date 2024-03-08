import { React, useState } from "react";
import YAML from 'js-yaml';
import Clipboard from "react-copy-to-clipboard";
import CopyIcon from '@mui/icons-material/ContentCopy';
import TickIcon from '@mui/icons-material/Done';
import { grey } from '@mui/material/colors';

function Json() {

    const [json, setjson] = useState("");
    const [yaml, setyaml] = useState("");
    const [textcopied, settextcopied] = useState(false);

    function convert() {
        const yamlObject = YAML.load(yaml);
        const x = JSON.stringify(yamlObject, null, 2);
        setjson(x);
    }

    function handlecopy() {
        settextcopied(true);
        setTimeout(() => {
            settextcopied(false);
        }, 800);
    }

    return (
        <div>
            <div className="heading">YAML to JSON</div>
            <div className="m-10 gap-5 justify-center md:flex-row flex flex-col">
                <div className="items-center gap-2 flex flex-col w-full">
                    <div className="stateheading">Input YAML</div>
                    <textarea className="codearea" value={yaml} onChange={e => setyaml(e.target.value)}></textarea>
                    <button className="convertbtn" onClick={convert}>Convert</button>
                </div>
                <div className="items-center gap-2 flex flex-col w-full">
                    <div className="stateheading">Output JSON</div>
                    <textarea className="codearea" value={json} readOnly>
                    </textarea>
                    <Clipboard text={json}>
                        <button onClick={handlecopy} className="rounded-xl bg-slate-700 h-10 w-10 hover:bg-slate-800">
                            {!textcopied? <CopyIcon sx={{ color: grey[50] }} /> : <TickIcon sx={{color:grey[50]}}/>}
                        </button>
                    </Clipboard>
                </div>
            </div>
        </div>
    )
}

export default Json;