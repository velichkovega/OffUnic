import React from 'react';
import { Route } from "react-router-dom";

import ProjectsList from './projects/ProjectsList.jsx';
import Profile from './profile/Profile.jsx';
import Home from './home/Home.jsx';
import OfficeRooms from './officeRooms/OfficeRooms.jsx';
import ErrorPage from './error/ErrorPage.jsx';

function Routers() {
    return (
        <div>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/profile">
                <Profile />
            </Route>
            <Route path="/projects">
                <ProjectsList />
            </Route>
            <Route path="/rooms">
                <OfficeRooms />
            </Route>
            <Route path="/erorpage">
                <ErrorPage />
            </Route>
        </div>
    )
}

export default Routers;