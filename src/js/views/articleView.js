import View from './View.js';

class ArticleView extends View {
  _generateMarkup() {
    return `
    <article class="country">
    <a href="#${this._data.name}">
    <img class="country__img" src="${this._data.flag}" alt="${this._data.name}"/>
    <div class="country__data">
      <h3 class="country__name">${this._data.name}</h3>
      <p class="country__row">
        Population: <span>${this._data.population}</span>
      </p>
      <p class="country__row">Region: <span>${this._data.region}</span></p>
      <p class="country__row">Capital: <span>${this._data.capital}</span></p>
    </div>
    </a>
  </article>
  `;
  }
}

export default new ArticleView();
