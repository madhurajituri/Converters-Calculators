import { React, useRef, useState } from 'react';
import { json_beautifier } from 'csvjson-json_beautifier';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import UploadIcon from '@mui/icons-material/FileUploadOutlined';


function JsonBeautifier() {

    const [indent, setindent] = useState(4);
    const [quotes, setquotes] = useState("double");
    const [deep, setdeep] = useState(1);
    const [inline, setinline] = useState(false);
    const [keys, setkeys] = useState(false);
    const [numbers, setnumbers] = useState(false);
    const [minify, setminify] = useState(false);
    const [selectedfile, setselectedfile] = useState(null);
    const [content, setcontent] = useState("");
    const [beautified, setbeautified] = useState("");

    const file = useRef();

    function beautification() {
        if(indent==="1" || indent==="2" || indent==="3" || indent==="4" || indent==="8"){
            const x = json_beautifier(JSON.parse(content), { space: Number(indent), quoteType: quotes, dropQuotesOnKeys: keys, dropQuotesOnNumbers: numbers, inlineShortArrays: inline, inlineShortArraysDepth: Number(deep) , minify: minify });
            setbeautified(x);
        }
        else{
            const x = json_beautifier(JSON.parse(content), { space: indent, quoteType: quotes, dropQuotesOnKeys: keys, dropQuotesOnNumbers: numbers, inlineShortArrays: inline, inlineShortArraysDepth: Number(deep) , minify: minify });
            setbeautified(x);
        }
    }

    function handleChangeFile(event) {
        setselectedfile(event.target.files[0]);
        const file = event.target.files[0];
        if (file) {
            const fileReader = new FileReader();
            fileReader.onloadend = () => {
                setcontent(fileReader.result);
            };
            fileReader.readAsText(file);
        }
    };

    function onchoosefile() {
        file.current.click();
    }

    function ondelete() {
        setselectedfile(null);
        setcontent("");
    }

    return (
        <div>

            <div className="heading">JSON Beautifier</div>
            <div className="flex justify-center stateheading text-xl animate-pulse">*Either paste input or upload the file</div>
            <div className="flex m-10 mt-5 mb-10 gap-10 justify-center">
                <div className="flex flex-col items-center">
                    <div className="stateheading">Input</div>
                    <textarea className="codearea" value={content} onChange={e => setcontent(e.target.value)}></textarea>
                    <button className="convertbtn" onClick={beautification}>Beautify</button>
                </div>
                <div className="flex flex-col items-center mx-5 mt-6">
                    <div className="flex flex-col justify-center items-center mb-8">
                        <div className="p-3 flex flex-col items-center justify-center h-50 rounded-2xl shadow-md bg-slate-300 border-dashed border-slate-800">Upload file
                            <input type="file" ref={file} style={{ display: "none" }} onChange={e => { handleChangeFile(e) }} />
                            <button className="convertbtn w-10 m-0 p-0 bg-red-200 hover:bg-red-300" onClick={onchoosefile}><UploadIcon /></button>
                            {selectedfile && <div className="flex justify-between word-break-break-all items-center gap-2 mx-1 mt-2 bg-slate-400 rounded-xl p-1">
                                <p className="text-sm">{selectedfile.name}</p>
                                <button className="w-7 h-7 rounded-md bg-blue-400 hover:bg-blue-500 items-center justify-center text-white" onClick={ondelete}><DeleteIcon /></button>
                            </div>}
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center mb-8">
                        <div className="stateheading text-slate-200 m-0">Indent</div>
                        <select className="selects" value={indent} onChange={e => setindent(e.target.value)}>
                            <option value=".">.</option>
                            <option value="..">..</option>
                            <option value="1">1 space</option>
                            <option value="2">2 space</option>
                            <option value="3">3 space</option>
                            <option value="4">4 space</option>
                            <option value="8">Tab</option>
                        </select>
                    </div>
                    <div className="flex flex-col justify-center items-center mb-8">
                        <div className="stateheading text-slate-200 m-0">Quotes</div>
                        <select className="selects" value={quotes} onChange={e => setquotes(e.target.value)}>
                            <option value="single">Single</option>
                            <option value="double">Double</option>
                        </select>
                    </div>
                    <div className="flex flex-col justify-center items-center mb-8">
                        <div className="stateheading text-slate-200"><label><input type="checkbox" className="mx-2 accent-red-300" value={inline} onChange={e => setinline(e.target.checked)} />Inline short-arrays</label></div>
                        <select className="selects w-28" value={deep} onChange={e => setdeep(e.target.value)}>
                            <option value="1">1 level deep</option>
                            <option value="2">2 level deep</option>
                            <option value="3">3 level deep</option>
                            <option value="4">4 level deep</option>
                            <option value="5">5 level deep</option>
                        </select>
                    </div>
                    <div className="flex flex-col justify-center mx-0">
                        <div className="stateheading text-slate-200 m-0">No quotes on:</div>
                        <div className="stateheading text-red-200 m-0"><label><input type="checkbox" className="mx-2 accent-red-300" value={keys} onChange={e => setkeys(e.target.checked)} />Keys</label></div>
                        <div className="stateheading text-red-200 m-0"><label><input type="checkbox" className="mx-2 accent-red-300" value={numbers} onChange={e => setnumbers(e.target.checked)} />Numbers</label></div>
                        <div className="stateheading text-red-200 m-0"><label><input type="checkbox" className="mx-2 accent-red-300" value={minify} onChange={e => setminify(e.target.checked)} />Minify</label></div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="stateheading">Output</div>
                    <textarea className="codearea" value={beautified} readOnly></textarea>
                </div>
            </div>

        </div>
    )
}

export default JsonBeautifier;