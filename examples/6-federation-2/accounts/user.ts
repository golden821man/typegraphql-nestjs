import { Field, ObjectType, Directive, ID } from "type-graphql";

@Directive(`@key(fields: "id")`)
@ObjectType()
export default class User {
  @Field(type => ID)
  id!: string;

  @Directive("@shareable")
  @Field()
  username!: string;

  @Field()
  name!: string;

  @Field()
  birthDate!: string;
}
