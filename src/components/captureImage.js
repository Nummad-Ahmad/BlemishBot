import React, { useState } from 'react';

const ImagePicker = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0]; 
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setSelectedImage(imageURL);
    }
  };

  return (
    <div>
      <input 
        type="file" 
        accept="image/*"  
        onChange={handleImageChange} 
      />
      
      {selectedImage && (
        <div>
          <img 
            src={selectedImage} 
            alt="Selected" 
            style={{ width: 'auto', height: 'auto' }} 
          />
        </div>
      )}
    </div>
  );
};

export default ImagePicker;
