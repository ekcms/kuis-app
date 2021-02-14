import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MywishlistPageRoutingModule } from './mywishlist-routing.module';

import { MywishlistPage } from './mywishlist.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    MywishlistPageRoutingModule
  ],
  declarations: [MywishlistPage]
})
export class MywishlistPageModule {}
