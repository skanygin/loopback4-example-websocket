import {inject} from '@loopback/context';
import {
  post,
  Request,
  requestBody,
  ResponseObject,
  RestBindings,
} from '@loopback/rest';
import {ScanEvent} from '../models';

/**
 * OpenAPI response for ping()
 */
const PING_RESPONSE: ResponseObject = {
  description: 'Ping Response',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          greeting: {type: 'string'},
          date: {type: 'string'},
          url: {type: 'string'},
          headers: {
            type: 'object',
            properties: {
              'Content-Type': {type: 'string'},
            },
            additionalProperties: true,
          },
        },
      },
    },
  },
};

/**
 * A simple controller to bounce back http requests
 */
export class PingController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) {}

  @post('/events/scan', {
    responses: {
      '200': {
        description: 'Recode barcode scanning operations',
        content: {'application/json': {schema: {'x-ts-type': ScanEvent}}},
      },
    },
  })
  create(@requestBody() scanEvent: ScanEvent): boolean {
    console.log(scanEvent);
    return true;
  }
}
