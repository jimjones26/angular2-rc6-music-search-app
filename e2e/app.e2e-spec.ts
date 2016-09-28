import { Angular2Rc6MusicSearchAppPage } from './app.po';

describe('angular2-rc6-music-search-app App', function() {
  let page: Angular2Rc6MusicSearchAppPage;

  beforeEach(() => {
    page = new Angular2Rc6MusicSearchAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
