class DarkModeView {
  _parentElement = document.querySelector('header');
  _parentElement1 = document.querySelector('.dark--mode');
  _parentElement2 = document.querySelector('.light--mode');
  _body = document.querySelector('body');

  toggleText() {
    this._parentElement1.classList.toggle('hide');
    this._parentElement2.classList.toggle('hide');
  }

  toggleTheme() {
    this._body.classList.toggle('dark');
  }

  addHandlerClick(handler) {
    this._parentElement.addEventListener(
      'click',
      function (e) {
        e.preventDefault();

        if (!e.target.closest('.background__mode')) return;

        handler();
      }.bind(this)
    );
  }
}

export default new DarkModeView();
