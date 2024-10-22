import { BrowserRouter } from 'react-router-dom';
import UserHomePageLayoutRouter from './routers/UserHomePageRouter';
import LandingLayoutRouter from './routers/LandingLayoutRouter';
import PaginationLayoutRouter from './routers/PaginationLayoutRouter';
import AuthInitializer from './components/AuthInitializer';
import GlobalSnackBar from './components/GlobalSnackBar';

function App() {
    return (
        <BrowserRouter>
            <AuthInitializer />
            <GlobalSnackBar />
            <UserHomePageLayoutRouter />
            <LandingLayoutRouter />
            <PaginationLayoutRouter />
        </BrowserRouter>
    );
}

export default App;
