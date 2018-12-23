import {
  Component,
  OnInit
} from '@angular/core';
import { NavbarLinks } from './data/navbar-links.data';
import { NavbarLinkInterface } from './interfaces/navbar-link.interface';

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
