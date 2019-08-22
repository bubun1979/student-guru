import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/Header';
import AdminDashboard from '../components/admin/AdminDashboard'
import StudentManagement from '../components/admin/StudentManagement'
import NoPageFound from '../components/NoPageFound'

const AppRouter = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" component={AdminDashboard} exact={true} />
            <Route path="/students" component={StudentManagement} />
            <Route component={NoPageFound} />
        </Switch>
    </BrowserRouter>
)

export default AppRouter