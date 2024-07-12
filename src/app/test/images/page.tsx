'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface ImageDS {
    id: number;
    image_data: string;
}

const ImageGallery: React.FC = () => {
    const [images, setImages] = useState<ImageDS[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch('/api/images', { cache: 'no-store' });
                if (!response.ok) {
                    throw new Error(`Error fetching images: ${response.statusText}`);
                }
                const data = await response.json();
                setImages(data);
                setLoading(false);
            } catch (error) {
                setError((error as Error).message);
                setLoading(false);
            }
        };

        fetchImages();
    }, []);

    if (loading) {
        return <p>Loading images...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h2>Image Gallery</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {images.map((image) => (
                    <div key={image.id} style={{ margin: '10px' }}>
                        <Image
                            src={`data:image/jpeg;base64,${image.image_data}`}
                            alt={`Image ${image.id}`}
                            width={150}
                            height={150}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;
