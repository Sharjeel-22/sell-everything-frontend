import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-custom-paginator',
  templateUrl: './custom-paginator.component.html',
  imports:[MatPaginatorModule],
  standalone:true,
  changeDetection:ChangeDetectionStrategy.OnPush,
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
