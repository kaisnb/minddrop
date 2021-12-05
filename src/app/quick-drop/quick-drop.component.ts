import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-drop',
  templateUrl: './quick-drop.component.html',
  styleUrls: ['./quick-drop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuickDropComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
