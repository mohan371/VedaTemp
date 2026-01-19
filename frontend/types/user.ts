/**
 * User-related type definitions
 * Optimized for frontend-only usage
 */

// Basic User Type for UI/Mock Data
export type UserRole = "Student" | "Admin";
export type UserStatus = "New" | "Contacted" | "InProcess" | "Closed";
export type UserInterest = "StudyAbroad" | "Job";

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: UserRole;
  status: UserStatus;
  interest?: UserInterest;
  preferredCountry?: string;
  qualification?: string;
  resumeUrl?: string;
  notes?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface UsersResponse {
  users: User[];
}



