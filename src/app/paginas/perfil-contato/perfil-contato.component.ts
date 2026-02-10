import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from "../../componentes/container/container.component";
import { CommonModule } from '@angular/common';
import { Contato } from '../../componentes/contato/contato';
import { ContatoService } from '../../services/contato.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-perfil-contato',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    RouterLink
  ],
  templateUrl: './perfil-contato.component.html',
  styleUrl: './perfil-contato.component.css'
})
export class PerfilContatoComponent implements OnInit{

  contato: Contato = {
    "id": 0,
    "nome": "dev",
    "telefone": "123123123",
    "email": "dev@email.com",
    "aniversario": "12/10/1990",
    "redes": "dev.com",
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private contatoService: ContatoService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id) {
      this.contatoService.buscarPorId(parseInt(id)).subscribe((contato) => {
        this.contato = contato;
      });
    }
  }

}
