// import logo from './logo.svg';
import './App.css';
import Application from "./components/Application";
import UserProvider from "./providers/UserProvider";

function App() {
  return (
    <div className="bg" >
      <UserProvider>
        <Application />
      </UserProvider>
    </div>
  );
}

export default App;
