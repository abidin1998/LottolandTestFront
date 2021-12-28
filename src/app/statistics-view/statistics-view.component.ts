import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from '../services/api-request.service';
import { userData } from '../model/userData.class';
import { totalGameScores} from '../model/totalGamesScores.class';

@Component({
  selector: 'app-statistics-view',
  templateUrl: './statistics-view.component.html',
  styleUrls: ['./statistics-view.component.css']
})
export class StatisticsViewComponent implements OnInit {

  constructor(private dataService: ApiRequestService) { }

  dataGames:totalGameScores=new totalGameScores();

  ngOnInit(): void {
    this.dataService.getStatistics().subscribe((resp)=>{
      console.log(resp);
      this.dataGames= resp;
    })
  }

}
