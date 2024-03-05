import { React } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <div className='flex flex-col sm:flex-row sm:gap-5 m-20 md:mx-10 md:gap-20 lg:gap-40 items-center justify-center'>
                <div className="flex flex-col items-center gap-4">
                    <Link to="/ToUpperCase" className="btn">ToUpperCase</Link>
                    <Link to="/ToLowerCase" className="btn">ToLowerCase</Link>
                    <Link to="/CompoundInterest" className="btn">Compound Interest</Link>
                    <Link to="/Json" className="btn">AWS Cloudformation YAML to JSON</Link>
                    <Link to="/Sha" className="btn">Secure Hash Algorithm (SHA)</Link>
                    {/* <Link to="/Ipv4"><button disabled>IP Subnet v4</button></Link> */}
                </div>
                <div className="flex flex-col items-center gap-4">
                    <Link to="/ToSnakeCase" className="btn">ToSnakeCase</Link>
                    <Link to="/ToCamelCase" className="btn">ToCamelCase</Link>
                    <Link to="/JsonBeautifier" className="btn">JSON Beautifier</Link>
                    <Link to="/Base64" className="btn">Base 64</Link>
                    <Link to="/Yaml" className="btn">AWS Cloudformation JSON to YAML</Link>
                    {/* <Link to="/Ipv6" className="btn" aria-disabled="true">IP Subnet v6</Link> */}
                </div>
            </div >
                <div className='stateheading items-center animate-pulse'>IP Subnet calculator (v4/v6) is in progress!</div>
        </>
    )
}

export default Home;