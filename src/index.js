import ReactDOM from "react-dom";
import App from "./components/App";
import { Toaster } from 'react-hot-toast';
import { Provider } from "react-redux";
import { store } from "./redux/store";
ReactDOM.render(
    <div>
    <Provider store={store}>
    <App />
    <Toaster/>
    </Provider>
    </div>,
    document.getElementById("root")
);