import { useEffect, useState } from "react";
import User from "@/models/User";
import  UserService from "@/service/user/user-service";


export function useUsers() {

    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(()=> {
        fetchUsers();

    }, []);

    async function fetchUsers() {
        try {
            setLoading(true);
            const data = await UserService.getAll();
            setUsers(data);
        } catch (error:any) {
            setError(error.message || 'Erro ao buscar usuarios');
        }
        finally{
            setLoading(false);
        }
    }

    return {users,loading, error, refetch:fetchUsers};
}