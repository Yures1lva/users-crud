import { UseForm } from '@/components/UserForm/user-form.component';
import { UserList } from '@/components/UserList/user-list.component';
import { useUsers } from "@/hooks/useUser";
import { useUserForm } from "@/hooks/useForm";
import { useState } from "react";
import * as S from "./styles"; // <-- importa os estilos

export function Home() {
  const { users, loading, error, refetch } = useUsers();
  const { createUser, updateUser, deleteUser, loadingForm, errorForm, clearError } = useUserForm() as any;
  const [initialData, setInitialData] = useState(null);

  function handleFinish() {
    refetch();
  }

  function handleDelete(id: number) {
    deleteUser(id).then(() => {
      refetch();
    }).catch((error: any) => {
      console.error("Erro ao deletar usuário:", error);
      alert(error.message || 'Erro ao deletar usuário');
    });
  }

  function handleUpdate(userData: any) {
    setInitialData(userData);
  }

  function handleClear() {
    setInitialData(null);
  }

  return (
    <S.Container>
      <S.Title>Usuários</S.Title>
      <S.Layout>
        <S.Left>
          <UseForm
            initialData={initialData}
            onFinish={handleFinish}
            createUser={createUser}
            updateUser={updateUser}
            loadingForm={loadingForm}
            errorForm={errorForm}
            clearError={clearError}
            onClear={handleClear}
          />
        </S.Left>
        <S.Right>
          <UserList
            users={users}
            loading={loading}
            error={error}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        </S.Right>
      </S.Layout>
    </S.Container>
  );
}
