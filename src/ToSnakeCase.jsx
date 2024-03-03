import { React, useState } from 'react'

function ToSnakeCase() {
    const [text, settext] = useState("");
    const [converted, setconverted] = useState("");
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
    return (
        <>
            <div>

                <h2 className="heading">To Snake Case</h2>
                <div className="flex gap-10 justify-center w-full">
                    <div className="info flex flex-col items-center justify-center">
                        <h3 className="stateheading">Enter text for conversion here!</h3>
                        <textarea className="codearea" value={text} onChange={(e) => settext(e.target.value)}></textarea>
                        <button className="convertbtn" onClick={converttext}>Convert</button>
                    </div>
                    <div className="info">
                        <h3 className="stateheading">Snakecased text!</h3>
                        <textarea className="codearea" value={converted} readOnly></textarea>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ToSnakeCase;