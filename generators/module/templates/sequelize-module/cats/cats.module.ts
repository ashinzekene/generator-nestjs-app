import { Module } from '@nestjs/common';
import { <%= kebabToPascal(config.name) %>sController } from './<%= kebabToCamel(config.name) %>s.controller';
import { <%= kebabToPascal(config.name) %>sService } from './<%= kebabToCamel(config.name) %>s.service';
import { <%= kebabToCamel(config.name) %>sProviders } from './<%= kebabToCamel(config.name) %>s.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  modules: [DatabaseModule],
  controllers: [<%= kebabToPascal(config.name) %>sController],
  components: [
    <%= kebabToPascal(config.name) %>sService,
    ...<%= kebabToCamel(config.name) %>sProviders,
  ],
})
export class <%= kebabToPascal(config.name) %>sModule {}