import ReactDOM from "react-dom";
import App from "./components/App";
import { Toaster } from 'react-hot-toast';
import AllAcnes from "./components/acnes";
ReactDOM.render(
    <div>
    <App />
    <Toaster/>
    </div>,
    document.getElementById("root")
);