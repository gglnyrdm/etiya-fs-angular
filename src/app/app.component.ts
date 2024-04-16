import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { LayoutComponent } from "./ui/layout/layout.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, SharedModule, LayoutComponent]
})
export class AppComponent {
  title = 'List Group Component Configuration - Workshop 1 - Pair 2';

  products = [
    {
      name: 'Samsung Galaxy S10',
      price: 900,
      discontinued: true,
    },
    {
      name: 'Iphone 11',
      price: 1200,
      discontinued: false,
    },
    {
      name: 'Huawei P30',
      price: 800,
      discontinued: false,
    },
  ];

  personel = [
    {
      id: 1,
      firstName: 'Doğukan',
      lastName: 'Koc',
      title: 'Software Development, Specialist',
      company: 'Etiya',
      listGroupItemType: 'active',
      listGroupItemVariant: 'primary',
    },
    {
      id: 2,
      firstName: 'Sevda',
      lastName: 'Simsek',
      title: 'Software Development, Specialist',
      company: 'Etiya',
      listGroupItemType: 'active',
      listGroupItemVariant: 'secondary',
    },
    {
      id: 3,
      firstName: 'Gülin',
      lastName: 'Yardimoglu',
      title: 'Software Development, Specialist',
      company: 'Etiya',
      listGroupItemType: 'disabled',
      listGroupItemVariant: 'warning',
    },
    {
      id: 4,
      firstName: 'Etkin',
      lastName: 'Karadag',
      title: 'Business Analyst, Specialist',
      company: 'Etiya',
      listGroupItemType: 'disabled',
      listGroupItemVariant: 'danger',
    }
  ];

  

  onButtonClick() {
    console.log('Button clicked');
  }
}
