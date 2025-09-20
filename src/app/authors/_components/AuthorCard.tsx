'use client';

import { useState } from "react";
import { Author } from "../_model/author";
import Image from "next/image";

export const AuthorCard = ({ author } : { author: Author }) => {

    const [image, setImage] = useState<string>(author.image);

    return (
        <div className="border border-gray-300 p-4 max-w-xs shadow-md text-center font-sans mx-auto rounded-lg">
            <Image 
                src={image} 
                alt={`${author.name}'s image`} 
                width={100}
                height={100}
                onError={() => setImage("https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg")}
                className="w-24 h-24 mb-2 object-cover rounded-lg mx-auto"
            />
            <h2 className="text-lg font-medium text-gray-800 mb-1">{author.name}</h2>
            <p className="text-sm text-gray-600 mb-2">{author.description}</p>
            <p className="text-xs text-gray-800">Born: {author.birthDate}</p>
        </div>
    );
}