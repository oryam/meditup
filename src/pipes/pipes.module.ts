import { NgModule } from '@angular/core';
import { ServiceUrlPipe } from './service-url.pipe';

@NgModule({
	declarations: [ServiceUrlPipe],
	imports: [],
	exports: [ServiceUrlPipe],
	providers: [ServiceUrlPipe],
})
export class PipesModule { }
