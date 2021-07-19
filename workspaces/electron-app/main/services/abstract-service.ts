export class AbstractService {
  receptionChannel(): string {
    throw new Error('Method not implemented.');
  }

  sendingChannel(): string {
    throw new Error('Method not implemented.');
  }

  process(...args: any): any {
    throw new Error('Method not implemented.');
  }
}
