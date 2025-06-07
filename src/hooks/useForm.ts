import { useState } from 'react';
import UserService from '@/service/user/user-service';
import User from '@/models/User';
import type { UserInput } from '@/models/User';



export function useUserForm() {
    const [loadingForm, setLoading] = useState<boolean>(false);
    const [errorForm, setError] = useState<string | null>()

    async function createUser(data: UserInput): Promise<User | null> {
        try {
            setLoading(true);
            const user = await UserService.create(data);
            return user;
        } catch (error:any) {
            setError(error.message || 'Erro ao criar usuário');
            throw error;
        }finally{
            setLoading(false);
        }
    }

      async function updateUser(id: number, data: Partial<UserInput>): Promise<User | null> {
    try {
      setLoading(true);
      const user = await UserService.update(id, data);
      return user;
    } catch (error: any) {
      setError(error.message || 'Erro ao atualizar usuário');
      throw error;
    } finally {
      setLoading(false);
    }
  }
  async function deleteUser(id: number): Promise<boolean> {
    try {
      setLoading(true);
      await UserService.delete(id);
      return true;
    } catch (error: any) {
      setError(error.message || 'Erro ao deletar usuário');
      throw error;
    } finally {
      setLoading(false);
    }
  }

  function clearError() {
    setError(null);
  }

  return {
    createUser,
    updateUser,
    deleteUser,
    loadingForm,
    errorForm,
    clearError
  };
}