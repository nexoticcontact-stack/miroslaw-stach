import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Navigation } from "../Common/Navigation/navigation";
import { Footer } from "../Common/Footer/footer";
import { Home } from "../Features/Home/home";
import { Services } from "../Features/Services/services";
import { Realisations } from "../Features/Realisations/realisations";
import { Contact } from "../Features/Contact/contact";


function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/home"><Home /></Route>
        <Route path="/usługi"><Services /></Route>
        <Route path="/galeria"><Realisations /></Route>
        <Route path="/kontakt"><Contact /></Route>
        <Route path="/"><Redirect to="home" /></Route>
      </Switch>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
