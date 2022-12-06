import { Injectable } from '@nestjs/common';
import { Todo } from './entity/todo.entity';

@Injectable()
export class TodoService {

    private todos: Todo[] = [
        { id: 1, description: 'Repaso de GraphQL', status: false },
        { id: 2, description: 'Ajustar Backend de WalletApp con GraphQL', status: false },
        { id: 3, description: 'Ajustar Frontend de WalletApp con GraphQL', status: false },
    ];

    findAll(): Todo[] {
        return this.todos;
    }

}
