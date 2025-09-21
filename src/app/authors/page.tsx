'use client';

import { AuthorsList } from "./_components/AuthorsList";

const AuthorsPage = () => {
    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold text-center my-8">
                Authors
            </h1>
            <div className="flex justify-center mb-4">
                <button
                    onClick={() => (window.location.href = '/authors/crear')}
                    className="bg-blue-500 text-white mb-4 px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                    Create Author
                </button>
            </div>
            <div>
                <AuthorsList />
            </div>
        </div>
    );
};

export default AuthorsPage;