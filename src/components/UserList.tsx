import type { User } from "../types/User";


interface Props {
    users: User[];
    onDelete: (id: string) => void;
    onEdit: (user: User) => void;
}

export function UserList({users, onDelete, onEdit}: Props){
    return(
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name}
                    <button onClick={() => onEdit(user)}>Editar</button>
                    <button onClick={() => onDelete(user.id)}>Deletar</button>

                </li>
            ))}
        </ul>
    )
}