import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  NavigationEnd,
  Router
} from '@angular/router';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { Subscription } from 'rxjs';
import { NavbarLinkInterface } from '../../components/navbar/interfaces/navbar-link.interface';
import { ImagesNavbarLinks } from './data/images-navbar-links.data';

@AutoUnsubscribe()
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: [
    './images.component.scss'
  ]
})
export class ImagesComponent implements OnInit, OnDestroy {
  public links: NavbarLinkInterface[] = ImagesNavbarLinks;
  public currentUrl: string | undefined;

  private routerEventsSubscription: Subscription | undefined;

  public constructor(
    private router: Router
  ) {
  }

  public ngOnInit(): void {
    this.routerEventsSubscription = this.router.events.subscribe(routerEvent => {
      if (routerEvent instanceof NavigationEnd) {
        this.currentUrl = routerEvent.url;
      }
    });

    this.currentUrl = this.router.url;
  }

  public ngOnDestroy(): void {
  }
}
