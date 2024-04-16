import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MainPageComponent } from "./components/main-page/main-page.component";

@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss',
    imports: [SharedModule, MainPageComponent]
})
export class LayoutComponent {

}
