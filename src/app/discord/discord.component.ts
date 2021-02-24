import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discord',
  templateUrl: './discord.component.html',
  styleUrls: ['./discord.component.css']
})
export class DiscordComponent implements OnInit {

  constructor() { }

  discordLink = 'https://discord.gg/6g297Usrsn'

  ngOnInit(): void {
    window.location.href = this.discordLink
  }

}
