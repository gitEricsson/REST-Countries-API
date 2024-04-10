import View from './View.js';

class SecondaryPageView extends View {
  _parentElement = document.querySelector('.clicked__country');
  _errorMessage = `Search couldn't complete! Kindly check your connection and try again :)`;
  _back = document.querySelector('.back');

  addHandlerRender(handler) {
    window.addEventListener('hashchange', handler);
  }

  addHandlerReturn(handler) {
    this._back.addEventListener('click', handler);
  }

  _generateMarkup() {
    this.defaultSetup();

    return `<img class="clicked__country__img" src="${this._data.flag}" alt="${
      this._data.name
    }"/>

    <div class="clicked__country__data">
      <h3 class="clicked__country__name">${this._data.name}</h3>

      <div>
        <p class="clicked__country__row">
          ${
            this._data.nativeName.length > 1 ? 'Native Names' : 'Native Name'
          }: <span>${this._data.nativeName.slice(0, 3).join(', ')}</span>
        </p>
        <p class="clicked__country__row">Population: <span>${
          this._data.population
        }</span></p>
        <p class="clicked__country__row">Region: <span>${
          this._data.region
        }</span></p>
        <p class="clicked__country__row">Sub Region: <span>${
          this._data.subRegion
        }</span></p>
        <p class="clicked__country__row">Capital: <span>${
          this._data.capital
        }</span></p>
        <p class="clicked__country__row">Top Level Domain: <span>${
          this._data.tld
        }</span></p>
        <p class="clicked__country__row">Currencies: <span>${this._data.currencies.join(
          ', '
        )}</span></p>
        <p class="clicked__country__row">Languages: <span>${this._data.languages
          .slice(0, 12)
          .join(', ')}</span></p>
      </div>

      <p class="clicked__country__row">
        Border Countries:<span>${this._data.borders
          .map(this._generateMarkupBorders)
          .join(' ')}</span>
      </p>
    </div>`;
  }

  _generateMarkupBorders(border) {
    if (border === 'nil') return 'nil';

    return `<a href="#${border}"><button class="border__countries">${border}</button></a>`;
  }
}

export default new SecondaryPageView();
