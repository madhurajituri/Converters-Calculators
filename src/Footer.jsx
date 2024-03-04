import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer flex justify-between gap-10 max-[375px]:flex-col'>
            <div className="flex flex-col z-2 gap-10">
                <div>
                    <div className="text-white font-mono text-sm my-2 sm:text-xl">Convertify<span className="text-red-500 my-2 font-mono text-sm sm:text-xl"> %</span></div>
                    <div className="text-slate-300 text-xs sm:text-sm">Copyright © 2024 developed by Madhura Jituri. All rights reserved. </div>
                </div>
                <div className='gap-4 flex flex-col'>
                    <div className='flex gap-4 z-10'>
                        <GitHubIcon color="primary" fontSize='small' />
                        <a href="https://github.com/madhurajituri/Converters-Calculators" className="text-slate-300 text-xs sm:text-sm">Github</a>
                    </div>
                    <div className='flex gap-4'>
                        <PhoneIcon color="primary" fontSize='small'/>
                        <div className="text-slate-300 text-xs sm:text-sm">+91 9958560136</div>
                    </div>
                </div>
            </div>
            <div className='flex gap-5 md:gap-20'>
                <div className="flex flex-col z-2 gap-3">
                    <div className="text-slate-300 text-base sm:text-lg">Calculators provided</div>
                    <div className="flex flex-col z-2 gap-1">
                        <Link to="/CompoundInterest" className="text-slate-300 text-xs sm:text-sm">Compound Interest</Link>
                        <Link to="/Ipv4" className="text-slate-300 text-xs sm:text-sm">IP Subnet (v4/v6)</Link>
                    </div>
                </div>
                <div className="flex flex-col z-2 gap-3">
                    <div className="text-slate-300 text-base sm:text-lg">Convertors provided</div>
                    <div className="flex flex-col z-2 gap-1">
                        <Link to="/ToUppercase" className="text-slate-300 text-xs sm:text-sm">Uppercase</Link>
                        <Link to="/ToLowercase" className="text-slate-300 text-xs sm:text-sm">Lowercase</Link>
                        <Link to="/ToCamelcase" className="text-slate-300 text-xs sm:text-sm">Camelcase</Link>
                        <Link to="/ToSnakecase" className="text-slate-300 text-xs sm:text-sm">Snakecase</Link>
                        <Link to="/Base64" className="text-slate-300 text-xs sm:text-sm">Base 64</Link>
                        <Link to="/JsonBeautifier" className="text-slate-300 text-xs sm:text-sm">Json Beautifier</Link>
                        <Link to="/Sha" className="text-slate-300 text-xs sm:text-sm">Secure Hash Algorithm</Link>
                        <Link to="/Yaml" className="text-slate-300 text-xs sm:text-sm">Json to Yaml</Link>
                        <Link to="/Json" className="text-slate-300 text-xs sm:text-sm">Yaml to Json</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;