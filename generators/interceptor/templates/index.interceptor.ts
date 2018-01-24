import { Interceptor, NestInterceptor, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Interceptor()
export abstract class <%= kebabToPascal(config.nmae) %>Interceptor implements NestInterceptor {

  intercept(dataOrRequest, context: ExecutionContext, stream$: Observable<any>): Observable<any> {
    return stream$;
  }
}