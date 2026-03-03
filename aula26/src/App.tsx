import { BrowserRouter, Route, Routes } from "react-router-dom";


import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";
import Contato from "./pages/Contato/Contato";
import QuemSomos from "./pages/QuemSomos/QuemSomos";
import Faq from "./pages/Faq/Faq";
import Layout from "./compenents/Layout/Layout";

const App = () =>{
  return(
    <>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={ <Layout /> } >
                <Route index element={ <Home /> } />
                <Route path="/sobre" element={ <Sobre /> } />
                <Route path="/quem-somos" element={ <QuemSomos /> } />
                <Route path="/meu-contatinho" element={ <Contato /> } />
                <Route path="/faq" element={ <Faq /> } />
              </Route>
            </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;