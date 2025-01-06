import React, { useState } from 'react';

const ImagePicker = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Handle the file selection
  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the first selected file
    if (file) {
      const imageURL = URL.createObjectURL(file); // Create a URL for the selected image
      setSelectedImage(imageURL); // Set the image URL to state
    }
  };

  return (
    <div>
      <input 
        type="file" 
        accept="image/*"  // Restrict to image files
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
