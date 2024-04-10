class MainPageRegionView {
  _formSelect = document.querySelector('.dropdown-list');

  addHandlerRegion(handler) {
    this._formSelect.addEventListener(
      'click',
      function (e) {
        e.preventDefault();
        if (!e.target.classList.contains('dropdown-list-item')) return;

        const key = e.target.innerText.toLowerCase();
        handler(key);
      }.bind(this)
    );
  }
}

export default new MainPageRegionView();
