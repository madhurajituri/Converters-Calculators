import { React, useState } from "react";
import YAML from 'json2yaml';

function Yaml() {

    const [json , setjson] = useState("");
    const [yaml , setyaml] = useState("");

    function convert(){
        let x = YAML.stringify(JSON.parse(json));
        setyaml(x);
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
                </div>
            </div>
        </div>
    )
}

export default Yaml;