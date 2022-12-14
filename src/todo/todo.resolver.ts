import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Todo } from './entity/todo.entity';
import { TodoService } from './todo.service';
import { CreateTodoInput } from './dto/inputs/create-todo.input';
import { UpdateTodoInput } from './dto/inputs/update-todo.input';
import { StatusArgs } from './dto/args/status.args';

//The Resolver decorator is equal to Controller in rest full api
@Resolver( () => Todo )
export class TodoResolver {

    constructor(
        private readonly todoService: TodoService,
    ){}

    @Query( () => [ Todo ], { name: 'todos' } )
    findAll(
        @Args() statusArgs: StatusArgs
    ): Todo[] {
        return this.todoService.findAll( statusArgs );
    }

    @Query( () => Todo, { name: 'todo' } )
    findOne( @Args('id', { type: () => Int } ) id: number ): Todo {
        return this.todoService.findOne(id);
    }

    @Mutation( () => Todo, { name: 'createTodo' } )
    createTodo( @Args('createTodoInput') createTodoInput: CreateTodoInput ): Todo {
        return this.todoService.create( createTodoInput )
    }

    @Mutation( () => Todo, { name: 'updateTodo' } )
    updateTodo( @Args('updateTodoInput') updateTodoInput: UpdateTodoInput ): Todo {
        return this.todoService.update( updateTodoInput );
    }

    @Mutation( () => Boolean, { name: 'removeTodo' } )
    removeTodo(@Args('id', { type: () => Int }) id: number) {
        return this.todoService.remove( id );
    }

    //Aggregations
    @Query( () => Int, { name: 'totalTodos' } )
    totalTodos (): number {
        return this.todoService.totalTodos;
    }

    @Query( () => Int, { name: 'completedTodos' } )
    completedTodos (): number {
        return this.todoService.completedTodos;
    }

    @Query( () => Int, { name: 'pendingTodos' } )
    pendingTodos (): number {
        return this.todoService.pendingTodos;
    }

}
