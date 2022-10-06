export interface User {
    email: string;
  }
  
  export const addUserToLocalStorage = (user: User) => {
    localStorage.setItem('user', JSON.stringify(user));
  };
  export const removeUserFromLocalStorage = () => {
    localStorage.removeItem('user');
  };
  export const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  };
  