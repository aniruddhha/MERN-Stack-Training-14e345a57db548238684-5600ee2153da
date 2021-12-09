import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <div> <Link to='/invoice/12'>Click Here For Invoice</Link> </div>
      <div> <Link to='/expense'>Click Here For Expense</Link> </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
