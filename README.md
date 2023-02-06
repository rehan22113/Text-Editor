# Text-Editor
text editor on react ts by using a quilljs library

install library:
 ~npm i react-quilljs;

import library:

 ~import { useQuill } from 'react-quilljs'
 
 
 put this inside function
  const {quill,quillRef} = useQuill()
  
  return(
 
  <div style={{ width: 550, height: 500 }}>
      <div ref={quillRef} />
    </div>

  )

<img width="1792" alt="Screenshot 2023-02-07 at 1 36 57 AM" src="https://user-images.githubusercontent.com/59451476/217080649-e23c6512-307d-4649-ad9b-61a88f723e7a.png">
