import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  constructor() {
   }

  githubLink = 'https://github.com/Aktindo' 

  ngOnInit(): void {
    window.location.href = this.githubLink
  }

}
