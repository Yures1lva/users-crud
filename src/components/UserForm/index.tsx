import { useState, useEffect } from "react";
import User from '@/models/User';
import type { UserInput } from '@/models/User';
import { FormStyle } from "./styles";


interface UserFormProps {
  initialData?: User | null;
  onFinish: () => void;
  createUser: (userData: UserInput) => Promise<User | null> ;
  updateUser: (id: number, userData: UserInput) => Promise<User | null> ;
  loadingForm: boolean;
  errorForm: string | null;
  clearError: () => void;
  onClear?: () => void;
}

export function UseForm({ initialData = null, onFinish, createUser, updateUser, loadingForm, errorForm, clearError,onClear  }: UserFormProps){


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [role, setRole] = useState<'ADMIN' | 'USER'>('USER');


    useEffect(() => {
        if (initialData) {
        setName(initialData.name);
        setEmail(initialData.email);
        setCpf(initialData.cpf);
        setRole(initialData.role);
        }else{
            setName('');
            setEmail('');
            setCpf('');
            setRole('USER');
            console.log("Form Limpado")
        }
    }, [initialData]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const userData: UserInput = { name, email, cpf, role };

    try {
      if (initialData) {
        await updateUser(initialData.id, userData);
      } else {
        await createUser(userData);
      }

      onFinish();
    } catch (error:any) {
      console.error("Erro ao salvar usuário:", error.message);
      //alert("Erro ao salvar usuário: " + error.message + ".");
    }
  }
    
    return (
        <FormStyle onSubmit={handleSubmit}>
        <h2>{initialData ? 'Atualizar Usuário' : 'Adicionar Usuário'}</h2>

        {errorForm && (
            <p style={{ color: 'red' }}>
            {errorForm}
            <button onClick={clearError} type="button">x</button>
            </p>
        )}


        <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
        />

        <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />

        <input
            type="text"
            placeholder="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
        />

        <select value={role} onChange={(e) => setRole(e.target.value as 'USER' | 'ADMIN')}>
            <option value="USER">Usuário</option>
            <option value="ADMIN">Administrador</option>
        </select>

        <button type="submit" disabled={loadingForm}>
            {loadingForm ? 'Salvando...' : initialData ? 'Atualizar' : 'Adicionar'}
        </button>
        <button type="button" onClick={onClear}>Limpar</button>

        </FormStyle>
    );
}