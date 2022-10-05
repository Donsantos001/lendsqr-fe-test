import axios from "axios";
import { QueryClient, QueryKey } from "react-query";
// import { getUserFromLocalStorage } from "./localStorage";

const URL = process.env.REACT_APP_LENDSQR_CLIENT_URL;

export const AppSetup = () => {
  axios.defaults.baseURL = `${URL}`;
  axios.defaults.headers.post["Content-Type"] = "application/json";
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }: { queryKey: QueryKey }) => {
        const { data } = await axios.get(`${URL}${queryKey[0]}`);
        return data;
      },
    },
  },
});
