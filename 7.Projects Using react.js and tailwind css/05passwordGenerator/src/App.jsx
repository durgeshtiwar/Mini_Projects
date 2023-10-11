import { useState , useCallback , useEffect , useRef} from 'react'

function App() {
  const [length, setlength] = useState(8);
  const [Numberallowed, setnumberallowe] = useState(false);
  const [Charallowed, setcharallowed] = useState(false);
  const [password, setpassword] = useState("");
  const passwordref = useRef(null);
  const passwordGenerator = useCallback(() => 
  {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(Numberallowed) str += "0123456789";
    if(Charallowed) str += "`!@#$%^&*(){}[]_=+?~`";
    for (let i = 0; i <length; i++) {
      let char = Math.floor( Math.random()* str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);

  },[length,Numberallowed,Charallowed,setpassword])
  const copypasswordtoclipboard = useCallback(()=>{
    passwordref.current?.select();
    passwordref.current?.setSelectionRange(0,4);
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{
    passwordGenerator()
  },[length,Numberallowed,Charallowed,passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-slate-800'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='className=" flex shadow rounded-lg overflow-hidden mb-4"'>
          <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordref}
          />
          <button 
          onClick={copypasswordtoclipboard}
          className='outline-non bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1 my-3'>
            <input 
            type="range" 
            min={6}
            max={100}
            className='cursor-pointer' 
            onChange={(e)=>{setlength(e.target.value)}}
            />
            <label>length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={Numberallowed}
            id="nuberInput"
            onChange={()=>{
              setnumberallowe((prev)=>!prev);
            }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={Charallowed}
            id="charInput"
            onChange={()=>{
              setcharallowed((prev)=>!prev);
            }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
