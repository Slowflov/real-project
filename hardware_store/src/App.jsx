import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header.jsx";

function App() {
  return (
    <BrowserRouter> {/* Оборачиваем весь App в роутер */}
      <div>
        <Header />
        {/* Другие компоненты сайта */}
      </div>
    </BrowserRouter>
  );
}

export default App;


