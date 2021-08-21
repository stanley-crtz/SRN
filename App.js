import Express from 'express';
import Path from 'path';
import bodyParser from 'body-parser';
import RoutesBackend from './Backend/Routes/Routes.js';
import Routes from './Frontend/Routes/Routes.js';

const App = Express();

App.use(bodyParser.urlencoded({extended:true}));
App.use(bodyParser.json());

App.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

App.use('/', Routes);

App.use('/api/', RoutesBackend);

App.use(Express.static(Path.join(Path.resolve(), 'Frontend', 'Views')));
App.use(Express.static(Path.join(Path.resolve(), 'Frontend', 'Styles')));
App.use(Express.static(Path.join(Path.resolve(), 'Frontend', 'Images')));

export default App;