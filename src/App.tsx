import Footer from "./components/Footer";
import Context from "./context/Context";
import MainRoutes from "./routes/mainRoutes";
import { GlobalStyle } from "./style/globalStyle";

function App() {
  return (
    <>
      <Context>
        <GlobalStyle />
        <MainRoutes />
        <Footer />
      </Context>
    </>
  );
}

export default App;
