import { Route, Routes } from 'react-router-dom';
import LandingLayout from '../layouts/landing';
import LandingPage from '../pages/Static/Landing';

function LandingLayoutRouter() {
    return (
        <Routes>
            <Route element={<LandingLayout />}>
                <Route path="/landing" element={<LandingPage />} />
            </Route>
        </Routes>
    );
}

export default LandingLayoutRouter;
