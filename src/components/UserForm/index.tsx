import { useState, useEffect, type FormEvent } from "react";

import type { User } from "../../types/User";
import { FormStyle } from "./styles";

interface Props {
    onSubmit: (user: Omit<User, "id">) => void;
    initialData?: User | null;
}

export function UseForm({onSubmit, initialData}: Props){
    const [name, setName] = useState("");

    useEffect(() => {
        if(initialData) {
            setName(initialData.name);
        }
    }, [initialData]);

    const handleSubmit = ( e: FormEvent) => {
        e.preventDefault();
        if (!name.trim()) return;
        onSubmit({ name });
        setName("");
    };

    
    return (
        <form onSubmit={handleSubmit}>
            <FormStyle/>
            <input 
                type="text" 
                placeholder="Nome do usuário" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <button type="submit">
                {initialData? "Atualizar":"Adicionar"}
            </button>
        </form>
    );
}