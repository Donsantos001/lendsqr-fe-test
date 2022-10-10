export interface User {
  email: string;
}

export const addUserToLocalStorage = (user: User) => {
  localStorage.setItem("user", JSON.stringify(user));
};
export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
};
export const getUserFromLocalStorage = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const getUserDetailsFromLocalStorage = () => {
  const user = localStorage.getItem("userDetails");
  return user ? JSON.parse(user) : [];
};

export const addUserDetailsToLocalStorage = (userDetails: any) => {
  localStorage.setItem("userDetails", JSON.stringify(userDetails));
};
