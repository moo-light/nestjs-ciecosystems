import { UsersModule } from "src/apis/users/users.module";
import { AuthModule } from "src/auth/auth.module";
import { TodosModule } from "src/todos/todos.module";

const AppImportModules = [UsersModule, TodosModule,AuthModule];

export { AppImportModules };