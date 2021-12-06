import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

import { env } from 'process';

const DEFAULT_LOCALE = (env.LOCALE ? env.LOCALE : 'en');
const START_DATE = new Date();
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(@Query("locale") locale: string): string {

    const safeLocale = (locale ? locale : DEFAULT_LOCALE);

    const hello = this.appService.getHello(safeLocale);
    return `<h1>${hello}</h1><p>Server started at ${START_DATE}</p>`;
  }

  @Get("/kill")
  kill(): string {
    return this.appService.exit();
  }

  @Get("/visit")
  visit(): Date[] {
    return this.appService.visit();
  }
}
