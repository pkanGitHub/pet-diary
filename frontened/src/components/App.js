import React from 'react'
import { selectDiary } from '../actions/index'
import { Route, Switch } from 'react-router-dom'

class App extends React.Component() {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/" component={AddPet} />
                    <Route exact path="/" component={Diary} />
                </Switch>
            </div>
        )
    }
}

export default App;