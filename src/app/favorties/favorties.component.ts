import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-favorties',
  templateUrl: './favorties.component.html',
  styleUrls: ['./favorties.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavortiesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
