import Routes from "./Components/Utils/Routes";
import { useRoutes } from "hookrouter";
import "./App.css";

function App() {
  const routeResult = useRoutes(Routes);
  return routeResult;
}

export default App;
