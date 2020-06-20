import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App'
import { Provider as ReduxProvider } from 'react-redux'
import configureStore from './redux/configureStore'

const store = configureStore()

//1. Create Action
//2. Create Reducer
//3. Combine Reducers
//4. Configure Store
//5. Initialize Store
//6. Connect Component to Store
//7. Map actions and state to props
//8. dispatch action

ReactDOM.render(
    <ReduxProvider store={store}>
        <Router>
            <App />
        </Router>
    </ReduxProvider>,
    document.getElementById('root')
)