import React from 'react'
// import { selectDiary } from '../redux/actions/index'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'

import NavBar from './layouts/NavBar'
import DiariesPage from './DiariesPage'
import DiaryForm from './diaries/DiaryForm'

const App = () => {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/pets" component={Home} />
                <Route exact path="/diaries" component={DiariesPage} />
                <Route exact path="/add-diary" component={DiaryForm} />
                {/* <Route component={PageNotFound} /> */}
            </Switch>
        </div>
    )
}

export default App;