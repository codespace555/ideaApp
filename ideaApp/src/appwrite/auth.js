import conf from "../config/conf";
import { Client, Account, ID } from "appwrite";
export class AuthService {
  client = new Client();
  constructor() {
    this.client
      .setEndpoint(conf.APPWRITE_URL)
      .setProject(conf.APPWRITE_PROJECT_ID);
    this.account = new Account(this.client);
  }
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getcurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      throw error;
    }

    return null;
  }

  async logout() {
    try {
      await this.account.deleteSession();
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();
export default authService;
