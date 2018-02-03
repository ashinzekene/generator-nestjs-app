import { Model } from 'mongoose';
import { Component, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { <%= kebabToPascal(config.name) %> } from './interfaces/<%= kebabToCamel(config.name) %>.interface';
import { Create<%= kebabToPascal(config.name) %>Dto } from './dto/create-<%= kebabToCamel(config.name) %>.dto';
import { <%= kebabToPascal(config.name) %>Schema } from './schemas/<%= kebabToCamel(config.name) %>.schema';

@Component()
export class <%= kebabToPascal(config.name) %>sService {
  constructor(@InjectModel(<%= kebabToPascal(config.name) %>Schema) private readonly <%= kebabToCamel(config.name) %>Model: Model<<%= kebabToPascal(config.name) %>>) {}

  async create(create<%= kebabToPascal(config.name) %>Dto: Create<%= kebabToPascal(config.name) %>Dto): Promise<<%= kebabToPascal(config.name) %>> {
    const created<%= kebabToPascal(config.name) %> = new this.<%= kebabToCamel(config.name) %>Model(create<%= kebabToPascal(config.name) %>Dto);
    return await created<%= kebabToPascal(config.name) %>.save();
  }

  async findAll(): Promise<<%= kebabToPascal(config.name) %>[]> {
    return await this.<%= kebabToCamel(config.name) %>Model.find().exec();
  }
}
