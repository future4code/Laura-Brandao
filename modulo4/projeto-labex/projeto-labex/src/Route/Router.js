import { BrowserRouter, Switch, Route } from "react-router-dom";
import AdminHomePage from "../Pages/AdminHomePage";
import ApplicationFormPage from "../Pages/ApplicationFormPage";
import CreateTripPage from "../Pages/CreateTripPage";
import { ErrorPage } from "../Pages/ErrorPage";
import HomePage from "../Pages/HomePage";
import ListTripsPage from "../Pages/ListTripsPage";
import LoginPage from "../Pages/LoginPage";
import TripsDetailsPage from "../Pages/TripDetailsPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <HomePage/>
                </Route>

                <Route exact path={"/trips/list"}>
                    <ListTripsPage />
                </Route>

                <Route exact path={"/trips/application"}>
                    <ApplicationFormPage />
                </Route>

                <Route exact path={"/login"}>
                    <LoginPage />
                </Route>

                <Route exact path={"/admin/trips/list"}>
                    <AdminHomePage />
                </Route>

                <Route exact path={"/admin/trips/create"}>
                    <CreateTripPage />
                </Route>

                <Route exact path={"/admin/trips/:id"}>
                    <TripsDetailsPage />
                </Route>

                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router