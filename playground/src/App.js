import { Route } from "react-router-dom";
import AppleHome from "./pages/Apple/AppleHome";
import Initalize from "./pages/Initialize/Initiallize";
import TodoList from "./pages/TodoList/TodoList";

function App() {
  return (
    <div>
      <Route exact path="/" component={Initalize} />
      <Route path="/apple" component={AppleHome} />
      <Route path="/todoLIst" component={TodoList} />
    </div>
  );
}

export default App;
