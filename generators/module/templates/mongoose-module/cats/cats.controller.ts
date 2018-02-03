import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Create<%= kebabToPascal(config.name) %>Dto } from './dto/create-<%= kebabToCamel(config.name) %>.dto';
import { <%= kebabToPascal(config.name) %>sService } from './<%= kebabToCamel(config.name) %>s.service';
import { <%= kebabToPascal(config.name) %> } from './interfaces/<%= kebabToCamel(config.name) %>.interface';

@Controller('<%= kebabToCamel(config.name) %>s')
export class <%= kebabToPascal(config.name) %>sController {
  constructor(private readonly <%= kebabToCamel(config.name) %>sService: <%= kebabToPascal(config.name) %>sService) {}

  @Post()
  async create(@Body() create<%= kebabToPascal(config.name) %>Dto: Create<%= kebabToPascal(config.name) %>Dto) {
    this.<%= kebabToCamel(config.name) %>sService.create(create<%= kebabToPascal(config.name) %>Dto);
  }

  @Get()
  async findAll(): Promise<<%= kebabToPascal(config.name) %>[]> {
    return this.<%= kebabToCamel(config.name) %>sService.findAll();
  }
}