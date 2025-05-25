import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';
import { snapshot } from 'node:test';
import React, { useState } from 'react'
import { IoIosCloseCircle } from "react-icons/io";

function UploadImages() {
  const[selectedFileList, setSelectedFileList]=useState([])
  const onFileSelected = (event) => {
    const files = event.target.files;
    for (let i = 0; i < files?.length; i++) {
      const file = files[i];
      setSelectedFileList((prev)=>[...prev,file])
    }
  }

  const onImageRemove = (image, index) => {
    const result = selectedFileList.filter((item) => item !== image);
    setSelectedFileList(result);
  }
    const UploadImages=()=>{
      selectedFileList.forEach((file)=>{
        const fileName=Date.now()+".jpeg";
        const StorageRef=ref(Storage,'car marketplace/'+fileName);
        const metaData={
          contentType:'image/jpeg'
        }
        UploadBytes(StorageRef, file,metaData).then((snapshot)=>{
          console.log("uploaded File")
        }).then(resp=>{
          getDownloadURL(StorageRef).then(async(downloadUrl)=>{
            console.log(downloadUrl);
          })
        })
      })
    
  }
  return (
    <div>
        <h2 className='font-medium text-xl my-3'>Upload Car Image</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5' >
          {selectedFileList.map((image,index)=>(
            <div key={index}>
              <h2>
                <IoIosCloseCircle className='absolute m-2 text-lg text-blue-300' 
                onClick={()=>onImageRemove(image,index)} />
              </h2>
              <img src={URL.createObjectURL(image)} className='w-full h-[130px object-cover rounded-2xl'/> 

            </div>
          ))}
            <label htmlFor='upload-images'>
<div className='border rounded-xl border-dotted border-blue-400 bg-blue-100 p-10 cursor-pointe hover:shadow-md'>
    <h2 className='text-lg text-center text-blue-400'>
        +
    </h2>
</div>
            </label>
            <input type='file' multiple={true} id='upload-images' 
            onChange={onFileSelected}
            
            className='opacity-0'/>
        </div>
        <Button onClick={UploadImages}>Uplaod image</Button>
    </div>
  )
}

export default UploadImages