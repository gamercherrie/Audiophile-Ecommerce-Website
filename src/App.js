import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Homepage, Headphones, SpeakersPage, EarphonesPage, XX99MarkIIPage, XX99MarkIPage, XX59Page} from './pages';
import './App.scss';

const App = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/headphones" element={<Headphones/>} />
        <Route path="/speakers" element={<SpeakersPage />} />
        <Route path="/earphones" element={<EarphonesPage />} />
        <Route path="/headphones/XX99MarkIIHeadphones" element={<XX99MarkIIPage/>}/>
        <Route path="/headphones/XX99MarkIHeadphones" element={<XX99MarkIPage/>} />
        <Route path="/headphones/XX59Headphones" element={<XX59Page/>} />
      </Routes>
    </BrowserRouter>
);

export default App
