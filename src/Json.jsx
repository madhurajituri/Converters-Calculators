import { React, useState } from "react";
import YAML from 'js-yaml';

function Json() {

    const [json, setjson] = useState("");
    const [yaml, setyaml] = useState("");

    function convert() {
        const yamlObject = YAML.load(yaml);
        const x = JSON.stringify(yamlObject, null, 2);
        setjson(x);
    }

    return (
        <div>
            <div className="heading">YAML to JSON</div>
            <div className="m-10 gap-5 justify-center flex">
                <div className="items-center gap-2 flex flex-col">
                    <div className="stateheading">Input YAML</div>
                    <textarea className="codearea w-[700px]" value={yaml} onChange={e => setyaml(e.target.value)}></textarea>
                    <button className="convertbtn w-40" onClick={convert}>Convert</button>
                </div>
                <div className="items-center gap-2 flex flex-col">
                    <div className="stateheading">Output JSON</div>
                    <textarea className="codearea w-[700px]" value={json} readOnly></textarea>
                </div>
            </div>
        </div>
    )
}

export default Json;