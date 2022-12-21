import  {useState} from 'react';
import {FileUploader} from 'react-drag-drop-files';


const DragFile =()=>{
    const [file, setFile] = useState(null);
    
    
    
    
    
    const handleChange = (file) => {
        setFile(file);
      };





return (
<>
        
    <div>
        <p>
           <FileUploader 
            handleChange={handleChange} 
            name="file" 
            label="upload your excel sheet Drag and Drop file"
            dropMessageStyle={{backgroundColor: 'green'}}
        />
        </p>
    </div>
          
</>
        
);
}

export  default DragFile;