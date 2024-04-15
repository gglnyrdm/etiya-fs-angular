import { NgModule } from "@angular/core";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ButtonComponent } from "./components/button/button.component";
import { CommonModule } from "@angular/common";
import { ListGroupComponent } from "./components/list-group/list-group.component";

@NgModule({
    declarations: [NavbarComponent,FooterComponent,ButtonComponent,ListGroupComponent],
    imports: [CommonModule],
    exports: [NavbarComponent,FooterComponent,ButtonComponent,ListGroupComponent]
})
export class SharedModule {}