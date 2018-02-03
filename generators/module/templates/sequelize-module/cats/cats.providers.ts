import { <%= kebabToPascal(config.name) %> } from './<%= kebabToCamel(config.name) %>.entity';

export const <%= kebabToCamel(config.name) %>sProviders = [
  {
    provide: '<%= kebabToPascal(config.name) %>sRepository',
    useValue: <%= kebabToPascal(config.name) %>,
  },
];