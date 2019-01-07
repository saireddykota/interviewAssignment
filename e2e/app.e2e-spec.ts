import { InterviewAssignmentPage } from './app.po';

describe('interview-assignment App', () => {
  let page: InterviewAssignmentPage;

  beforeEach(() => {
    page = new InterviewAssignmentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
