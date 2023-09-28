import { Component, Input, OnInit } from '@angular/core';
import { NoticeService } from 'src/app/notice.service'

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css', './big-card.responsive.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  id:string = ''
  qtdCaracters = ''
  cardTitle:string =''
  cardDescription:string = ''
  photoCover:string = ''
  pubDate:string = ''

  constructor(private NoticeService: NoticeService) {

  }

  ngOnInit(): void {
    this.NoticeService.getNotices()
    .subscribe((data) => {
      this.cardTitle = data.items[this.id].titulo,
      this.cardDescription = data.items[this.id].introducao.substring(0, 300) + '..',
      this.photoCover = 'https://agenciadenoticias.ibge.gov.br/' + JSON.parse(data.items[this.id].imagens).image_intro,
      this.pubDate = data.items[this.id].data_publicacao
    })
  }

}
