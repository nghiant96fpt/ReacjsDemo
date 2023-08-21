import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Views/Login";
import Register from "./Views/Register";

// class App extends React.Component{

//   componentDidMount(): void {

//   }

//   componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {

//   }

//   render(): React.ReactNode {
//     return
//   }

// }

//props dữ liệu từ bên ngoài component truyền vào. props không thể thay đổi
//state dữ liệu local phía bên trong component. state có thể thay đổi có dùng setState({key: value}) trong class component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
