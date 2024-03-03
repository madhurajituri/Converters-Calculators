import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <div className='footer flex justify-between gap-10'>
            <div className="flex flex-col z-2 gap-10">
                <div>
                    <div className="text-white font-mono text-xl">Convertify<span className="text-red-500 font-mono text-xl"> %</span></div>
                    <div className="text-slate-300 text-sm">Copyright © 2024 developed by Madhura Jituri. All rights reserved. </div>
                </div>
                <div className='gap-4 flex flex-col'>
                    <div className='flex gap-4 z-10'>
                        <GitHubIcon color="primary"/>
                        <a href="https://github.com/madhurajituri/Converters-Calculators" className="text-slate-300 text-sm">Github</a>
                    </div>
                    <div className='flex gap-4'>
                        <PhoneIcon color="primary"/>
                        <div className="text-slate-300 text-sm">+91 9958560136</div>
                    </div>
                </div>
            </div>
            <div className='flex gap-20'>
                <div className="flex flex-col z-2">
                    <div className="text-slate-300 text-lg">Calculators provided</div>
                    <Link to="/CompoundInterest" className="text-slate-300 text-sm">Compound Interest</Link>
                    <Link to="/Ipv4" className="text-slate-300 text-sm">IP Subnet (v4/v6)</Link>
                </div>
                <div className="flex flex-col z-2">
                    <div className="text-slate-300 text-lg">Convertors provided</div>
                    <Link to="/ToUppercase" className="text-slate-300 text-sm">Uppercase</Link>
                    <Link to="/ToLowercase" className="text-slate-300 text-sm">Lowercase</Link>
                    <Link to="/ToCamelcase" className="text-slate-300 text-sm">Camelcase</Link>
                    <Link to="/ToSnakecase" className="text-slate-300 text-sm">Snakecase</Link>
                    <Link to="/Base64" className="text-slate-300 text-sm">Base 64</Link>
                    <Link to="/JsonBeautifier" className="text-slate-300 text-sm">Json Beautifier</Link>
                    <Link to="/Sha" className="text-slate-300 text-sm">Secure Hash Algorithm</Link>
                    <Link to="/Yaml" className="text-slate-300 text-sm">Json to Yaml</Link>
                    <Link to="/Json" className="text-slate-300 text-sm">Yaml to Json</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;