import { FinalProjectNg2Page } from './app.po';

describe('final-project-ng2 App', () => {
  let page: FinalProjectNg2Page;

  beforeEach(() => {
    page = new FinalProjectNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
