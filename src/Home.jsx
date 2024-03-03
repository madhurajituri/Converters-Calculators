import { React } from 'react';
import {Link} from 'react-router-dom';

function Home() {
    return (
        <>
            <div>
                <div className="flex flex-col items-center m-10">
                    <Link to="/CompoundInterest" className="btn">Compound Interest</Link>
                    <Link to="/Ipv4" className="btn">IP Subnet v4</Link>
                    <Link to="/Ipv6" className="btn">IP Subnet v6</Link>
                    <Link to="/Json" className="btn">AWS Cloudformation YAML to JSON</Link>
                    <Link to="/Yaml" className="btn">AWS Cloudformation JSON to YAML</Link>
                    <Link to="/JsonBeautifier" className="btn">JSON Beautifier</Link>
                    <Link to="/ToUpperCase" className="btn">ToUpperCase</Link>
                    <Link to="/ToLowerCase" className="btn">ToLowerCase</Link>
                    <Link to="/ToCamelCase" className="btn">ToCamelCase</Link>
                    <Link to="/ToSnakeCase" className="btn">ToSnakeCase</Link>
                    <Link to="/Base64" className="btn">Base 64</Link>
                    <Link to="/Sha" className="btn">Secure Hash Algorithm (SHA)</Link>
                </div>
            </div>
        </>
    )
}

export default Home;