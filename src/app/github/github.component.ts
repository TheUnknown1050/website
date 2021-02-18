import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  constructor() {
   }

  ngOnInit(): void {
      setTimeout(() => {
      window.location.href = 'https://github.com/Aktindo'
    }, 5 * 1000);
  }

}
