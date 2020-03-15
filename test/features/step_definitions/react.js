const { register } = require('react-cucumber');
// require your components here, for example:
const { NavBar } = require('../../../src/components/NavBar/nav-bar.component.js');
const {LoginComponent} = require('../../../src/containers/Login/login.component.js');

register([
    NavBar,
    LoginComponent

]);