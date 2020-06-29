import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2><img src={logo} className="App-logo" alt="logo"/><span className="aa">M.A.S.K.</span></h2>
                </div>
                <ParametreList name="reno"/>
            </div>
        );
    }
}

class ParametreList extends React.Component {

    state = {
        parametres: []
    }

    componentDidMount() {

        fetch('http://localhost:8080/parametre/all')
            .then(response => response.json())
            .then(data => {
                this.setState({parametres: data})
            })
            .catch(console.error)
    }


    render() {

        return (
            <div className="parametre-list">
                <h1>Liste des parametres</h1>
                <hr/>
                <table>
                    <thead>
                    <tr>
                        <th>clef</th>
                        <th>valeur</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.parametres.map(parametre => (
                        <tr key={parametre.identifiant}>
                            <td>{parametre.cle}</td>
                            <td>{parametre.valeur}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <hr/>
            </div>
        );
    }
}

export default App;