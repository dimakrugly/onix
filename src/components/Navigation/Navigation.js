import React from 'react';
import { Route, Routes } from 'react-router';
import HomeClasses from '../../pages/home/HomeClasses';
import { Home } from '../../pages/home/Home';
import StarDB from '../../pages/starDB/StarDB';

export const Navigation = () => (
  <Routes>
    <Route path="/onix" element={<Home />} />
    <Route path="/onix1" element={<HomeClasses />} />
    <Route path="/swapi" element={<StarDB />} />
  </Routes>
);
