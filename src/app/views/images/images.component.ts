import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { Subscription } from 'rxjs';
import { NavbarLinkInterface } from '../../components/navbar/interfaces/navbar-link.interface';
import { RouterService } from '../../services/router/router.service';
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
    private routerService: RouterService
  ) {
  }

  public ngOnInit(): void {
    this.routerEventsSubscription = this.routerService.onNavigationEnd$().subscribe(routerEvent => {
      this.currentUrl = routerEvent.url;
    });

    this.currentUrl = this.routerService.getRouter().url;
  }

  public ngOnDestroy(): void {
  }
}
