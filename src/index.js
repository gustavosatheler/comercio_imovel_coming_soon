import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import indexRoutes from 'routes/index.jsx'

import 'assets/scss/material-kit-react.css?v=1.3.0'

ReactDOM.render(
	<Router>
		<Switch>
			{indexRoutes.map((prop, key) => {
				return <Route path={prop.path} key={key} component={prop.component} />
			})}

			<Redirect to="/" />
		</Switch>
	</Router>,
	document.getElementById('app')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()
