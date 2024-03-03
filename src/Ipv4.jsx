import {React , useState} from 'react'
import { calculate, calculateCIDRPrefix, calculateSubnetMask } from '/node_modules/.vite/deps/ip-subnet-calculator.js?v=27febd2a';
function Ipv4() {

    const [start , setstart] = useState("");
    const [end , setend] = useState("");

    function subnet(){
        console.log(calculate(start,end));
    }

    return (
        <>
            <div>
                <div className="heading">IP Subnet Calculator</div>
                <div className="flex m-10 justify-center gap-10">
                    <div className="flex flex-col items-center justify center gap-3">
                        <div className="stateheading">Enter starting IP address</div>
                        <textarea className="codearea w-26 h-10" value={start} onChange={e=>setstart(e.target.value)}></textarea>
                    </div>
                    <div className="flex flex-col items-center justify center gap-3">
                        <div className="stateheading">Enter ending IP address</div>
                        <textarea className="codearea w-26 h-10" value={end} onChange={e=>setend(e.target.value)}></textarea>
                    </div>
                </div>
                <button className="convertbtn w-40" onClick={subnet}>Calculate subnets</button>
            </div>
        </>
    )
}

export default Ipv4;