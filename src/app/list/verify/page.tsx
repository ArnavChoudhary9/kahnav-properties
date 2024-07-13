'use client'

import { useState, useEffect, ChangeEvent } from 'react';
import Image from 'next/image';
import Button from '@/components/Button';

const MAX_FILE_SIZE = 200 * 1024; // 200KB

const ImageUpload = () => {
    const [selectedImages, setSelectedImages] = useState<(File | null)[]>([null, null]);
    const [previews, setPreviews] = useState<(string | null)[]>([null, null]);
    const [errors, setErrors] = useState<string[]>(['', '']);
    const [widthClass, setWidthClass] = useState<string>('');

    const handleImageChange = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;

        if (file && file.size > MAX_FILE_SIZE) {
            const newErrors = [...errors];
            newErrors[index] = 'File size should not exceed 200KB';
            setErrors(newErrors);
            return;
        }

        const newSelectedImages = [...selectedImages];
        const newErrors = [...errors];

        newSelectedImages[index] = file;
        newErrors[index] = '';

        setSelectedImages(newSelectedImages);
        setErrors(newErrors);
    };

    const handleImageUpload = () => { };

    useEffect(() => {
        const newPreviews = selectedImages.map(image => {
            if (!image) return null;
            const reader = new FileReader();
            reader.readAsDataURL(image);
            return new Promise<string>((resolve) => {
                reader.onloadend = () => {
                    resolve(reader.result as string);
                };
            });
        });

        Promise.all(newPreviews).then(previews => {
            setPreviews(previews);
        });
    }, [selectedImages]);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setWidthClass(width < 600 ? 'col' : 'row');
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className={`flex flex-${widthClass} gap-0`}>
                {selectedImages.map((_, index) => (
                    <div key={index} className='flex flex-col p-6 w-full'>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange(index)}
                            style={{ display: 'none' }}
                            id={`image-upload-input-${index}`}
                        />

                        <label
                            htmlFor={`image-upload-input-${index}`}
                            className="text-center cursor-pointer p-2.5 border border-gray-300 inline-block"
                        >
                            Upload {index === 0 ? 'First' : 'Second'} Image
                        </label>

                        {errors[index] && (
                            <div className="text-red-500 text-sm mt-2">{errors[index]}</div>
                        )}

                        {previews[index] && (
                            <Image
                                src={previews[index]!}
                                alt={`Image preview ${index + 1}`}
                                className='my-2 self-center'
                                width={200}
                                height={400}
                            />
                        )}
                    </div>
                ))}
            </div>

            <div className="flex flex-col mb-6 mx-6">
                {(previews[0] != null && previews[1] != null) && (
                    <Button
                        onClick={handleImageUpload}
                        className={"bg-blue-900 text-white py-2 px-4 hover:bg-blue-700"}
                    >
                        Verify
                    </Button>
                )}
            </div>
        </>
    );
};

export default ImageUpload;
