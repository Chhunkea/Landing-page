import { BrowserRouter } from 'react-router-dom';
import LandingLayoutRouter from './routers/LandingLayoutRouter';

function App() {
    return (
        <BrowserRouter>
            <LandingLayoutRouter />
        </BrowserRouter>
    );
}

export default App;
