import {Routes , Route} from 'react-router-dom';
import CompoundInterest from "./CompoundInterest.jsx";
import Sha from './Sha.jsx';
import Json from './Json.jsx';
import Yaml from './Yaml.jsx';
import Base64 from './Base64.jsx';
import Ipv4 from './Ipv4.jsx';
import Ipv6 from './Ipv6.jsx';
import JsonBeautifier from './JsonBeautifier.jsx';
import ToCamelCase from './ToCamelCase.jsx';
import ToUpperCase from './ToUpperCase.jsx';
import ToSnakeCase from './ToSnakeCase.jsx';
import ToLowerCase from './ToLowerCase.jsx';
import Home from './Home.jsx';

function Router() {
    return (
        <div>
            <Routes>
                <Route path="/Base64" element={<Base64 />} />
                <Route path="/" element={<Home />} />
                <Route path="/Ipv4" element={<Ipv4 />} />
                <Route path="/Ipv6" element={<Ipv6 />} />
                <Route path="/Json" element={<Json />} />
                <Route path="/Yaml" element={<Yaml />} />
                <Route path="/JsonBeautifier" element={<JsonBeautifier />} />
                <Route path="/ToLowerCase" element={<ToLowerCase />} />
                <Route path="/ToUpperCase" element={<ToUpperCase />} />
                <Route path="/ToSnakeCase" element={<ToSnakeCase />} />
                <Route path="/ToCamelCase" element={<ToCamelCase />} />
                <Route path="/Sha" element={<Sha />} />
                <Route path="/CompoundInterest" element={<CompoundInterest />} />
            </Routes>
        </div>
    )
}

export default Router;