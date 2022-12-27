import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Homepage, Headphones, SpeakersPage, EarphonesPage, XX99MarkIIPage } from './pages';
import './App.scss';

const App = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/headphones" element={<Headphones/>} />
        <Route path="/speakers" element={<SpeakersPage />} />
        <Route path="/earphones" element={<EarphonesPage />} />
        <Route path="/headphones/XX99MarkIIHeadphones" element={< XX99MarkIIPage/>}/>
      </Routes>
    </BrowserRouter>
);

export default App
