import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { StorageServiceService } from './storageService/storage-service.service';

describe('AdminGuard', () => {
  let guard: AdminGuard;
  let mockRouter: Router;
  let mockStorageService: StorageServiceService;

  beforeEach(() => {
    mockRouter = jasmine.createSpyObj('Router', ['navigateByUrl']);
    mockStorageService = jasmine.createSpyObj('StorageServiceService', ['getSession']);

    TestBed.configureTestingModule({
      providers: [
        AdminGuard,
        { provide: Router, useValue: mockRouter },
        { provide: StorageServiceService, useValue: mockStorageService }
      ],
    });

    guard = TestBed.inject(AdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should navigate to user resource page if userRole is "user"', () => {
    (mockStorageService.getSession as jasmine.Spy).and.returnValue('user');

    const result = guard.canActivate();

    expect(result).toBeFalse();
    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/home/user-resource');
  });

  it('should allow navigation if userRole is not "user"', () => {
    (mockStorageService.getSession as jasmine.Spy).and.returnValue('admin');

    const result = guard.canActivate();

    expect(result).toBeTrue();
  });
});
