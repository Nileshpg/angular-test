export class Constants {

  public static readonly validEmail =
    "^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$";

}


export const ROUTE_PATH = {
  ABSOLUTE: "",
  USERS: "user",
  DASHBOARD: "dashboard",
  AUTH: "/auth",
  LOGIN: "login",

};
export const USER_ROLE_TYPE = {
  ADMIN: "admin",
  USER: "users",

};

export const API_PATH = {
  AUTHENTICATION: {
    LOGIN: 'users',
    LOGOUT: 'users',
  },
  
}

