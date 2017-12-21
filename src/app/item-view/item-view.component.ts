import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.scss']
})
export class ItemViewComponent implements OnInit {
  @Input('data') data: any[];
  @Input('selectedItem') selectedItem: number;

  ngOnInit() {
    this.data = this.data ? this.data : [];
    this.selectedItem = this.selectedItem ? this.selectedItem : 0;
  }
}
