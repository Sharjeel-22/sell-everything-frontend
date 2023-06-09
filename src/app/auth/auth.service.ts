import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userRole: string; // Assuming the user role is stored as a string property

  constructor() {
    // Initialize the user role when the service is instantiated
    this.userRole = 'user';
  }

  // Set the user role
  setUserRole(role: string): void {
    this.userRole = role;
  }

  // Get the user role
  getUserRole(): string {
    return this.userRole;
  }
  isAuthenticated(){
    return true;
  }
}
