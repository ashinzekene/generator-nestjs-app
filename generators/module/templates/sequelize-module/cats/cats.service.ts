
import { Component, Inject } from '@nestjs/common';
import { Create<%= kebabToPascal(config.name) %>Dto } from './dto/create-<%= kebabToCamel(config.name) %>.dto';
import { Model } from 'sequelize-typescript';
import { <%= kebabToPascal(config.name) %> } from './<%= kebabToCamel(config.name) %>.entity';

@Component()
export class <%= kebabToPascal(config.name) %>sService {
  constructor(
    @Inject('<%= kebabToPascal(config.name) %>sRepository') private readonly <%= kebabToCamel(config.name) %>sRepository: typeof <%= kebabToPascal(config.name) %>) {}

  async create(create<%= kebabToPascal(config.name) %>Dto: Create<%= kebabToPascal(config.name) %>Dto): Promise<<%= kebabToPascal(config.name) %>> {
    const <%= kebabToCamel(config.name) %> = new <%= kebabToPascal(config.name) %>();
    <%= kebabToCamel(config.name) %>.name = create<%= kebabToPascal(config.name) %>Dto.name;
    <%= kebabToCamel(config.name) %>.breed = create<%= kebabToPascal(config.name) %>Dto.breed;
    <%= kebabToCamel(config.name) %>.age = create<%= kebabToPascal(config.name) %>Dto.age;

    return await <%= kebabToCamel(config.name) %>.save();
  }

  async findAll(): Promise<<%= kebabToPascal(config.name) %>[]> {
    return await this.<%= kebabToCamel(config.name) %>sRepository.findAll<<%= kebabToPascal(config.name) %>>();
  }
}