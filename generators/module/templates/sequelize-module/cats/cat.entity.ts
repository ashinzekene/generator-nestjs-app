import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class <%= kebabToPascal(config.name) %> extends Model<<%= kebabToPascal(config.name) %>> {
  @Column
  name: string;

}
