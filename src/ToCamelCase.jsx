import {React , useState} from 'react'

function ToCamelCase(){
    const [text , settext] = useState("");
    const [converted , setconverted] = useState("");
    const [space , setspace] = useState(true);
    const [capital , setcapital] = useState(true);
    function converttext(){
        let ans = "";
        let i = 0;
        
        while(text[i]===" " || text[i]==="\n"){
            i++;
        }
        if(capital){
            let c = text[i].toUpperCase();
            ans += c;
        }
        else{
            let c = text[i].toLowerCase();
            ans += c;
        }
        // if(space){
        //     let convert = text;
        //     let flag = false;
        //     for(let j=i+1;i<convert.length;j++){
        //         if(convert[j]===" " || convert[j]==="\n"){
        //             flag = false;
        //             ans += convert[j];
        //         }
        //         else if(convert[j-1]===" " || convert[j-1]==="\n"){
        //             let character = convert[j];
        //             ans += character.toUpperCase();
        //         }
        //         // else{
        //         //     let character = convert[j];
        //         //     ans += character.toLowerCase();
        //         // }
        //     }
        // }
        // else{
        //     let convert = text;
        //     for(let k=i+1;k<convert.length;k++){
        //         if(convert[k-1]===" " || convert[k-1]==="\n"){
        //             convert[k] = convert[k].toUpperCase();
        //             ans += convert[k];
        //         }
        //         else{
        //             ans += convert[k].toLowerCase();
        //         }
        //     }
        // }
        setconverted(ans);
            // const words = text.split(" ");
            // for(let i=0; i<words.length; i++){
            //     convert += words[i].slice(0,1).toUpperCase() + words[i].slice(1) + " ";
            // }
            // convert.slice(0,-1);
            // setconverted(convert);
        // else{
        //     let convert = "";
        //     const words = text.split(" ");
        //     for(let i=0; i<words.length; i++){
        //         convert += words[i].slice(0,1).toUpperCase() + words[i].slice(1);
        //     }
        //     convert.slice(0,-1);
        //     setconverted(convert);
        // }
        // if(!capital){
        //     let copy = converted;
        //     let first = copy.slice(0,1).toLowerCase();
        //     first += copy.slice(1);
        //     setconverted(first);
        // }
    }
    return(
        <>
        <h2 className="heading">To Camel Case</h2>
        <div className="flex gap-10 justify-center w-full">
            <div className="info flex flex-col items-center justify-center">
              <h3 className="stateheading">Enter text for conversion here!</h3>
              <textarea className="codearea" value={text} onChange={(e) => settext(e.target.value)}></textarea>
              <label  className="text-red-300 text-sm my-1 items-center">
              <input type="checkbox" checked={space} onChange={(e) => setspace(e.target.checked)}/>
              <span className="mx-3">Preserve white spaces</span>
              </label>
              <label  className="text-red-300 text-sm my-1 items-center">
              <input type="checkbox" checked={capital} onChange={(e) => setcapital(e.target.checked)}/>
              <span className="mx-3">Keep first letter capital</span>
              </label>
              <button className="convertbtn" onClick={converttext}>Convert</button>
            </div>
            <div className="info">
              <h3 className="stateheading">Camelcased text!</h3>
              <textarea className="codearea" value={converted} readOnly></textarea>
            </div>
        </div>
        
        </>
    )
}

export default ToCamelCase;