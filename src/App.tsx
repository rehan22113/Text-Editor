import { useEffect, useState,useRef } from 'react'
import './App.css'
import { useQuill } from 'react-quilljs'
import 'quill/dist/quill.snow.css';

function App() {
  const {quill,quillRef} = useQuill()
  // const [result,setResult] = useState();
  const result = useRef<HTMLSpanElement>(null)
  useEffect(()=>{
    if(quill){
      quill.on('text-change', () => {
        console.log(quill.root.innerHTML); // Get innerHTML using quill  
        console.log(result.current)
        if(result.current){
          result.current.innerHTML=quill.root.innerHTML;
        }
        
      });
    }
  },[quill])

  return (
    <>
    <h1>Text Editor Create By React js</h1>
    <div style={{display:"flex",justifyContent:"space-between",width:1200}}>

    <div style={{ width: 550, height: 500 }}>
      <div ref={quillRef} />
    </div>
    <div style={{border:"1px solid white",width:550,height:560,overflow:"scroll",textAlign:"inherit"}}>
     <h2> show output</h2>
     <div>
     <span ref={result}>
     </span>
     </div>

    </div>
    </div>
    </>
  )
}

export default App
