import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dogs from "./Dogs"
import Cats from "./Cats"
import Sheeps from ".Sheeps"
import Goats from ".Goats"
function App() {
return (
<Router>
<navbar />
<Switch>
<Route path='/' exact component={Dogs} />
<Route path='/Cats' component={Cats} />
<Route path='/Sheeps' component={Sheeps} />
<Route path='/Goats' component={Goats} />
</Switch>
</Router>
);
}
export default App;
