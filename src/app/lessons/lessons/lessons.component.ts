import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent {
  @Input() lessons;
  @Output() selected = new EventEmitter;
}
