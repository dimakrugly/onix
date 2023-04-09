import React from 'react';
import { Route, Routes } from 'react-router';
import Home from '../../pages/home/Home';
import { Home2 } from '../../pages/home/Home2';
import StarDB from '../../pages/starDB/StarDB';

export const Navigation = () => (
  <Routes>
    <Route path="/onix" element={<Home />} />
    <Route path="/onix1" element={<Home2 />} />
    <Route path="/swapi" element={<StarDB />} />
  </Routes>
);
