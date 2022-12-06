import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {

    @Query( () => String, { name: 'helloWorld', description: 'This field always return a string message!' } )
    hello(): string {
        return 'Hello World'
    }

    @Query( () => Float, { name: 'randomNumber' } )
    getRandomNumber(): number {
        return Math.random() * 100
    }

    @Query( () => Int, { name: 'randomFromZeroTo' } )
    getRandomFromZeroTo(): number {
        return Math.floor( Math.random() * 10 );
    }

    @Query( () => Int, { name: 'randonNumberFromZeroToCustom' } )
    getRandomFromZeroToCustom ( @Args('to', { nullable: true, type: () => Int }) to: number ): number {
        return Math.floor( Math.random() * to )
    }

}
