import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class <%= kebabToPascal(config.name) %> {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;
  
}