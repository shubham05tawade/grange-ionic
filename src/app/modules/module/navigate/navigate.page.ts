import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.page.html',
  styleUrls: ['./navigate.page.scss'],
})
export class NavigatePage implements OnInit {

  constructor(private routes: ActivatedRoute) { }

  ngOnInit() {
    this.routes.params.subscribe((param: any) => {
      console.log(param)
    })
  }

}
