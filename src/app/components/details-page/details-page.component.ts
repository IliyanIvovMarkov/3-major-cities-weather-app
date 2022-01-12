import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  public city: string = '';

  constructor(
    private activatedRoute: ActivatedRoute
  ) {

    activatedRoute.params.subscribe(routeParameters => {
      this.city = routeParameters['city'];
    })
  }

  ngOnInit(): void {
  }

}
