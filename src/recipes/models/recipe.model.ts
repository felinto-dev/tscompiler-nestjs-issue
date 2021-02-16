import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Recipe {
  @Field(type => ID)
  id: string;

  title: string;

  description?: string;

  creationDate: Date;

  ingredients: string[];
}
