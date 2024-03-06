import { BrowserRouter} from "react-router-dom";
import Header from "./Components/Header";
import { StyledContainer } from "./UI/ContainerStyle";
import Router from "./Router";
import NotFoundPage from "./Pages/Error404";
import Footer from "./Components/Footer";
import { UserProfile } from "./Pages/UserProfile";
import SignUp from './Pages/SignUp';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <StyledContainer>
          <Router />
        </StyledContainer>
        
      </BrowserRouter>
    </>
  );
}

export default App;
