
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "./styles";


import Home from "./pages/Home"
import Start from "./pages/Start"



function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start/>} />
          <Route path="/Home" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
