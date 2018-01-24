import { ReflectMetadata } from '@nestjs/common';

export const <%= kebabToPascal(config.name) %> = (...<%= kebabToCamel(config.name) %>: string[]) => ReflectMetadata('<%= kebabToCamel(config.name) %>', <%= kebabToCamel(config.name) %>);