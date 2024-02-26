import React ,{useState} from 'react'

function CompoundInterest(){
    const [money , setmoney] = useState('Indian Rupee');
    const [principal , setprincipal] = useState(0);
    const [interest , setinterest] = useState(0);
    const [ans , setans] = useState(0);
    const [years , setyears] = useState(0);
    const [months , setmonths] = useState(0);
    const [period , setperiod] = useState('yearly');
    
    let symbol = '₹';
    if(money==="usd") symbol = '$';
    if(money==="inr") symbol = '₹';
    if(money==="euro") symbol = '€';
    if(money==="bps") symbol = '£';
    if(money==="yen") symbol = '¥';
    if(money==="swiss") symbol = '₣';
    if(money==="chinese") symbol = '¥';
    if(money==="swedish") symbol = 'kr';
    if(money==="dirhams") symbol = 'د.إ';

    let n = years + months/12;
    console.log(n);
    if(period==="semi") n = 2;
    if(period==="quarterly") n = 4;
    if(period==="monthly") n = 12;

    function Calculateamount(){
        let amount = 0;
        if(period==="yearly"){
            amount = principal * (1 + (interest/100)) * (1 + (months/12 * interest/100));
            setans(amount.toFixed(2));
        }
        else if(period==="semi"){
            amount = principal * (1 + (interest/100)**(2*years)) * (1 + (months/6 * interest/100));
            setans(amount.toFixed(2));
        }
        else if(period==="quarterly"){
            amount = principal * (1 + (interest/100)**(4*years)) * (1 + (months/4 * interest/100));
            setans(amount.toFixed(2));
        }
        else{
            amount = principal * (1 + (interest/100)**(12*years)) * (1 + (months * interest/100));
            setans(amount.toFixed(2));
        }
    }
    return(
        <>
        <div>
            <div className="heading">Compound Interest</div>
            <div className="flex flex-row m-20 gap-10">
                <div className="flex flex-col text-lg text-red-300 gap-6 flex-start">
                    <div>Enter the currency</div>
                    <div>Enter the Principal Amount</div>
                    <div>Enter the Interest Rate in % (Annually)</div>
                    <div>Enter the period interest rate is compounded by</div>
                    <div>Select the Tenure</div>
            <button className="convertbtn" onClick={Calculateamount}>Calculate</button>
                </div>
                <div className="flex flex-col gap-8 flex-start">
                    <select className="codearea rounded-md w-25 h-6 p-0" value={money} onChange={(e) => setmoney(e.target.value)}>
                        <option value="inr">Indian Rupee</option>
                        <option value="usd">United States Dollar</option>
                        <option value="euro">Euro</option>
                        <option value="yen">Japanese Yen</option>
                        <option value="bps">British Pound Sterling</option>
                        <option value="swiss">Swiss Franc</option>
                        <option value="chinese">Chinese Yuan Renminbi</option>
                        <option value="swedish">Swedish Krona</option>
                        <option value="dirhams">United Arab Emirates Dirham</option>
                    </select>
                    <input type="number" className="codearea w-25 h-5 rounded-md" placeholder="0" onChange={e => setprincipal(e.target.value)}/>
                    <input type="number" className="codearea w-25 h-5 rounded-md" placeholder="0" onChange={e => setinterest(e.target.value)}/>
                    <select className="codearea rounded-md w-25 h-6 p-0" value={period} onChange={e => setperiod(e.target.value)}>
                        <option value="yearly">Yearly</option>
                        <option value="semi">Semi-annually</option>
                        <option value="quarterly">Quarterly</option>
                        <option value="monthly">Monthly</option>
                    </select>
                    <div className="flex flex-row gap-8 w-25">
                        <div className="fex flex-col">
                            <input type="number" className="codearea rounded-md h-6 w-full" onChange={e => setyears(e.target.value)} placeholder="0"/>
                            <div className="text-slate-200 text-xs">Years</div>
                        </div>
                        <div className="flex flex-col">
                            <input type="number" className="codearea rounded-md h-6 w-full" onChange={e => setmonths(e.target.value)} placeholder="0"/>
                            <div className="text-slate-200 text-xs">Months</div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="absolute bottom-0 right-0 flex items-center px-20 my-10 gap-10">
            <div className="text-red-300 text-2xl">Future investment value : </div>
            <div className="text-8xl text-slate-200 font-bold"><span className="text-xl text-slate-200">{symbol}</span>{ans}</div>
        </div>
        </>
    )
}

export default CompoundInterest;