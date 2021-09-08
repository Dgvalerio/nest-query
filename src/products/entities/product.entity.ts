import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType, Field, ID, GraphQLISODateTime } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Product {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @FilterableField()
  name: string;

  @Column()
  @Field()
  description: string;

  @Column()
  @FilterableField()
  quantity: number;

  @CreateDateColumn()
  @Field(() => GraphQLISODateTime)
  createdAt: string;

  @UpdateDateColumn()
  @Field(() => GraphQLISODateTime)
  updatedAt: string;

  @DeleteDateColumn()
  @Field(() => GraphQLISODateTime, { nullable: true })
  deletedAt: string;
}
