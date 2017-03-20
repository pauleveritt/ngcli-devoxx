import {DirectoryService} from './directory.service';

describe('DirectoryService', () => {
  let service: DirectoryService;

  beforeEach(() => {
    service = new DirectoryService();
  });

  it('should exist', () => {
    expect(service).toBeTruthy();
    expect(service.title).toBe('Foo');
  });
});
