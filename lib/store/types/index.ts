export interface RootState {
  authState: AuthState;
  fruitsState: FruitsState;
}

export interface AuthState {
  isAuth: boolean;
  username: string;
  password: string;
  uid: string;
}

export interface FormLogin {
  user: string;
  password: string;
}

export interface FruitsState {
  fruitsData: [],
  fruitSelected:[]
  fruitSelectedInfo:[]
}
