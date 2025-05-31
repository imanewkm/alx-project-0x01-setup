import Header from "@/components/layout/Header";

interface User {
    id: number;
    name: string;
    email: string;
}

interface UsersProps {
    posts: User[];
}

function Users({ posts }: UsersProps) {
    return (
        <div>
            <Header />
            {/* Your users content here */}
        </div>
    );
}

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const posts = await response.json()

    return {
        props: {
            posts
        }
    }
}

export default Users;