import { Component, Input } from '@angular/core';

type ListGroupItemType = 'active' | 'disabled';
type ListGroupItemVariant = 
'action'
| 'primary'
| 'secondary'
| 'success'
| 'danger'
| 'warning'
| 'info'
| 'light'
| 'dark';

type ListGroupVariant = 
'flush'
| 'numbered'
| 'horizontal';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrl: './list-group.component.scss'
})
export class ListGroupComponent {
  @Input() listGroupItemType: ListGroupItemType = 'active';
  @Input() listGroupItemVariant: ListGroupItemVariant = 'primary';
  @Input() listGroupVariant : ListGroupVariant = 'flush';
}
