import { Route } from "react-router-dom";
import AppleHome from "./pages/Apple/AppleHome";
import Initalize from "./pages/Initialize/Initiallize";

function App() {
  return (
    <div>
      <Route exact path="/" component={Initalize} />
      <Route path="/apple" component={AppleHome} />
    </div>
  );
}

export default App;
