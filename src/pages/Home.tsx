import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { UseForm } from "../components/UserForm";
import { UserList } from "../components/UserList";
import type { User } from "../types/User";

export function Home(){
    const [users, setUsers] = useState<User[]>([]);

    const [editingUser, setEditingUser] = useState<User | null>(null);

    const addUser = (user: Omit<User, "id">) => {
        const newUser = {...user, id: uuidv4()};
        setUsers([...users, newUser]);
    };

    const updateUser = (user: Omit<User, "id">) => {
        if(!editingUser) return;
        const updated = users.map((u) => 
            u.id === editingUser.id ? { ...u, name: user.name } : u 
        );
        setUsers(updated);
        setEditingUser(null);
    }

    const deletUser = (id: string) => {
        setUsers(users.filter((user) => user.id !== id));
    };
    
    return (
                <div>
                    <h1>Usuários</h1>
                    <UseForm 
                        onSubmit={editingUser ? updateUser: addUser}
                        initialData={editingUser}
                    />
                    <UserList 
                        users={users}
                        onDelete={deletUser}
                        onEdit={(user) => setEditingUser(user)}
                    />
                </div>
            )
}

