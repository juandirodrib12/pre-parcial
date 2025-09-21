import { Author } from "../../_model/author";
import { AuthorForm } from "./_components/AuthorForm";

export const EditarAuthorPage = async ( { params } : { params: Promise<{ id: string }> } ) => {
    const { id } = await params;
    const response = await fetch(`http://localhost:8080/api/authors/${id}`, {
        method: 'GET',
        cache: 'no-store',
    });

    if (!response.ok) {
        throw new Error('Failed to fetch author');
    }

    const author: Author = await response.json();

    return (
        <div>
            <AuthorForm author={author} />
        </div>
    );
}

export default EditarAuthorPage;