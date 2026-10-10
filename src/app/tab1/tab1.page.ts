import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonInput } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  calculatorOutline,
  informationCircleOutline,
  timeOutline,
} from 'ionicons/icons';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonInput
],


})
export class Tab1Page {
  counterName = 'Moje Počitadlo';
  count = 0;

  Increment() {
    this.count++;
  }

  Decrement() {
    this.count--;
    if (this.count < 0) {
      this.count = 0;
    }
  }

  Reset() {
    this.count = 0;
  }

  ChangeCounterName(event: any) {
    this.counterName = event.target.value;
  }
}