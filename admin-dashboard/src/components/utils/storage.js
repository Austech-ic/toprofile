
export const addTokenTOLocalStorage = (token) => {
    localStorage.setItem("token", JSON.stringify(token));
  };
  export const getTokenTOLocalStorage = () => {
    const token = localStorage.getItem("token");
    if (token) {
      return JSON.parse(token);
    }
  };
  export const removeTokenFromLocalStorage = () => {
    localStorage.removeItem("token");
  };