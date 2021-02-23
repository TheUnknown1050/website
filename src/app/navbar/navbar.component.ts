import { Component, OnInit, ViewChild } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('themeSelect') themeSelect: MatSelect;

  defaultTheme = 'IONIC';

  form = new FormGroup({
    theme: new FormControl(localStorage.getItem('theme') || this.defaultTheme)
  });

  constructor(private service: ThemeService) {
  }
  ngOnInit() {
    this.service.updateTheme();
    this.form.valueChanges.subscribe(() => 
      this.service.changeTheme(
        this.form.get('theme').value));
  }
}
