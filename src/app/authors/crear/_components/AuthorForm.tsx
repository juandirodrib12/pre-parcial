'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm , SubmitHandler } from 'react-hook-form';
import { z } from 'zod';

const authorFormSchema = z.object({
    birthDate: z.string().min(10).max(10),
    name: z.string().min(2).max(100),
    description: z.string().min(10).max(500),
    image: z.string().url(),
});

export type AuthorFormData = z.infer<typeof authorFormSchema>;

export function AuthorForm() {

    const { register, handleSubmit, formState: { errors } } = useForm<AuthorFormData>({
        resolver: zodResolver(authorFormSchema),
        defaultValues: {
            birthDate: "1927-03-06",
            name: "Gabriel García Márquez",
            description: "Escritor, novelista, cuentista, guionista y periodista colombiano, ganador del Premio Nobel de Literatura en 1982, conocido principalmente por su obra 'Cien años de soledad'.",
            image: "https://www.canyayinlari.com/Skins/shared/images/yazar/desktop/Gabriel%20Garc%20a%20M%20rquez_2.png",
        },
    });

    const onSubmit: SubmitHandler<AuthorFormData> = async (author) => {
        const response = await fetch('http://localhost:8080/api/authors', {
            method: 'POST',
            body: JSON.stringify(author),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            window.location.href = '/authors';
        }
        else {
            alert('Error creating author');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl font-bold text-center my-8">
                Create Author
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 p-6 bg-white border border-gray-300 shadow-md rounded-md w-full max-w-lg">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                type="text"
                {...register('name')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Birth Date</label>
                <input
                type="date"
                {...register('birthDate', {
                    valueAsDate: false,
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.birthDate && <span className="text-red-500 text-sm">{errors.birthDate.message}</span>}
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                {...register('description')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.description && <span className="text-red-500 text-sm">{errors.description.message}</span>}
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                <input
                type="text"
                {...register('image')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.image && <span className="text-red-500 text-sm">{errors.image.message}</span>}
            </div>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                Submit
            </button>
            </form>
        </div>
    );
}