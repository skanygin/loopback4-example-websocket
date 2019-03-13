import {Entity, model, property} from '@loopback/repository';

@model()
export class ScanEvent extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  barcode: string;

  @property({
    type: 'string',
    required: true,
  })
  deviceId: string;


  constructor(data?: Partial<ScanEvent>) {
    super(data);
  }
}
