import { useState } from 'react'
import data from './source'
import './App.css'

function App() {
  const [paraCount, setparaCount] = useState(0);
  const [contentArray,setContentArray] = useState([]);
  const updateContent = () => {
    setContentArray([]);
    if(paraCount > 8) {
      alert(' Ayyo ! you are demanding very much paragraph in one go, kindly take little litlle 😀');
      return;
    }
    if(paraCount < 0) {
      alert(' Ayyo ! you know that you wrote negative input 😵')
      return;
    }

    const updatedArray = [];

    data.map((entry,idx)=>{
      if(paraCount-1 >= idx) {
        updatedArray.push(entry);
      }
      setContentArray(updatedArray);
      return;
    })

  }

  return (
    <>
      <h1 className="text-4xl text-orange-800 font-medium">TIRED OF BORING LOREM IPSUM?</h1>
      <div className="input-cont mx-auto mt-4 flex w-3/4 justify-center items-center gap-2">
        <p className="text-3xl text-neutral-600">Paragraphs:</p>
        <input onChange={(e)=>{setparaCount(e.target.value)}} className="w-14 h-10 text-black px-2" min={0} type="number"/>
        <button onClick={updateContent} className="bg-orange-500 px-4 py-2 rounded">Generate</button>
      </div>
      <div className="content mt-16 md:w-1/2 mx-auto flex flex-col gap-5">
        {
          contentArray.map((entry,idx)=>{
            return <p className="text-orange-800" key={"para"+idx}>{entry}</p>
          })
        }
      </div>
    </>
  )
}

export default App
