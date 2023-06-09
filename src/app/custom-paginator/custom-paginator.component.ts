import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-paginator',
  templateUrl: './custom-paginator.component.html',
  styleUrls: ['./custom-paginator.component.css']
})
export class CustomPaginatorComponent {
  @Input() pageIndex: any;
  @Input() pageSize: any;
  @Input() totalItems: any;
  @Output() pageChange = new EventEmitter<number>();

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  onPageChange(pageIndex: number): void {
    this.pageChange.emit(pageIndex);
  }
}
