import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogoHeaderComponent } from './logo-header.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [LogoHeaderComponent],
  exports: [LogoHeaderComponent]
})
export class LogoHeaderComponentModule {}
