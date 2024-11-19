import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: 1, name: 'Snake Plant', price: 25, category: 'Easy Care', thumbnail: 'snake-plant.jpg' },
    { id: 2, name: 'Monstera', price: 40, category: 'Tropical', thumbnail: 'monstera.jpg' },
    { id: 3, name: 'Peace Lily', price: 30, category: 'Flowering', thumbnail: 'peace-lily.jpg' },
    { id: 4, name: 'Cactus', price: 20, category: 'Easy Care', thumbnail: 'cactus.jpg' },
    { id: 5, name: 'Orchid', price: 50, category: 'Flowering', thumbnail: 'orchid.jpg' },
    { id: 6, name: 'Fiddle Leaf Fig', price: 60, category: 'Tropical', thumbnail: 'fiddle-leaf.jpg' },
];

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
});

export default productSlice.reducer;
