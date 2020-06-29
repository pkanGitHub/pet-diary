import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from './layouts/NavBar'
import Home from './Home'
import PetsPage from './PetsPage'
import DiariesPage from './DiariesPage'

const App = () => {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/pets" component={PetsPage} />
                <Route exact path="/diaries" component={DiariesPage} />
                {/* <Route component={PageNotFound} /> */}
            </Switch>
        </div>
    )
}

export default App;