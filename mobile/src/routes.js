import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

import Main from './pages/Main';
import Profile from './pages/Profile';
import Dev from './pages/Dev';

const Routes = createAppContainer(createStackNavigator({
    Main: {
        screen: Main,
        navigationOptions: {
            title: 'DevRadar',
            animationEnabled:true
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            title: 'Perfil no Github',
        }
    },
    Dev:{
        screen: Dev,
        navigationOptions: {
            title: 'Novo Dev'
        }
    }
}, {
    defaultNavigationOptions: {
        headerTintColor: '#FFF',
        headerBackTitleVisible: false,
        headerStyle: {
            backgroundColor: '#7D40E7'
        }
    }
}));

export default Routes;