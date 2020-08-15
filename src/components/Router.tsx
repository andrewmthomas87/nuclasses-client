import * as React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

const Router = () => (
	<BrowserRouter>
		<Route path='/' exact render={() => <span>Hello world</span>} />
	</BrowserRouter>
)

export default Router
