import {
  Component,
  OnInit
} from '@angular/core';
import { NavbarLinkInterface } from './navbar-link.interface';
import { NavbarLinks } from './navbar.data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [ './navbar.component.scss' ]
})
export class NavbarComponent implements OnInit {
  public links: NavbarLinkInterface[] = NavbarLinks;

  public constructor() {
  }

  public ngOnInit(): void {
  }
}
