import React, { useState } from 'react'

function CompoundInterest() {
    const [money, setmoney] = useState('Indian Rupee');
    const [principal, setprincipal] = useState(0);
    const [interest, setinterest] = useState(0);
    const [ans, setans] = useState(0);
    const [years, setyears] = useState(0);
    const [months, setmonths] = useState(0);
    const [weeks, setweeks] = useState(0);
    const [days, setdays] = useState(0);
    const [period, setperiod] = useState('yearly');

    let symbol = '₹';
    if (money === "usd") symbol = '$';
    if (money === "inr") symbol = '₹';
    if (money === "euro") symbol = '€';
    if (money === "bps") symbol = '£';
    if (money === "yen") symbol = '¥';
    if (money === "swiss") symbol = '₣';
    if (money === "chinese") symbol = '¥';
    if (money === "swedish") symbol = 'kr';
    if (money === "dirhams") symbol = 'د.إ';

    let n = 0;
    if (period === "yearly") n = 1;
    if (period === "semi") n = 2;
    if (period === "quarterly") n = 4;
    if (period === "monthly") n = 12;
    if (period === "weekly") n = 48;
    if (period === "daily") n = 365;

    function Calculateamount() {
        let amount = 0;
        let t = Number(months) / 12 + Number(years) + Number(weeks / 52) + Number(days / 365);
        let r = Number(interest) / 100;
        amount = Number(principal) * ((1 + (r / n)) ** (n * t));
        setans(amount.toFixed(2));
    }
    return (
        <>
            <div>
                <div className="heading">Compound Interest</div>

                <div className="flex flex-col text-red-300 text-xl my-20 mx-16 xl:mx-72 lg:mx-40 gap-10 justify-center items-center">

                    <div className="flex flex-col sm:flex-row sm:w-full sm:justify-between sm:gap-4">
                        <div className='w-72'>Enter the currency</div>
                        <select className="codearea max-[460px]:w-72 w-96 rounded-md h-8 p-0" value={money} onChange={(e) => setmoney(e.target.value)}>
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
                    </div>
                    <div className="flex flex-col sm:flex-row sm:w-full sm:justify-between sm:gap-4">
                        <div className='w-72'>Enter the Principal Amount</div>
                        <input type="number" className="codearea max-[460px]:w-72 w-96 h-8 rounded-md" placeholder="0" onChange={e => setprincipal(e.target.value)} />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:w-full sm:justify-between sm:gap-4">
                        <div className='w-72'>Enter the Interest Rate in % (Annually)</div>
                        <input type="number" className="codearea max-[460px]:w-72 w-96 h-8 rounded-md" placeholder="0" onChange={e => setinterest(e.target.value)} />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:w-full sm:justify-between sm:gap-4">
                        <div className='w-72'>Enter the period interest rate is compounded by</div>
                        <select className="codearea w-96 h-8 max-[460px]:w-72 rounded-md p-0" value={period} onChange={e => setperiod(e.target.value)}>
                            <option value="yearly">Yearly</option>
                            <option value="semi">Semi-annually</option>
                            <option value="quarterly">Quarterly</option>
                            <option value="monthly">Monthly</option>
                            <option value="weekly">Weekly</option>
                            <option value="daily">Daily</option>
                        </select>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:w-full sm:justify-between sm:gap-4">
                        <div className='w-72'>Select the Tenure</div>
                        <div className="flex flex-row gap-2 w-96 max-[460px]:w-72">
                            <div className="flex flex-col">
                                <input type="number" className="codearea rounded-md h-8 w-full" onChange={e => setyears(e.target.value)} placeholder="0" />
                                <div className="text-slate-200 text-xs">Years</div>
                            </div>
                            <div className="flex flex-col">
                                <input type="number" className="codearea rounded-md h-8 w-full" onChange={e => setmonths(e.target.value)} placeholder="0" />
                                <div className="text-slate-200 text-sm">Months</div>
                            </div>
                            <div className="flex flex-col">
                                <input type="number" className="codearea rounded-md h-8 w-full" onChange={e => setweeks(e.target.value)} placeholder="0" />
                                <div className="text-slate-200 text-xs">Weeks</div>
                            </div>
                            <div className="flex flex-col">
                                <input type="number" className="codearea rounded-md h-8 w-full" onChange={e => setdays(e.target.value)} placeholder="0" />
                                <div className="text-slate-200 text-xs">Days</div>
                            </div>
                        </div>
                    </div>
                    <button className="convertbtn w-36" onClick={Calculateamount}>Calculate</button>

                </div>

            </div>
            <div className="flex flex-col lg:flex-row my-10 gap-4 items-centre justify-center">
                <div className="text-red-300 text-2xl text-center">Future investment value :</div>
                <div className="text-4xl md:text-8xl text-slate-200 font-bold text-center">
                    <span className="text-lg text-slate-200">{symbol}</span>
                    10000000.00
                </div>

            </div>
        </>
    )
}

export default CompoundInterest;