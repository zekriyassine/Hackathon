// ACTIONS
const addAction1 = {
    type: 'ADD1',
 };
 
 const removeAction1 = {
    type: 'REMOVE1',
 };
 const addAction10 = {
    type: 'ADD10',
 };
 const removeAction10 = {
    type: 'REMOVE10'
 }
 const resetAction = {
    type: 'RESET'
 }
 
 // REDUCER 
 const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'ADD1':
            return state + 1;
        case 'REMOVE1':
            return state - 1;
         case 'ADD10':
             return state + 10;
         case 'REMOVE10':
             return state - 10;
         case 'RESET':
            return state *0;
        default:
            return state;
    }
 }
 
 // STORE
 const { createStore } = Redux;
 const store = createStore(counterReducer);
 
 
 // MAIN
 const renderStore = document.getElementById('render-store');
 const render = () => {
    renderStore.innerHTML = store.getState();
 }
 
 store.subscribe(render);
 render();
 
 const add1 = document.getElementById('add1');
 add1.addEventListener('click', () => {
    store.dispatch(addAction1)
 });
 
 const remove1 = document.getElementById('remove1');
 remove1.addEventListener('click', () => {
    store.dispatch(removeAction1)
 });
 const add10 = document.getElementById('add10');
 add10.addEventListener('click', () => {
    store.dispatch(addAction10)
 });
 const remove10 = document.getElementById('remove10');
 remove10.addEventListener('click', () => {
    store.dispatch(removeAction10)
 });
 const reset = document.getElementById('reset');
 reset.addEventListener('click', () => {
    store.dispatch(resetAction)
 });