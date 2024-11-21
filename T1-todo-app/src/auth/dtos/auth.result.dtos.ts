import { User } from "src/entities/user.entity";

class SignInResult {
    token: string;
    user: Partial<User>;

    constructor(token: string, user: Partial<User>) {
        this.token = token;
        this.user = user;
    }
}

export {SignInResult}