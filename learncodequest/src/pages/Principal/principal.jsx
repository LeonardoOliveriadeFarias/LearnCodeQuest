import { useLocation } from 'react-router-dom';
import './styles.css';

export const Principal = () => {
    const {state} = useLocation();
    //const { userId, userName, userLevel, learnPoints } = user;
    const userData = state;
    console.log(userData.userData.name);
    return <h1>Bem vindo de volta, {userData.userData.name}</h1>
}

export default Principal;