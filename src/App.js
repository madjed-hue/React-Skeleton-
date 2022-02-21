import Articles from "./components/Articles";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <header>
        <h1>React Skeletons</h1>
      </header>
      <div className="content">
        <Articles />
        <Profile />
      </div>
    </div>
  );
}

export default App;
