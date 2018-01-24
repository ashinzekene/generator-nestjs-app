import { PipeTransform, Pipe, ArgumentMetadata, HttpStatus } from '@nestjs/common';

@Pipe()
export class <%= config.name[0].toUpperCase() + config.name.substring(1) %>tPipe implements PipeTransform<string> {
  async transform(value: string, metadata: ArgumentMetadata) {
    return value;
  }
}