import React, { useState } from 'react'
import Header from '@/components/Header'
import carDetails from './../Shared/carDetails.json'
import InputField from './components/InputField'
import DropDownField from './components/DropDownField'
import TextAreaField from './components/TextAreaField'
import { Separator } from '@radix-ui/react-select'
import features  from "./../Shared/features.json"
// import { Checkbox } from "@/components/ui/checkbox"
import { Checkbox } from './components/Checkbox'
import { Button } from '@/components/ui/button'
import { db } from './../../configs'
import { CarListing } from "../../configs/schema"
import IconField from './components/IconField'

function AddListing() {
  const [formData,setFormData]=useState([]);
  const[featuresData, setFeaturesData]=useState([]);
  //used to capture user form from
  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    console.log(formData);
  }

  // used to saved seletected feature list
  const handleFeatureChange=(name,value)=>{
    setFeaturesData((prevData)=>({
      ...prevData,
      [name]:value
    }))
    console.log(featuresData)
  }

  const onsubmit =async (e) => {
    e.preventDefault();
    console.log(formData);
    try{
    const result=await db.insert(CarListing).values({
      ...formData,
      features:featuresData
    });
    if(result){
      console.log("data saved")
    }
  }catch(e){
    console.log("error",e)
  }
  }
  return (
    <div>
        <Header/>
        <div className='px-10 md:px-20 my-10'>
            <h2 className='font-bold text-4xl'>Add New Listing</h2>
            <form className='p-10 border rounded-xl mt-10 '>
             {/* {   Car Details} */}
             <div>
                <h2 className='font-medium text-xl mb-6'>Car Details</h2>
                <div className='grid grid-cols-2 gap-5'>
                  {carDetails.carDetails.map((item,index)=>(
                    <div key={index}>
                      <label className='text-sm flex gap-2 items-center mb-1'>
                        <IconField icon={item?.icon}/>
                        
                        
                        {item?.label} {item.required&&<span className='text-red-500'>*</span>}</label>
        {(item.fieldType === 'text' || item.fieldType === 'number') ? (
          <InputField item={item}handleInputChange={handleInputChange}/>
        ) : item.fieldType === 'dropdown' && item.options ? (
          <DropDownField item={item}
          handleInputChange={handleInputChange}/>
        ) 
          : item.fieldType === 'textarea' ? (
          <TextAreaField item={item} handleInputChange={handleInputChange} />
        )
        : null}

      </div>
                  ))}
                </div>
             </div>
             <Separator className='my-6'/>
             

             {/* {features List} */}
             <div>
              <h2 className='font-medium text-xl my-6'>Features</h2>
              <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
                {features.features.map((item,index)=>(
                  <div key={index} className='flex gap-2 items-center'>
                    <Checkbox onCheckedChange={(value) => handleFeatureChange(item.name, value)}
                 className="!bg-white !text-black border-[2px] border-[rgb(0,123,255)] data-[state=checked]:bg-blue-500 data-[state=checked]:text-white"
   style={{ border: "2px solid rgb(0, 123, 255)" }}
/>
                    <h2>{item.label}</h2>

                  </div>
                ))}
              </div>
             </div>

             {/* {car Image} */}
             <div className='mt-10 flex justify-end bg-blur'>
              <Button type="submit" onClick={(e)=>onsubmit(e)} className="!bg-blue-400">Submit</Button>
             </div>
            </form>
        </div>
    </div>
  )
}

export default AddListing