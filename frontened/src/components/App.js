import React from 'react'
// import { selectDiary } from '../redux/actions/index'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'

const App = () => {
    return (
        // <NavLink />
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                {/* <Route exact path="/" component={AddPet} />
                    <Route exact path="/" component={Diary} /> */}
            </Switch>
        </div>
    )
}

export default App;