import { HttpException } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';

export class <%= kebabToPascal(config.name) %>Exception extends HttpException {
  constructor() {
    super('<%= kebabToPascal(config.name) %>', HttpStatus.<%= config.name.toUpperCase() %>);
  }
}