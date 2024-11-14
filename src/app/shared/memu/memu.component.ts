import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-memu',
  templateUrl: './memu.component.html',
  styleUrls: ['./memu.component.css']
})
export class MemuComponent {
  exibindoMenu: boolean = false;
  closeSidebar() {
    this.exibindoMenu = !this.exibindoMenu;
;}

  menu: MenuItem[] =  []
  ngOnInit(): void {
    this.menu = [
      {
        label: 'Cadastro',
        icon: PrimeIcons.FILE,

        items: [
          {
            label: 'Clientes',
            icon: PrimeIcons.USER_PLUS,

          },

          {
            label: 'Fornecedores',
            icon: PrimeIcons.USER_MINUS,

            routerLink: ['/produtos'],
            routerLinkActiveOptions: { exact: true },

          },

          {
            label: 'Funicionários',
            icon: PrimeIcons.USER,
            routerLinkActiveOptions: { exact: true },
          },

          {
            label: 'Produtos',
            icon: ' fa-solid fa-boxes-packing fa-xl"',
            routerLink: ['/produtos'],
           command: () => this.closeSidebar(),

          },

        ],
        separator:true,
      },

      {
        label: 'Estoque',
        icon: 'fa-solid fa-truck-ramp-box',
        items: [
          {
            label: 'Estoque Movimento',
            icon: 'fa-solid fa-warehouse fa-xl',
            routerLink: ['/movimentacoes'],
            command: () => this.closeSidebar(),
          },
          {
            label: 'Importar Nota fiscal',
            icon: 'fa-solid fa-file-invoice fa-xl',
            expanded: true,
            routerLink: ['/importarnotalfiscal'],
           // command: () => this.closeSidebar(),
          },
          {
            label: 'Kits/Combos',
            icon: PrimeIcons.TICKET,
          },
        ],
      },
      {
        label: 'Financeiro',
        icon: PrimeIcons.DOLLAR,
        items: [
          {
            label: 'Condições de Pagamento',
            icon: 'pi pi-tablet',
            //      routerLink: ['/contaspagar'],
          },
          {
            label: 'Contas Receber',
            icon: PrimeIcons.MONEY_BILL,
            // routerLink: ['/contasreceber'],
          },
          {
            label: 'Contas Pagar',
            icon: 'pi pi-calculator',
            //      routerLink: ['/contaspagar'],
          },
          {
            label: 'Caixa',
            icon: 'fa-solid fa-cash-register fa-xl',
                routerLink: ['/comandas'],
          },
        ],
      },
      {
        label: 'Vendas',
        icon: ' fa-solid fa-cart-shopping ',
        items: [
          {
            label: 'Vendas',
            icon: 'fa-solid fa-cart-plus fa-xl',
            routerLink: ['/vendas'],
          },
          {
            label: 'Compras',
            icon: 'pi pi-shopping-bag',
            routerLink: ['/compras'],
          },
        ],
      },
    ];
  }
}
