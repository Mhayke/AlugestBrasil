import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface Imovel {
  id: number;
  titulo: string;
  endereco: string;
  numero_de_quartos: number;
  valor: number;
  descricao: string;
  status: string;
}

@Component({
  selector: 'app-imovel',
  imports: [],
  templateUrl: './imovel.html',
  styleUrl: './imovel.css'
})
export class ImovelPage {

  constructor(private router: Router) {}

  navigateToHomePage() {
    this.router.navigate(['/home']);
  }

  navigateToInicio() {
    this.router.navigate(['/inicio']);
  }

  navigateToImovel() {
    this.router.navigate(['/imovel']);
  }

   novoImovel: Omit<Imovel, 'id'> = {
    titulo: "",
    descricao: "",
    endereco: "",
    numero_de_quartos: 0,
    valor: 0,
    status: "",
  };

  cadastrarImovel(){}

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
