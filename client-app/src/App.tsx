/* eslint-disable react-hooks/exhaustive-deps */
import { Route, Routes } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Context } from ".";

import Main from "./pages/Main";
import Grade from "./pages/Grade";
import Header from "./components/Header";
import AdminPanel from "./pages/AdminPanel";
import GradeParagraph from "./pages/GradeParagraph";

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
          <Route path='/grade/:grade' element={<Grade/>}/>
          <Route path='/grade/:grade/:path' element={<GradeParagraph/>}/>
          <Route path='/grade/:grade/:path/:id' element={<GradeParagraph/>}/>
      </Routes>
    </>
  );
}

export default App;
