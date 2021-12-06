import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

import { env } from 'process';
const DEFAULT_LOCALE = (env.LOCALE ? env.LOCALE : 'en');

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(@Query("locale") locale: string): string {

    const safeLocale = (locale ? locale : DEFAULT_LOCALE);

    return this.appService.getHello(safeLocale);
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
