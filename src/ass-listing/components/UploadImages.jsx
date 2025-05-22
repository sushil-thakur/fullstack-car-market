import React from 'react'

function UploadImages() {
  return (
    <div>
        <h2 className='font-medium text-xl my-3'>Upload Car Image</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6'>
            <label htmlFor='upload-images'>
<div className='border rounded-xl border-dotted border-blue-400 bg-blue-100 p-10'>
    <h2 className='text-lg'>
        +
    </h2>
</div>
            </label>
            <input type='file' multiple={true} id='upload-images' className='opacity-0'/>
        </div>
    </div>
  )
}

export default UploadImages