export interface User {
  name: string;
  avatar_url: string;
  followers: number;
  location:string;
  public_repos: number
}

export interface UserState {
  loading:boolean;
  user:User;
  userReady: boolean;
  error: object
}
