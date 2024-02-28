import { React, useState } from "react";
import convertor from 'js-yaml';
// import fs from 'fs';

function Yaml() {

    const [json , setjson] = useState("");
    const [yaml , setyaml] = useState("");

    function convert(){
//         const doc = yaml.load(fs.readFileSync('/home/ixti/example.yml', 'utf8'));
//   console.log(doc);
        // const ans = yaml.toString(json);
        // console.log(ans);
        // setyaml(ans);
    }

    return (
        <div>
            <div className="heading">JSON to YAML</div>
            <div className="m-10 gap-5 justify-center flex">
                <div className="items-center gap-2 flex flex-col">
                    <textarea className="codearea w-[700px]" value={json} onChange={e => setjson(e.target.value)}></textarea>
                    <button className="convertbtn w-40" onClick={convert}>Convert</button>
                </div>
                <div>
                    <textarea className="codearea w-[700px]" value={yaml} readOnly></textarea>
                </div>
            </div>
        </div>
    )
}

export default Yaml;