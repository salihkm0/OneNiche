import { BrowserRouter} from "react-router-dom";
import Header from "./Components/Header";
import { StyledContainer } from "./UI/ContainerStyle";
import Router from "./Router";
import Footer from "./Components/Footer";
import ProductList from "./Pages/ProductList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <StyledContainer>
          <Router />
        </StyledContainer>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
