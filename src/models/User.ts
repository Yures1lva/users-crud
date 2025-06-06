export type Role = 'ADMIN' | 'USER' | 'MANAGER';


class User {
  public id: number;
  public name: string;
  public email: string;
  public cpf: string;
  public role: Role;

  constructor(id: number, name: string,email: string, cpf: string, role: Role) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.cpf = cpf;
    this.role = role;
  }
    isAdmin(): boolean {
    return this.role === 'ADMIN';
  }
}

export default User
