import { Module } from '@nestjs/common';
import { <%= kebabToPascal(config.name) %>Service } from './<%= kebabToCamel(config.name) %>.service';
import { <%= kebabToPascal(config.name) %>Controller } from './<%= kebabToCamel(config.name) %>.controller';

@Module({
  components: [<%= kebabToPascal(config.name) %>Service],
  controllers: [<%= kebabToPascal(config.name) %>Controller],
})
export class <%= kebabToPascal(config.name) %>Module {}
