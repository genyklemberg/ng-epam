import { NgModule } from '@angular/core';
import {LayoutModule} from '@angular/cdk/layout';
import {MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';

const matArray = [
  LayoutModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule
];

@NgModule({
  imports: matArray,
  exports: matArray,
  declarations: []
})
export class MaterialModule { }
