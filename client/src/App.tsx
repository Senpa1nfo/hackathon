import { Route, Routes } from "react-router-dom";

import Main from "./pages/Main";
import Header from "./components/Header";
import Archeology from "./pages/Archeology";
import Architecture from "./pages/Architecture";
import Attractions from "./pages/Attractions";
import Ceremonies from "./pages/Ceremonies";
import FormsOfExpression from "./pages/FormsOfExpression";
import HistoricalArtifacts from "./pages/HistoricalArtifacts";
import HistoricalMonuments from "./pages/HistoricalMonuments";
import Holidays from "./pages/Holidays";
import KnowledgeAndSkills from "./pages/KnowledgeAndSkills";
import Manners from "./pages/Manners";
import Materials from "./pages/Materials";
import OralTraditions from "./pages/OralTraditions";
import PerformingArts from "./pages/PerformingArts";
import WorksOfArt from "./pages/WorksOfArt";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/archeology' element={<Archeology/>}/>
          <Route path='/architecture' element={<Architecture/>}/>
          <Route path='/attractions' element={<Attractions/>}/>
          <Route path='/ceremonies' element={<Ceremonies/>}/>
          <Route path='/forms-of-expression' element={<FormsOfExpression/>}/>
          <Route path='/historical-artifacts' element={<HistoricalArtifacts/>}/>
          <Route path='/historical-monuments' element={<HistoricalMonuments/>}/>
          <Route path='/holidays' element={<Holidays/>}/>
          <Route path='/knowledge-and-skills' element={<KnowledgeAndSkills/>}/>
          <Route path='/manners' element={<Manners/>}/>
          <Route path='/materials' element={<Materials/>}/>
          <Route path='/oral-traditions' element={<OralTraditions/>}/>
          <Route path='/performing-arts' element={<PerformingArts/>}/>
          <Route path='/works-of-art' element={<WorksOfArt/>}/>
      </Routes>
    </>
  );
}

export default App;
