//import de css comum a todas as páginas
import './App.css';

// import de React 
import React, {Component} from 'react'

//import de routes
import AppRoutes from './routes';

//***

class App extends Component {  
    constructor(props) {    
        super(props);    
        this.state = {}    
        this.connecToServer = this.connecToServer.bind(this);  
    } 
    connecToServer() {    
        fetch('/');  
    } 
    componentDidMount() {
        this.connecToServer();
    } render() {
        return (<AppRoutes />)
    }
}


//function App() {
//   return (
//         <AppRoutes />
//   )
//}



export default App;
