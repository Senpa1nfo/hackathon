/* eslint-disable react-hooks/exhaustive-deps */
import { Route, Routes } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Context } from ".";

import Main from "./pages/Main";
import Grade5 from "./pages/Grade5";
import Grade6 from "./pages/Grade6";
import Grade7 from "./pages/Grade7";
import Grade8 from "./pages/Grade8";
import Grade9 from "./pages/Grade9";
import Grade10 from "./pages/Grade10";
import Grade11 from "./pages/Grade11";
import Header from "./components/Header";
import AdminPanel from "./pages/AdminPanel";

function App() {

  const {storeSubject} = useContext(Context);

  useEffect(() => {
    async function fetchData() {
      await storeSubject.getAll()
    }
    fetchData();
  }, [])

  return (
    <>
      <Header></Header>
      <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/admin-panel' element={<AdminPanel/>}/>
          <Route path='/profile' element={<Main/>}/>
          <Route path='/grade-5' element={<Grade5/>}/>
          <Route path='/grade-6' element={<Grade6/>}/>
          <Route path='/grade-7' element={<Grade7/>}/>
          <Route path='/grade-8' element={<Grade8/>}/>
          <Route path='/grade-9' element={<Grade9/>}/>
          <Route path='/grade-10' element={<Grade10/>}/>
          <Route path='/grade-11' element={<Grade11/>}/>
      </Routes>
    </>
  );
}

export default App;
