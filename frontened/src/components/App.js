import React from 'react'
// import { selectDiary } from '../redux/actions/index'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'

import NavBar from './layouts/NavBar'
import DiaryList from './diaries/DiaryList'

const App = () => {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/pets" component={Home} />
                <Route exact path="/diaries" component={DiaryList} />
                {/* <Route exact path="/add-diary" component={DiaryForm} /> */}
            </Switch>
        </div>
    )
}

export default App;