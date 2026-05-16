import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import TaskList from './components/TaskList';
import Dashboard from './components/Dashboard';

function Routing(){

    return(
        <BrowserRouter>
            <Routes>
                <Route
                path="/"
                    element={<Login />}
                />
                <Route
                    path="/register"
                    element={<Register />}
                />
                <Route
                    path="/tasks/create"
                    element={<Dashboard/>}
                />
                <Route
                    path="/tasks"
                    element={<TaskList />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;