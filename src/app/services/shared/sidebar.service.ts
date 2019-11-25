import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
{
  titulo: 'principal',
  icono: 'mdi mdi-gauge',
  submenu: [
    { titulo: 'Dashboard' , url: '/dashboard'},
    { titulo: 'progress' , url: '/progress'},
    { titulo: 'graficas1' , url: '/graficas1'},
  ]
}
  ]

  constructor() { }
}
