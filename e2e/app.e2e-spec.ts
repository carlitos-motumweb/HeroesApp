import { SuperHeroesAPPPage } from './app.po';

describe('super-heroes-app App', () => {
  let page: SuperHeroesAPPPage;

  beforeEach(() => {
    page = new SuperHeroesAPPPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
