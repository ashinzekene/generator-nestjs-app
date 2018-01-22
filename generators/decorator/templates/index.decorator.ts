import { ReflectMetadata } from '@nestjs/common';

export const <%= config.name[0].toUpperCase() + config.name.substring(1) %> = (...<%= config.name.toLowerCase() %>: string[]) => ReflectMetadata('<%= config.name.toLowerCase() %>', <%= config.name.toLowerCase() %>);