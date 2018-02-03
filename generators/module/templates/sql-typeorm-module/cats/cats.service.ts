import { Component, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { <%= kebabToPascal(config.name) %> } from './<%= kebabToCamel(config.name) %>.entity';

@Component()
export class <%= kebabToPascal(config.name) %>Service {
  constructor(
    @InjectRepository(<%= kebabToPascal(config.name) %>)
    private readonly <%= kebabToCamel(config.name) %>Repository: Repository<<%= kebabToPascal(config.name) %>>,
  ) {}

  async findAll(): Promise<<%= kebabToPascal(config.name) %>[]> {
    return await this.<%= kebabToCamel(config.name) %>Repository.find();
  }
}
