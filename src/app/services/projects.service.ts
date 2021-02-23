import { Injectable } from '@angular/core';

export interface Project {
  name: String;
  type: String,
  description: String;
  emoji: String,
  avatarUrl?: String;
  websiteUrl?: String;
  githubUrl: String;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }
  projects: Project[] = [
    { 
      name: 'Avenue', 
      type: 'Discord bot', 
      description: 'This is a Discord bot that is capable of keeping the pesky guys with a very extensive moderation system. It involves a lot of features especially a dashboard.', 
      emoji: '🤖', 
      avatarUrl: 'https://cdn.discordapp.com/avatars/790198442668064789/9df48948c46e03fa9504ad492d598d11.png?size=2048', 
      websiteUrl: 'https://avenue.aktindo.repl.co' , 
      githubUrl: 'https://github.com/Aktindo/Avenue' 
    },
    { 
      name: 'Some Random Cat', 
      type: 'NPM Package', 
      description: 'This is a NPM package which is very useful in generating random stuff which is usually not available like cats, dogs, jokes and much more!', 
      emoji: '😸', 
      websiteUrl: 'https://aktindo.thedev.id/docs/some-random-cat/overview/' , 
      githubUrl: 'https://github.com/Aktindo/some-random-cat' 
    },
    { 
      name: 'Chef Mania', 
      type: 'Discord bot', 
      description: 'This is a Discord bot that includes a very fun economy system in active development.', 
      emoji: '🤖', 
      avatarUrl: 'https://cdn.discordapp.com/avatars/805084833998831626/7895284b0480a9bcbf755851d36af6ab.webp?size=2048', 
      githubUrl: 'https://github.com/Aktindo/' 
    },
    { 
      name: 'Simple Calculator', 
      type: 'Random project', 
      description: 'This is a calculator I made to learn the basics of backend in web development. It features a great UI!', 
      emoji: '🧮', 
      websiteUrl: 'https://aktindo.thedev.id/Simple-Calculator' , 
      avatarUrl: 'https://cdn.discordapp.com/attachments/774487650358788096/811535419644706816/simple-calculator-logo.png', 
      githubUrl: 'https://github.com/Aktindo/Simple-Calculator' 
    },
    { 
      name: 'Magic 8ball', 
      type: 'Random project', 
      description: 'This is a magic 8ball I made in my free time. It is pretty random ngl', 
      emoji: '🎱', 
      websiteUrl: 'https://simplemagic8ball.netlify.app#start' , 
      avatarUrl: 'https://cdn.discordapp.com/attachments/804559795805618177/807178718480564254/8ballLogo.png', 
      githubUrl: 'https://github.com/Aktindo/Simple-Magic-8ball' 
    },
  ]
}
