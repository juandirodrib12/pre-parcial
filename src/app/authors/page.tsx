import { AuthorsList } from "./_components/AuthorsList";

export default async function AuthorsPage() {

    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-8">Authors</h1>
            <AuthorsList/>
        </div>
    )
}