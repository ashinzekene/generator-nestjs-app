import { Entity, Column, PrimaryGeneratedColumn, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity()
export class <%= kebabToPascal(config.name) %> {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;
}