import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { Todo } from './entity/todo.entity';
import { TodoService } from './todo.service';

//The Resolver decorator is equal to Controller in rest full api
@Resolver()
export class TodoResolver {

    constructor(
        private readonly todoService: TodoService,
    ){}

    @Query( () => [ Todo ], { name: 'todos' } )
    findAll(): Todo[] {
        return this.todoService.findAll();
    }

    // @Query()
    // findOne() {
        
    // }

    // @Mutation()
    // createTodo() {
        
    // }

    // @Mutation()
    // updateTodo() {
        
    // }

    // @Mutation()
    // deleteTodo() {
        
    // }

}
