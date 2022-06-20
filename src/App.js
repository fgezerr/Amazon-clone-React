import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from "./Header"
import Checkout from './Checkout';
import Home from './Home';
import Login from './Login';

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Homee/>} />
        <Route path="Checkout" element={<Checkoutt /> } />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

function Homee() {
  return (
    <>
      <main>
      <Header/>
      <Home/>
      
      </main>
    </>
  );
} 

function Checkoutt() {
  return (
    <>
      <main>
      <Header />
      <Checkout/>
      </main>
    </>
  );
}

