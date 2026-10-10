import { Component, inject } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonNote,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';
import { CounterComponent } from '../components/counter/counter.component';
import { SavedCounter } from '../models/saved-counter';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    CounterComponent,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonNote,
    IonTitle,
    IonToolbar,
  ],
})
export class Tab1Page {
  savedCounters: SavedCounter[] = [];
  private readonly counterService = inject(CounterService);

  constructor() {
    void this.counterService.initialize().then(() => {
      if (this.savedCounters.length === 0) {
        this.savedCounters = this.counterService.counters();
      }
    });
  }

  onSaved(counter: SavedCounter): void {
    this.savedCounters.unshift(counter);
    void this.counterService.add(counter);
  }
}