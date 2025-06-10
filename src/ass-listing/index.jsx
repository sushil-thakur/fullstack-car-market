import React, { useState } from 'react'
import Header from '@/components/Header'
import carDetails from './../Shared/carDetails.json'
import InputField from './components/InputField'
import DropDownField from './components/DropDownField'
import TextAreaField from './components/TextAreaField'
import { Separator } from '@radix-ui/react-select'
import features from "./../Shared/features.json"
import { Checkbox } from './components/Checkbox'
import { Button } from '@/components/ui/button'
import { db } from './../../configs'
import { CarListing } from "../../configs/schema"
import IconField from './components/IconField'
import UploadImages from './components/UploadImages'
import { useUser } from "@clerk/clerk-react";
import moment from "moment";


function AddListing() {
  const [formData, setFormData] = useState({});
  const [featuresData, setFeaturesData] = useState({});
  const [selectedFileList, setSelectedFileList] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrls, setUploadedUrls] = useState([]);
  const { user } = useUser();

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  const handleFeatureChange = (name, value) => {
    setFeaturesData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  // Cloudinary upload
  const uploadImagesToCloudinary = async () => {
    const url = "https://api.cloudinary.com/v1_1/dfx93y02n/image/upload";
    const uploadPreset = "car marketplace"; // your actual preset
    const uploadedUrls = [];
    for (const file of selectedFileList) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", uploadPreset);
      const res = await fetch(url, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.secure_url) uploadedUrls.push(data.secure_url);
    }
    return uploadedUrls;
  };

  const onsubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    try {
      const imageUrls = await uploadImagesToCloudinary();
      setUploadedUrls(imageUrls);
      console.log("Uploaded image URLs:", imageUrls);

   const result = await db.insert(CarListing).values({
  ...formData,
  features: featuresData,
  images: imageUrls,
  CreatedBy: user.id,
  email: user.primaryEmailAddress.emailAddress,
  postedOn: moment().format('DD/MM/YYYY')
}).returning({ id: CarListing.id });
      if (result) {
        console.log("data saved");
      }
    } catch (e) {
      console.log("error", e);
    }
    setUploading(false);
  };

  return (
    <div>
      <Header />
      <div className='px-10 md:px-20 my-10'>
        <h2 className='font-bold text-4xl'>Add New Listing</h2>
        <form className='p-10 border rounded-xl mt-10 ' onSubmit={onsubmit}>
          {/* Car Details */}
          <div>
            <h2 className='font-medium text-xl mb-6'>Car Details</h2>
            <div className='grid grid-cols-2 gap-5'>
              {carDetails.carDetails.map((item, index) => (
                <div key={index}>
                  <label className='text-sm flex gap-2 items-center mb-1'>
                    <IconField icon={item?.icon} />
                    {item?.label} {item.required && <span className='text-red-500'>*</span>}
                  </label>
                  {(item.fieldType === 'text' || item.fieldType === 'number') ? (
                    <InputField item={item} handleInputChange={handleInputChange} />
                  ) : item.fieldType === 'dropdown' && item.options ? (
                    <DropDownField item={item} handleInputChange={handleInputChange} />
                  )
                    : item.fieldType === 'textarea' ? (
                      <TextAreaField item={item} handleInputChange={handleInputChange} />
                    )
                      : null}
                </div>
              ))}
            </div>
          </div>
          <Separator className='my-6' />

          {/* Features List */}
          <div>
            <h2 className='font-medium text-xl my-6'>Features</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
              {features.features.map((item, index) => (
                <div key={index} className='flex gap-2 items-center'>
                  <Checkbox
                    onCheckedChange={(value) => handleFeatureChange(item.name, value)}
                    className="!bg-white !text-black border-[2px] border-[rgb(0,123,255)] data-[state=checked]:bg-blue-500 data-[state=checked]:text-white"
                  />
                  <h2>{item.label}</h2>
                </div>
              ))}
            </div>
          </div>

          {/* Car Images */}
          <Separator className='my-6' />
          <UploadImages
            selectedFileList={selectedFileList}
            setSelectedFileList={setSelectedFileList}
          />
          <div className='mt-10 flex justify-end bg-blur'>
            <Button type="submit" className="!bg-blue-400" disabled={uploading}>
              {uploading ? "Uploading..." : "Submit"}
            </Button>
          </div>
        </form>
        {/* Show uploaded image links after submit */}
        {uploadedUrls.length > 0 && (
          <div className="mt-8">
            <h3 className="font-bold mb-2">Uploaded Images:</h3>
            <div className="flex gap-4 flex-wrap">
              {uploadedUrls.map((url, idx) => (
                <a
                  key={idx}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#007bff", textDecoration: "underline" }}
                >
                  {url}
                </a>
              ))}
            </div>
            <div className="flex gap-4 flex-wrap mt-4">
              {uploadedUrls.map((url, idx) => (
                <img key={idx} src={url} alt={`uploaded-${idx}`} style={{ width: 120, borderRadius: 8 }} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AddListing