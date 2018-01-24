import { Guard, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs/Observable';
import { Reflector } from '@nestjs/core';

@Guard()
export class <%= config.name[0].toUpperCase() + config.name.substring(1) %>Guard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(req, context: ExecutionContext):  boolean | Promise<boolean> | Observable<boolean> {
    
  }
}