import { React, useState } from "react";
import YAML from 'json2yaml';
import Clipboard from "react-copy-to-clipboard";
import CopyIcon from '@mui/icons-material/ContentCopy';
import TickIcon from '@mui/icons-material/Done';
import { grey } from '@mui/material/colors';

function Yaml() {

    const [json , setjson] = useState("");
    const [yaml , setyaml] = useState("");
    const [copied , setcopied] = useState(false);

    function convert(){
        let x = YAML.stringify(JSON.parse(json));
        setyaml(x);
    }

    function handlecopy() {
        setcopied(true);
        setTimeout(() => {
            setcopied(false);
        }, 800);
    }

    return (
        <div>
            <div className="heading">JSON to YAML</div>
            <div className="m-10 gap-5 justify-center flex">
                <div className="items-center gap-2 flex flex-col">
                    <div className="stateheading">Input JSON</div>
                    <textarea className="codearea w-[700px]" value={json} onChange={e => setjson(e.target.value)}></textarea>
                    <button className="convertbtn w-40" onClick={convert}>Convert</button>
                </div>
                <div className="items-center gap-2 flex flex-col">
                    <div className="stateheading">Output YAML</div>
                    <textarea className="codearea w-[700px]" value={yaml} readOnly></textarea>
                    <Clipboard text={yaml}>
                        <button onClick={handlecopy} className="rounded-xl mt-2 bg-slate-700 h-10 w-10 hover:bg-slate-800">
                            {!copied ? <CopyIcon sx={{ color: grey[50] }} /> : <TickIcon sx={{ color: grey[50] }} />}
                        </button>
                    </Clipboard>
                </div>
            </div>
        </div>
    )
}

export default Yaml;