import { UseForm } from '@/components/UserForm';
import { UserList } from '@/components/UserList';
import { useUsers } from "@/hooks/useUser";
import { useUserForm } from "@/hooks/useForm";
import { useState } from "react";

export function Home() {
const { users, loading, error, refetch } = useUsers();
const { createUser, updateUser, deleteUser, loadingForm, errorForm, clearError } = useUserForm() as any;

const [initialData, setInitialData] = useState(null);



function handleFinish() {
    refetch();
  }

function handleDelete(id:number) {
  deleteUser(id).then(() => {
    refetch();
  }).catch((error:any) => {
    console.error("Erro ao deletar usuário:", error);
    alert(error.message || 'Erro ao deletar usuário');
  });
}

function handleUpdate(userData:any) {
  setInitialData(userData);
}
    return (
    <div>
      <h1>Usuários</h1>
      <UseForm
        initialData={initialData}
        onFinish={handleFinish}
        createUser={createUser}
        updateUser={updateUser}
        loadingForm={loadingForm}
        errorForm={errorForm}
        clearError={clearError}
      />
      <UserList
        users={users}
        loading={loading}
        error={error}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
    </div>
  );
}
