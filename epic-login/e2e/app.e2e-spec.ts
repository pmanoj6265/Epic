import { EpicLoginPage } from './app.po';

describe('epic-login App', () => {
  let page: EpicLoginPage;

  beforeEach(() => {
    page = new EpicLoginPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
