import { Module } from '@nestjs/common';
import { <%= kebabToPascal(config.name) %>sService } from './<%= kebabToCamel(config.name) %>s.service';
import { <%= kebabToPascal(config.name) %>sResolvers } from './<%= kebabToCamel(config.name) %>s.resolvers';

@Module({
	components: [<%= kebabToPascal(config.name) %>sService, <%= kebabToPascal(config.name) %>sResolvers],
})
export class <%= kebabToPascal(config.name) %>sModule {}
