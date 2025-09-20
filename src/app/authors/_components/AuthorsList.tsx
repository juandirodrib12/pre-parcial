'use client';

import { useEffect, useState } from 'react';
import { Author } from '../_model/author';
import { AuthorCard } from './AuthorCard';

export const AuthorsList = () => {
    const [authors, setAuthors] = useState<Author[]>([]);

    useEffect(() => {
        fetchAuthors();
    }, []);

    const fetchAuthors = async function () {
        const response = await fetch('http://localhost:8080/api/authors');
        const data = await response.json();
        setAuthors(data);
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4">
            {authors.map(author => (
                <AuthorCard key={author.id} author={author} />
            ))}
        </div>
    );
}