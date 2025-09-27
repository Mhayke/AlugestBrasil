import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aluguel',
  imports: [],
  templateUrl: './aluguel.html',
  styleUrl: './aluguel.css'
})
export class Aluguel {

  constructor(private router: Router) { }

  navigateToHomePage() {
    this.router.navigate(['/home']);
  }

  navigateToInicio() {
    this.router.navigate(['/inicio']);
  }

  navigateToImovel() {
    this.router.navigate(['/imovel']);
  }

  // Menu lateral - abrir e fechar
  toggleMenu(): void {
    const menu = document.getElementById("sideMenu") as HTMLElement;
    const overlay = document.getElementById("menuOverlay") as HTMLElement;
    
    if (menu.style.right === "0px") {
      menu.style.right = "-250px";
      overlay.style.display = "none";
    } else {
      menu.style.right = "0px";
      overlay.style.display = "block";
    }
  }

  closeMenu(): void {
    const menu = document.getElementById("sideMenu") as HTMLElement;
    const overlay = document.getElementById("menuOverlay") as HTMLElement;
    
    menu.style.right = "-250px";
    overlay.style.display = "none";
  }

  // Fecha o menu lateral ao rolar a página
  ngOnInit(): void {
    window.addEventListener("scroll", (): void => {
      this.closeMenu();
    });
  }

}
