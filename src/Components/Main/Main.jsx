import React from 'react'
import { Routes, Route } from "react-router-dom";
import { ItemDetailConteirner } from '../ItemDetailConteiner/ItemDetailConteirner';
import { ItemListConteiner } from '../ItemListConteiner/ItemListConteiner';

export const Main = () => {
  return (
    <Routes>
        <Route path="/" element={ItemListConteiner} />
        <Route path="/category/:category" element={ItemDetailConteirner} />
    </Routes>
  )
}
