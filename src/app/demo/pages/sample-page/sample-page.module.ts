import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamplePageRoutingModule } from './sample-page-routing.module';
import { SamplePageComponent } from './sample-page.component';
import {SharedModule} from '../../../theme/shared/shared.module';
import { environment } from '../../../../environments/environment';
// import { TaskComponent } from '../task/task.component'
import { AngularFireModule } from '@angular/fire'
import { DatePipe } from '@angular/common';
@NgModule({
  declarations: [SamplePageComponent],
  imports: [
    CommonModule,
    SamplePageRoutingModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    // TaskComponent
  ],
  providers:[DatePipe],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SamplePageModule { }
