import { Component } from '@nestjs/common';
import { <%= kebabToPascal(config.name) %> } from './interfaces/<%= kebabToCamel(config.name) %>.interface';

@Component()
export class <%= kebabToPascal(config.name) %>sService {
  private readonly <%= kebabToCamel(config.name) %>s: <%= kebabToPascal(config.name) %>[] = [
    { id: 1, name: '<%= kebabToPascal(config.name) %>', age: 5 },
  ];

  create(<%= kebabToCamel(config.name) %>: <%= kebabToPascal(config.name) %>) {
    this.<%= kebabToCamel(config.name) %>s.push(<%= kebabToCamel(config.name) %>);
  }

  findAll(): <%= kebabToPascal(config.name) %>[] {
    return this.<%= kebabToCamel(config.name) %>s;
  }

  findOneById(id: number): <%= kebabToPascal(config.name) %> {
    return this.<%= kebabToCamel(config.name) %>s.find((<%= kebabToCamel(config.name) %>) => <%= kebabToCamel(config.name) %>.id === id);
  }
}
