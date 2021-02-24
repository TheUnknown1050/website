import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {

  constructor() { }

  docsLink = 'https://aktindo.thedev.id/docs'

  ngOnInit(): void {
    window.location.href = this.docsLink
  }

}
