import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import router from './Router';

function App() {
	return (
		<Router>
			<Switch>
				{router.map((e, index) => (
					<Route key={'page-' + index} exact path={e.link} children={e.component} />
				))}
				<Route key={'page-noMatch'} path='*'>
					<Redirect to='/error' />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
