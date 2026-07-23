import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../components/shared/header/header';
import { Footer } from '../../components/shared/footer/footer';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './main-layout.html',
  styleUrls: ['./main-layout.css']
})
export class MainLayout {}
