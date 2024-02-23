function ToCamelCase(){
    return(
        <>
        <h2 className="heading">To Camel Case</h2>
        <div className="flex gap-10 justify-center w-full">
            <div className="info flex flex-col items-center justify-center">
              <h3 className="stateheading">Enter text for conversion here!</h3>
              <textarea className="codearea"></textarea>
              <button className="convertbtn">Convert</button>
            </div>
            <div className="info">
              <h3 className="stateheading">Camelcased text!</h3>
              <textarea className="codearea"></textarea>
            </div>
        </div>
        
        </>
    )
}

export default ToCamelCase;