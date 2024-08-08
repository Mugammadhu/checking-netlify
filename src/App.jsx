import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { Books } from "./Books";
import { Book } from "./Book";
import { NewBook } from "./NewBook";
import { OldBook } from "./OldBook";
import { Notfound } from "./Notfound";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/books" element={<Books />} />

        <Route path="/books">
          <Route path=":id" element={<Book />} />
          <Route path="newbook" element={<NewBook />} />
          <Route path="oldbook" element={<OldBook />} />
        </Route>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </>
  );
};

export default App;
