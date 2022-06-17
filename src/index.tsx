import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Store from './store/store';
import { Provider } from 'react-redux';
import { storeRedux } from './redux/store';
interface IStoreContext {
	store: Store;
}

const store = new Store();
export const Context = createContext<IStoreContext>({
	store,
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		{/*<Context.Provider value={{ store }}>*/}
		<Provider store={storeRedux}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
		{/*</Context.Provider>*/}
	</React.StrictMode>,
);
