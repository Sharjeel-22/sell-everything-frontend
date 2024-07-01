import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { MONTHS_NAME } from '../models/MonthsList';
import { BORDER_COLOR } from '../models/BorderColor';
import { BACKGROUND_COLOR } from '../models/BackgroundColor';
import { DATA } from '../models/Data';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataProviderService {
  public readonly monthsNameProvider: Signal<string[]> = signal<string[]>(MONTHS_NAME);
  public readonly borderColorProvider: Signal<string[]> = signal<string[]>(BORDER_COLOR);
  public readonly backgroundColorProvider: Signal<string[]> = signal<string[]>(BACKGROUND_COLOR);
  public readonly dataProvider: Signal<number[]> = signal<number[]>(DATA);
  constructor() { }

}
