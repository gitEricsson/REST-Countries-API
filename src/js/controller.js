import * as model from './model.js';
import { MODAL_CLOSE_SEC } from './config.js';
import resultsView from './views/resultsView';
import mainPageQueryView from './views/mainPageQueryView';
import mainPageRegionView from './views/mainPageRegionView';
import darkModeView from './views/darkModeView.js';
import secondaryPageView from './views/secondaryPageView.js';
import secondarySection from './views/secondarySection.js';
import mainSection from './views/mainSection.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

if (module.hot) {
  module.hot.accept();
}

const controlHomePageAll = async function () {
  try {
    // 1) Load Spinner
    resultsView.renderSpinner();

    // 2) Load all Countries
    await model.loadResults('all', '');

    // 3) Render results
    resultsView.render(model.state.search.resultsAll);
  } catch (err) {
    resultsView.renderError(
      "Search couldn't complete! Kindly check your connection and try again :)"
    );
  }
};

const controlHomePageRegion = async function (key) {
  try {
    // 1) Load Spinner
    resultsView.renderSpinner();

    // 2) Load Countries by Region Selected
    await model.loadResults('region', `/${key}`);

    // 3) Render Results
    resultsView.render(model.state.search.resultsRegion);
  } catch (err) {
    resultsView.renderError(
      "Search couldn't complete! Kindly check your connection and try again :)"
    );
  }
};

const controlHomePageQuery = async function () {
  try {
    resultsView.renderSpinner();

    // 1) Get search query
    const query = mainPageQueryView.getQuery();
    if (!query) return;

    // 2) Load search results
    await model.loadResults('name', `/${query}`);

    // 3) Render result
    resultsView.render(model.state.search.resultsQuery);
  } catch (err) {
    resultsView.renderError();
  }
};

const controlDarkMode = () => {
  //1) Change "dark mode" text
  darkModeView.toggleText();

  //2) Change theme
  darkModeView.toggleTheme();
};

const controlSecondaryPage = function () {
  //1) get name of selected country
  const id = decodeURIComponent(window.location.hash.slice(1));
  if (!id) return controlBackToHome();

  //2) search for country's data
  const data = model.searchData(id);

  //3) find country's borders
  const borders = model.searchBorders(data.borders);

  //4) deep copy and add the borders in full
  const newData = model.editData(data, borders);

  //5) hide main
  mainSection.hideDisplay();

  //6) show section
  secondarySection.showDisplay();

  //7) show Spinner
  secondaryPageView.renderSpinner();

  //8) Render
  secondaryPageView.render(newData);
};

const controlBackToHome = function () {
  // 1) return window.location to default
  history.pushState('', '', window.location.pathname);

  //2) toggle display
  secondarySection.toggleDisplay();
  mainSection.toggleDisplay();
};

const init = function () {
  history.pushState('', '', window.location.pathname);

  resultsView.addHandlerRender(controlHomePageAll);
  mainPageRegionView.addHandlerRegion(controlHomePageRegion);
  mainPageQueryView.addHandlerSearch(controlHomePageQuery);
  darkModeView.addHandlerClick(controlDarkMode);
  secondaryPageView.addHandlerRender(controlSecondaryPage);
  secondaryPageView.addHandlerReturn(controlBackToHome);
};
init();
