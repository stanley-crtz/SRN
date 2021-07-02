import Express from 'express';
import Path from 'path';
import RoutesBackend from './Backend/Routes/Routes.js';
import Routes from './Frontend/Routes/Routes.js';

const App = Express();

App.use('/', Routes);

App.use('/api/', RoutesBackend);

App.use(Express.static(Path.join(Path.resolve(), 'Frontend', 'Views')));
App.use(Express.static(Path.join(Path.resolve(), 'Frontend', 'Styles')));

export default App;