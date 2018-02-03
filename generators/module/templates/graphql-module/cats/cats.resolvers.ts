import { Component, UseGuards } from '@nestjs/common';
import {
  Query,
  Mutation,
  Resolver,
  DelegateProperty,
} from '@nestjs/graphql';

import { <%= kebabToPascal(config.name) %> } from './interfaces/<%= kebabToCamel(config.name) %>.interface';
import { <%= kebabToPascal(config.name) %>sService } from './<%= kebabToCamel(config.name) %>s.service';
import { <%= kebabToPascal(config.name) %>sGuard } from './<%= kebabToCamel(config.name) %>s.guard';
import { MergeInfo } from 'graphql-tools/dist/Interfaces';

@Resolver('<%= kebabToPascal(config.name) %>')
export class <%= kebabToPascal(config.name) %>sResolvers {
  constructor(private readonly <%= kebabToCamel(config.name) %>sService: <%= kebabToPascal(config.name) %>sService) {}

  @Query()
  @UseGuards(<%= kebabToPascal(config.name) %>sGuard)
  async get<%= kebabToPascal(config.name) %>s() {
    return await this.<%= kebabToCamel(config.name) %>sService.findAll();
  }

  @Query('<%= kebabToCamel(config.name) %>')
  async findOneById(id: number) {
    return await this.<%= kebabToCamel(config.name) %>sService.findOneById(id);
  }

  @Mutation('create<%= kebabToPascal(config.name) %>')
  async create(<%= kebabToCamel(config.name) %>: <%= kebabToPascal(config.name) %>) {
    await this.<%= kebabToCamel(config.name) %>sService.create(<%= kebabToCamel(config.name) %>);
  }

  @DelegateProperty('human')
  findHumansById(<%= kebabToCamel(config.name) %>: <%= kebabToPascal(config.name) %>) {
    return (mergeInfo: MergeInfo) => ({
      fragment: `fragment <%= kebabToPascal(config.name) %>Fragment on <%= kebabToPascal(config.name) %> { humanId }`,
      resolve(parent, args, context, info) {
        const humanId = parent.id;
        return mergeInfo.delegate(
          'query',
          'humanById',
          {
            id: humanId,
          },
          context,
          info,
        );
      },
    });
  }
}
