import { CssBaseline } from '@material-ui/core'
import * as React from 'react'
import { render } from 'react-dom'
import Router from '~components/Router'

render(
	<>
		<CssBaseline />
		<Router />
	</>,
	document.getElementById('nuclasses')
)
