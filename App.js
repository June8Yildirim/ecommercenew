import Main from "./Main";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Toast from "react-native-toast-message";
import { toastConfig } from "./utils/toastconfig";

const client = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <Main />
      <Toast config={toastConfig} />
    </QueryClientProvider>
  );
}
