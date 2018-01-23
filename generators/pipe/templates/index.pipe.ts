import { PipeTransform, Pipe, ArgumentMetadata, HttpStatus } from '@nestjs/common';

@Pipe()
export class ParseIntPipe implements PipeTransform<string> {
  async transform(value: string, metadata: ArgumentMetadata) {
    return value;
  }
}