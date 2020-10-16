import React, {Component} from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      usuarios: [
        {
          name: 'Miguel',
          email: 'mapra99@gmail.com',
          url: 'miguel.com'
        },
        {
          name: 'Miguel',
          email: 'mapra99@gmail.com',
          url: 'miguel.com'
        }
      ]
    }
  }
  
  ponerFilas = () => [
    this.state.usuarios.map(usuario => (
      <tr>
        <td>{usuario.name}</td>
        <td>{usuario.email}</td>
        <td>{usuario.url}</td>
      </tr>
    ))
  ]

  render() {
    return (
      <div className="margen">
        <table className="tabla">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            {this.ponerFilas()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;
