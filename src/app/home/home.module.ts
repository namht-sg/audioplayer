import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { LocalPlayerComponent } from '../local-player/local-player.component';
import { StreamClientComponent } from '../stream-client/stream-client.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, LocalPlayerComponent, StreamClientComponent]
})
export class HomePageModule {}
