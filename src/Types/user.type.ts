export interface TUser {
  _id: string;
  name: string;
  email: string;
  role?: "user" | "admin";
  phone: string;
  address?: string;
  image?: string;
  status?: "active" | "block";
  passwordChangeAt?: Date;
  isDelete?: boolean;
  createdAt?: string;
  updatedAt?: string;
}
