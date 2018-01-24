import { Middleware, NestMiddleware, ExpressMiddleware } from '@nestjs/common';

@Middleware()
export class <%= config.name[0].toUpperCase() + config.name.substring(1) %>Middleware implements NestMiddleware {
  resolve(name: string): ExpressMiddleware {
    return (req, res, next) => {
      next();
    };
 }
}