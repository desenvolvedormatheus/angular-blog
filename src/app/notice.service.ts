import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class NoticeService {
  private apiUrl = `https://servicodados.ibge.gov.br/api/v3/noticias?qtd=9&introsize=2000`

  constructor(private http: HttpClient) { }

  getNotices(): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.get(url)
  }
}

// tipo = 'noticia'; noticia / release
// qtd = '8'; quantidade de noticias por pagina
// page = '1'; Pagina atual
// de = '09-25-2023'; data minima da publicação
// introsize = '30'; tamanho maximo da introdução
// idproduto = '9050|9088'; identificador de de noticias relacionadas
// link = 'https://servicodados.ibge.gov.br/api/v3/noticias?'
