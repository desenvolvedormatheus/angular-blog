import { Component, Input, OnInit } from '@angular/core';
import { NoticeService } from 'src/app/notice.service'

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css', './small-card.responsive.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  id:string = '0'
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
      this.cardDescription = data.items[this.id].introducao,
      this.photoCover = 'https://agenciadenoticias.ibge.gov.br/' + JSON.parse(data.items[this.id].imagens).image_intro,
      this.pubDate = data.items[this.id].data_publicacao
    })
  }

}
