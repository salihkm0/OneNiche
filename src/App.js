import { BrowserRouter} from "react-router-dom";
import Header from "./Components/Header";
import { StyledContainer } from "./UI/ContainerStyle";
import Router from "./Router";

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
