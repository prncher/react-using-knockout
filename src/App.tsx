import * as React from 'react';
import './App.css';
import { TestComp } from './task-list/index';
import logo from './logo.svg';
import * as ko from 'knockout';
import { GiftModel } from './task-list/giftModel';

// Activate jQuery Validation
// $("form").validate({ submitHandler: viewModel.save });

class App extends React.Component {
  componentDidMount() {
    const form = document.getElementsByTagName('form')[0];
    const ar = [
      { name: 'Tall Hat', price: '39.95' },
      { name: 'Long Cloak', price: '120.00' }
    ];
    const viewModel = new GiftModel(ar);
    ko.applyBindings(viewModel, document.getElementById('root'));
    form.addEventListener('submit', viewModel.save, false);
  }
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React and KO</h1>
        </header>
        <p className="App-intro">
          The one below is a compound react-ko component
        </p>
        <TestComp username={'Prince'} />
      </div>
    );
  }
}

export default App;
