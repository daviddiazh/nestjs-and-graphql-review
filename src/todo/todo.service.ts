import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './entity/todo.entity';
import { CreateTodoInput } from './dto/inputs/create-todo.input';
import { UpdateTodoInput } from './dto/inputs/update-todo.input';
import { StatusArgs } from './dto/args/status.args';

@Injectable()
export class TodoService {

    private todos: Todo[] = [
        { id: 1, description: 'Repaso de GraphQL', status: false },
        { id: 2, description: 'Ajustar Backend de WalletApp con GraphQL', status: false },
        { id: 3, description: 'Ajustar Frontend de WalletApp con GraphQL', status: false },
    ];

    findAll( statusArgs: StatusArgs ): Todo[] {
        const { status } = statusArgs;

        if( status !== undefined ) {
            return this.todos.filter(todo => todo.status === status)
        }

        return this.todos;
    }

    findOne(id: number): Todo {
        const todo = this.todos?.find(todo => todo.id === id);

        if( !todo ){
            throw new NotFoundException(`TODO ${id} no encontrado...`);
        }

        return todo;
    }

    create (createTodoInput: CreateTodoInput): Todo {
        const newTodo = new Todo();
        newTodo.description = createTodoInput.description;
        newTodo.id = Math.max( ...this.todos.map(todo => todo.id), 0 ) + 1;

        this.todos.push( newTodo )

        return newTodo
    }


    update(updateTodoInput: UpdateTodoInput): Todo {
        const todoToUpdate = this.findOne( updateTodoInput.id );

        if( updateTodoInput.description ) todoToUpdate.description = updateTodoInput.description;
        if( updateTodoInput.status !== undefined ) todoToUpdate.status = updateTodoInput.status;

        this.todos.map( todo => {
            return ( todo.id === updateTodoInput.id ) ? todoToUpdate : todo
        })

        return todoToUpdate;
    }

    remove(id: number): Boolean {
        const todo = this.findOne( id );

        this.todos = this.todos.filter(todo => todo.id !== id);

        return true;
    }

}
