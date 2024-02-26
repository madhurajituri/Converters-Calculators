function Sha() {
    return (
        <>
            <div className="flex flex-row m-10 gap-5 items-center justify-center">

                <div className="flex flex-col items-center justify-center">

                    <div className="flex flex-col mx-10 items-center">
                        <div className="heading text-lg ml-12">SHA-0</div>
                        <div className="flex gap-5">
                            <div className="flex flex-col items-center gap-8">
                                <div className="text-red-300">Input</div>
                                <div className="text-red-300">Output</div>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <textarea className="codearea w-50 h-10"></textarea>
                                <textarea className="codearea w-50 h-10"></textarea>
                            </div>
                        </div>
                        <button className="convertbtn ml-12 w-20">Convert</button>
                    </div>

                    <div className="flex flex-col mx-10 items-center">
                        <div className="heading text-lg ml-12">SHA-1</div>
                        <div className="flex gap-5">
                            <div className="flex flex-col items-center gap-8">
                                <div className="text-red-300">Input</div>
                                <div className="text-red-300">Output</div>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                            <textarea className="codearea w-50 h-10"></textarea>
                                <textarea className="codearea w-50 h-10"></textarea>
                            </div>
                        </div>
                        <button className="convertbtn ml-12 w-20">Convert</button>
                    </div>

                    <div className="flex flex-col mx-10 items-center">
                        <div className="heading text-lg ml-12">SHA-224</div>
                        <div className="flex gap-5">
                            <div className="flex flex-col items-center gap-8">
                                <div className="text-red-300">Input</div>
                                <div className="text-red-300">Output</div>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                            <textarea className="codearea w-50 h-10"></textarea>
                                <textarea className="codearea w-50 h-10"></textarea>
                            </div>
                        </div>
                        <button className="convertbtn ml-12 w-20">Convert</button>
                    </div>

                </div>

                <div className="flex flex-col items-center justify-center">

                    <div className="flex flex-col mx-10 items-center">
                        <div className="heading text-lg ml-12">SHA-256</div>
                        <div className="flex gap-5">
                            <div className="flex flex-col items-center gap-8">
                                <div className="text-red-300">Input</div>
                                <div className="text-red-300">Output</div>
                            </div>
                            <div className="flex flex-col items-center gap-2"><textarea className="codearea w-50 h-10"></textarea>
                                <textarea className="codearea w-50 h-10"></textarea>
                            </div>
                        </div>
                        <button className="convertbtn ml-12 w-20">Convert</button>
                    </div>

                    <div className="flex flex-col mx-10 items-center">
                        <div className="heading text-lg ml-12">SHA-384</div>
                        <div className="flex gap-5">
                            <div className="flex flex-col items-center gap-8">
                                <div className="text-red-300">Input</div>
                                <div className="text-red-300">Output</div>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                            <textarea className="codearea w-50 h-10"></textarea>
                                <textarea className="codearea w-50 h-10"></textarea>
                            </div>
                        </div>
                        <button className="convertbtn ml-12 w-20">Convert</button>
                    </div>

                    <div className="flex flex-col mx-10 items-center">
                        <div className="heading text-lg ml-12">SHA-512</div>
                        <div className="flex gap-5">
                            <div className="flex flex-col items-center gap-8">
                                <div className="text-red-300">Input</div>
                                <div className="text-red-300">Output</div>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                            <textarea className="codearea w-50 h-10"></textarea>
                                <textarea className="codearea w-50 h-10"></textarea>
                            </div>
                        </div>
                        <button className="convertbtn ml-12 w-20">Convert</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Sha;