import http from '@/service/client-http';
import User from '@/models/User';


const BASE_URL = '/users';

export default class UserService {
    static async getAll(): Promise<User[]>{
        const response = await http.get<User[]>(BASE_URL);
        return response.data;
    }

    static async getById(id: number): Promise<User>{
        const response = await http.get<User>('${BASE_URL}/${id}');
        return response.data;
    }
    static async create(data: Omit<User, 'id'>): Promise<User>{
        const response = await http.post<User>(BASE_URL, data);
        return response.data;
    }
    static async update(id: number, data: Partial<Omit<User, 'id'>>): Promise<User>{
        const response = await http.post<User>('${BASE_URL}/${id}', data);
        return response.data;
    }
    static async delete(id:number): Promise<void>{
        await http.delete('${BASE_URL}/${id}');
    }
}
