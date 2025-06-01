import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";

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
            <div className="users-container">
                {posts.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
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