import { React} from 'react'
import {Routes , Route , Link} from 'react-router-dom'
import './App.css'
import Home from './Home.jsx';
import Base64 from './Base64.jsx'
import Ipv4 from './Ipv4.jsx'
import Ipv6 from './Ipv6.jsx'
import ToLowerCase from './ToLowerCase.jsx'
import ToSnakeCase from './ToSnakeCase.jsx'
import ToCamelCase from './ToCamelCase.jsx'
import ToUpperCase from './ToUpperCase.jsx'
import Json from './Json.jsx'
import Yaml from './Yaml.jsx'
import JsonBeautifier from './JsonBeautifier.jsx'
import Sha from './Sha.jsx'
import CompoundInterest from './CompoundInterest.jsx'
const App = () => {

  return (
    <>
    <div className="w-full items-center z-50 fixed top-0">
    <nav className=" bg-black/60 flex h-10 justify-center items-center">
    <h1 className="text-white fixed font-mono">Convertify<span className="text-red-500 font-mono"> %</span></h1>
    <Link to="Home" className="fixed text-white font-mono right-3">Home</Link>
    </nav>
    </div>
    
    <Routes>
      <Route path="Home/*" element={<Home/>}></Route>
      <Route path="Home/CompoundInterest" element={<CompoundInterest/>}></Route>
      <Route path="Home/Base64" element={<Base64/>}></Route>
      <Route path="Home/Ipv4" element={<Ipv4/>}></Route>
      <Route path="Home/Ipv6" element={<Ipv6/>}></Route>
      <Route path="Home/ToSnakeCase" element={<ToSnakeCase/>}></Route>
      <Route path="Home/ToCamelCase" element={<ToCamelCase/>}></Route>
      <Route path="Home/ToUpperCase" element={<ToUpperCase/>}></Route>
      <Route path="Home/ToLowerCase" element={<ToLowerCase/>}></Route>
      <Route path="Home/Yaml" element={<Yaml/>}></Route>
      <Route path="Home/Json" element={<Json/>}></Route>
      <Route path="Home/Sha" element={<Sha/>}></Route>
      <Route path="Home/JsonBeautifier" element={<JsonBeautifier/>}></Route>
    </Routes> 
    </>
  )
}

export default App;
