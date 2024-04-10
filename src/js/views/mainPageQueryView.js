class MainPageQueryView {
  _parentElement = document.querySelector('.query-field');

  getQuery() {
    const query = this._parentElement
      .querySelector('.query-field-form')
      .value.toLowerCase();
    this._clearInput();

    return query;
  }

  _clearInput() {
    this._parentElement.querySelector('.query-field-form').value = '';
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new MainPageQueryView();
