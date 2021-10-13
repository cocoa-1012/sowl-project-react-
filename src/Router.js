import Academy from './Pages/Academy';
import Audit from './Pages/Audit';
import Contact from './Pages/Contact';
import Features from './Pages/Features';
import Home from './Pages/Home';
import HowToBuy from './Pages/HowToBuy';
import Utility from './Pages/Utility';
import VotingPage from './Pages/VotingPage';

const Router = [
	{
		link: '/',
		component: <Home />,
		name: 'Home',
	},
	{
		link: '/Features',
		component: <Features />,
		name: 'Features Page',
	},
	{
		link: '/Utility',
		component: <Utility />,
		name: 'Utility Page',
	},
	{
		link: '/Audit',
		component: <Audit />,
		name: 'Audit',
	},
	{
		link: '/Academy',
		component: <Academy />,
		name: 'Academy Page',
	},
	{
		link: '/Contact',
		component: <Contact />,
		name: 'Contact Page',
	},
	{
		link: '/Voting',
		component: <VotingPage />,
		name: 'Voting Page',
	},
	{
		link: '/HowToBuy',
		component: <HowToBuy />,
		name: 'HowToBuy Page',
	},
];

export default Router;
