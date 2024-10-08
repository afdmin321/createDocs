export interface User {
  token: string;
}

export interface UserSchema {
  authData?: User;
  _inited: boolean;
}
