import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Correct module for testing HTTP
import { ResourceService } from './resource.service'; // Ensure this is a service

describe('ResourceService', () => {
  let service: ResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Import the module for HTTP testing
      providers: [ResourceService], // Provide the service here
    });
    service = TestBed.inject(ResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
