import View from './View.js';
import articleView from './articleView.js';

class ResultsView extends View {
  _parentElement = document.querySelector('.countries');
  _errorMessage = `We could not find that Country. Kindly check your internet connection or try another name!`;
  _message = '';

  _generateMarkup() {
    this.defaultSetup();

    return this._data.map(result => articleView.render(result, false)).join('');
  }
}

export default new ResultsView();
