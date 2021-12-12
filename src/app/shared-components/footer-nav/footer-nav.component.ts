import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ms-footer-nav',
  templateUrl: './footer-nav.component.html',
  styleUrls: ['./footer-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
