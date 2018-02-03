import { Controller, Get } from '@nestjs/common';
import { <%= kebabToPascal(config.name) %>Service } from './<%= kebabToCamel(config.name) %>.service';
import { <%= kebabToPascal(config.name) %> } from './<%= kebabToCamel(config.name) %>.entity';

@Controller('<%= kebabToCamel(config.name) %>')
export class <%= kebabToPascal(config.name) %>Controller {
  constructor(private readonly <%= kebabToCamel(config.name) %>Service: <%= kebabToPascal(config.name) %>Service) {}

  @Get()
  findAll(): Promise<<%= kebabToPascal(config.name) %>[]> {
    return this.<%= kebabToCamel(config.name) %>Service.findAll();
  }
}
