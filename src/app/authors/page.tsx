import { Author } from "./model/author";

export default async function AuthorsPage() {
    const response = await fetch('http://localhost:8080/api/authors');
    const authors: Author[] = await response.json();
    console.log(authors);
}