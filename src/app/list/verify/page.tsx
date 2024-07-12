'use client'

import { useState, useEffect, ChangeEvent } from 'react';
import Image from 'next/image';

import Button from '@/components/Button';

const ImageUpload = () => {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setSelectedImage(file);
    };

    const handleImageUpload = () => {
        if (selectedImage) {
            // Handle the image upload logic here
            console.log('Uploading image:', selectedImage);
        }
    };

    useEffect(() => {
        if (selectedImage) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(selectedImage);
        } else {
            setPreview(null);
        }
    }, [selectedImage]);

    return (
        <div className='flex flex-col p-6'>
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}
                id="image-upload-input"
            />

            <label
                htmlFor="image-upload-input"
                className="text-center cursor-pointer p-2.5 border border-gray-300 inline-block"
            >
                Upload First page
            </label>

            {preview && (
                <div className="flex flex-col">
                    <Image
                        src={preview}
                        alt="Image preview"
                        className='my-2 self-center'
                        width={200}
                        height={400}
                    />
                    
                    <Button
                        onClick={handleImageUpload}
                        className={"bg-blue-900 text-white mt-2 py-2 px-4 hover:bg-blue-700"}
                    >
                        Upload
                    </Button>
                </div>
            )}
        </div>
    );
};

export default ImageUpload;
