import React from "react"
import "./app.style.css"

import "@ionic/react/css/core.css"
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css"
import "@ionic/react/css/structure.css"
import "@ionic/react/css/typography.css"

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css"
import "@ionic/react/css/float-elements.css"
import "@ionic/react/css/text-alignment.css"
import "@ionic/react/css/text-transformation.css"
import "@ionic/react/css/flex-utils.css"
import "@ionic/react/css/display.css"

import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react"
import { IonReactRouter } from "@ionic/react-router"
import { Route } from "react-router-dom"

import SplashPage from "../pages/splash/splash-page"
import HomePage from "../pages/home/home-page"
import PostIncidentPage from "../pages/post-incident/post-incident-page"

setupIonicReact()

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonRouterOutlet>
                <Route path="/" exact component={SplashPage} />
                <Route path="/home" exact component={HomePage} />
                <Route
                    path="/post-incident"
                    exact
                    component={PostIncidentPage}
                />
            </IonRouterOutlet>
        </IonReactRouter>
    </IonApp>
)

export default App
