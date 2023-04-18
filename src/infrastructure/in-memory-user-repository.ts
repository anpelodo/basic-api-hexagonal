import { User } from "../domain/user";
import { UserRepository } from "../domain/user-repository";

const users: User[] = [
  {
    id: "1",
    email: "alber.hello@gmail.com",
  },
  {
    id: "2",
    email: "pepe.hello@gmail.com",
  },
];

export class InMemoryUserRepository implements UserRepository {
  async getById(userId: string): Promise<User | null> {
    const user = users.find((user) => user.id === userId);

    if (!user) {
      return null;
    }

    return new User(user.id, user.email);
  }
}
