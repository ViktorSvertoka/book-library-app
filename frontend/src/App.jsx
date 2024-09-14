import BookList from "/src/components/BookList/BookList";
import BookForm from "/src/components/BookForm/BookForm";
import Filter from "/src/components/Filter/Filter";
import Error from "/src/components/Error/Error";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Book Library App</h1>
      </header>
      <main className="app-main">
        <div className="app-left-column">
          <BookForm />
        </div>
        <div className="app-right-column">
          <Filter />
          <BookList />
        </div>
      </main>
      <Error />
    </div>
  );
}

export default App;
