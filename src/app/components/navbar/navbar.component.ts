import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  textMode: boolean = false
  modeText: string = 'Modo Escuro';
  constructor(@Inject(ThemeService) private themeService: ThemeService) {}

  ngOnInit(): void {}

  toggleTheme() {
    this.themeService.toggleMode();
    this.textMode = !this.textMode; // Inverte o valor de textMode
    this.modeText = this.textMode ? 'Modo Escuro' : 'Modo Claro';
  }
}
