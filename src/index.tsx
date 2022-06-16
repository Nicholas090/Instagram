import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Store from './store/store';

interface IStoreContext {
	store: Store;
}

const store = new Store();
export const Context = createContext<IStoreContext>({
	store,
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<Context.Provider value={{ store }}>
		{/*<React.StrictMode>*/}
		<BrowserRouter>
			<App />
		</BrowserRouter>
		{/*</React.StrictMode>*/}
	</Context.Provider>,
);
