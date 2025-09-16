export interface User {
  id: string;
  username: string;
}

export interface RegisterUser {
  username: string;
  password: string;
}

export interface Client {
  id: string;
  name: string;
}

export interface CreateClient {
  name: string;
}
