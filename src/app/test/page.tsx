// components/UploadForm.tsx
'use client'

import { useState } from 'react';

const UploadForm = () => {
    const [image, setImage] = useState<File | null>(null);
    const [status, setStatus] = useState<string>('');

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!image) {
            setStatus('Please select an image to upload.');
            return;
        }

        const reader = new FileReader();
        reader.onloadend = async () => {
            const base64Image = reader.result?.toString().split(',')[1]; // Extract Base64 part
            if (base64Image) {
                try {
                    const response = await fetch('/api/upload', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ imageData: base64Image })
                    });
                    const result = await response.json();
                    if (response.ok) {
                        setStatus(`Image uploaded successfully. Image ID: ${result.id}`);
                    } else {
                        setStatus(`Error uploading image: ${result.message}`);
                    }
                } catch (error) {
                    setStatus(`Error uploading image: ${(error as Error).message}`);
                }
            }
        };
        reader.readAsDataURL(image); // This triggers the file reading
    };

    return (
        <div>
            <h1>Upload Image</h1>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <button onClick={handleUpload}>Upload</button>
            {status && <p>{status}</p>}
        </div>
    );
};

export default UploadForm;
