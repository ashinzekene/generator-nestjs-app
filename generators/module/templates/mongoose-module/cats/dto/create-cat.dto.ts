export class Create<%= kebabToPascal(config.name) %>Dto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}