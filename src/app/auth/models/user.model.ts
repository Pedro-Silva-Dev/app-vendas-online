export class User{
  id: number;
  nome: string;
  email: string;
  senha: string;

  constructor(user: User){
    this.id = user.id;
    this.nome = user.nome;
    this.email = user.email;
    this.senha = user.senha;
  }

}
