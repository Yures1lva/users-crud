import { Component} from "./style";
import User from "@/models/User"

interface UserListProps {
  users: User[];
  loading: boolean;
  error: string | null;
  onDelete?: (id: number ) => void
  onUpdate?: (userData: any ) => void
}

export function UserList({ users, loading, error, onDelete, onUpdate }: UserListProps){

    if (loading) {
        return <p>Carregando...</p>;
    }
    if (error) {
        return <p>Ocorreu um erro: {error}</p>;
    }

    return(
        <Component>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    <p>{user.name}</p>
                    <div><button onClick={()=> onUpdate && onUpdate(user)}>Editar</button>
                    <button onClick={()=> onDelete && onDelete(user.id)}>Deletar</button></div>

                </li>
            ))}
        </ul>
        </Component> 
    )
}