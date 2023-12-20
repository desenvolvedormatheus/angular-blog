import { Component, OnInit } from '@angular/core';
import { NoticeService } from 'src/app/notice.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css', './content.component.responsive.css']
})
export class ContentComponent implements OnInit {

  id: string | null = '0'
  cardTitle: string = ''
  cardDescription: string = ''
  photoCover: string = ''
  pubDate: string = ''
  author: string = ''
  linkNoticia: string = ''

  constructor(private NoticeService: NoticeService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
    )

    this.NoticeService.getNotices()
      .subscribe((data) => {
        this.cardTitle = data.items[this.id || 0].titulo,
        this.cardDescription = (data.items[this.id || 0].introducao).split("."),
        this.photoCover = 'https://agenciadenoticias.ibge.gov.br/' + JSON.parse(data.items[this.id || 0].imagens).image_intro,
        this.pubDate = data.items[this.id || 0].data_publicacao,
        this.author = data.items[this.id || 0].editorias
        this.linkNoticia = data.items[this.id || 0].link
      })
  }
}
