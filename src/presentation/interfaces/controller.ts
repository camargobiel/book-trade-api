import { HTTPResponse } from '@/presentation/interfaces';

export interface Controller {
  handle: (req: unknown, res: unknown) => Promise<HTTPResponse>
}
