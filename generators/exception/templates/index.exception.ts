import { HttpException } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';

export class <%= config.name[0].toUpperCase() + config.name.substring(1) %>Exception extends HttpException {
  constructor() {
    super('<%= config.name[0].toUpperCase() + config.name.substring(1) %>', HttpStatus.<%= config.name.toUpperCase() %>);
  }
}