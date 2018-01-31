import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { PipesModule } from '../pipes/pipes.module';
import { HomePage } from './home/home';
import { SoundPage } from './sound/sound';
import { PublishPage } from './publish/publish';


@NgModule({
    imports: [
        IonicModule,
        PipesModule,
    ],
    declarations: [
        HomePage,
        SoundPage,
        PublishPage,
    ],
    entryComponents: [
        HomePage,
        SoundPage,
        PublishPage,
    ],
})
export class PagesModule { }
