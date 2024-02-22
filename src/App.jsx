import { useState } from 'react'
import {Routes , Route, useNavigate} from 'react-router-dom'
import './App.css'

function App() {

  const navigate = useNavigate();
  const Base64 = () => {
    navigate('/Base64');
  }

  return (
    <>
    <div>

    <div className="fixed w-full items-center z-10">
    <nav className=" bg-black/60 flex h-10 justify-center items-center">
    <h1 className="text-white font-mono">Convertify<span className="text-red-500 font-mono"> %</span></h1>
    </nav>
    </div>
    <div className="opacity-80">
      <div className="-z-50 absolute top-0 left-0 text-[120px] text-[--primary-dark] font-bold text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-blue-500 transition-transform duration-1000 transform-translate-y-full">Calculate</div>
      <div className="-z-50 absolute -top-[320px] left-[300px] text-[800px] text-[--primary-dark] ">/</div>
      <div className="-z-50 absolute right-0 -bottom-12 text-[280px] text-[--primary-dark] font-bold">Convert</div>
    </div>
    <div className="calculate absolute top-1/4 left-[50px] flex flex-col gap-7">
    <div className="btn">Compound Interest</div>
    <div className="btn">IP Subnet v4</div>
    <div className="btn">IP Subnet v6</div>
    </div>
    <div className="convert absolute right-[100px] top-[110px] flex flex-row gap-8">
      <div className="inner flex flex-col gap-7">
    <div className="btn2">AWS Cloudformation YAML->JSON</div>
    <div className="btn2">AWS Cloudformation JSON->YAML</div>
    <div className="btn2">JSON Beautifier</div>
      </div>
      <div className="inner flex flex-col gap-7">
    <div className="btn2">ToUpperCase</div>
    <div className="btn2">ToLowerCase</div>
    <div className="btn2">ToCamelCase</div>
      </div>
      <div className="inner flex flex-col gap-7">
    <div className="btn2">ToSnakeCase</div>
    <div className="btn2" onclick={Base64}>Base 64</div>
    <div className="btn2">SHA</div>
      </div>
    </div> 

    <Routes>
      <route path="/CompoundInterest" element={<CompoundInterest/>}></route>
      <route path="/Base64" element={<Base64/>}></route>
      <route path="/Ipv4" element={<Ipv4/>}></route>
      <route path="/Ipv6" element={<Ipv6/>}></route>
      <route path="/ToSnakeCase" element={<ToSnakeCase/>}></route>
      <route path="/ToCamelCase" element={<ToCamelCase/>}></route>
      <route path="/ToUpperCase" element={<ToUpperCase/>}></route>
      <route path="/ToLowerCase" element={<ToLowerCase/>}></route>
      <route path="/Yaml" element={<Yaml/>}></route>
      <route path="/Json" element={<Json/>}></route>
      <route path="/Sha" element={<Sha/>}></route>
      <route path="/JsonBeautifier" element={<JsonBeautifier/>}></route>
    </Routes>

    
    </div>
    </>
  )
}

export default App
