import React from 'react';
import { BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import { Homepage, Headphones, SpeakersPage, EarphonesPage, XX99MarkIIPage, XX99MarkIPage, XX59Page, ZX9Page, ZX7Page,
YX1Page, CheckoutPage } from './pages';
import './App.scss';
import { CartProvider } from './components';

const App = () => (
  <CartProvider>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/headphones" element={<Headphones/>} />
          <Route path="/speakers" element={<SpeakersPage />} />
          <Route path="/earphones" element={<EarphonesPage />} />
          <Route path="/headphones/XX99MarkIIHeadphones" element={<XX99MarkIIPage/>}/>
          <Route path="/headphones/XX99MarkIHeadphones" element={<XX99MarkIPage/>} />
          <Route path="/headphones/XX59Headphones" element={<XX59Page/>} />
          <Route path="/speakers/ZX9Speakers" element={<ZX9Page />} />
          <Route path="/speakers/ZX7Speakers" element={<ZX7Page/>} />
          <Route path="/earphones/YX1WirelessEarphones" element={<YX1Page/>} />
          <Route path="/checkout" element={<CheckoutPage/>} />
      </Routes>
    </BrowserRouter>
  </CartProvider>
);

export default App
