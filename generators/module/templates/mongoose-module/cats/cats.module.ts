import { Module } from '@nestjs/common';
import { <%= kebabToPascal(config.name) %>sController } from './<%= kebabToCamel(config.name) %>s.controller';
import { <%= kebabToPascal(config.name) %>sService } from './<%= kebabToCamel(config.name) %>s.service';

@Module({
  controllers: [<%= kebabToPascal(config.name) %>sController],
  components: [<%= kebabToPascal(config.name) %>sService],
})
export class <%= kebabToPascal(config.name) %>sModule {}
