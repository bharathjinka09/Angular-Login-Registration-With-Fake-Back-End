import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public barChartOptions = {

    scaleShowVerticalLines: true,

    responsive : true

  };

 

  public barChartLabel = ['2006','2007','2008','2009','2010','2011','2012','2013'];

 

  public barChartType = 'bar';

 

  public barChartLegend = true;

 

  public barChartData = [

    {data : [65, 59, 89, 81, 56, 55, 40,50], label: 'Series A'},

    {data : [28, 48, 55, 60, 90, 30, 10,60], label: 'Series B'},

    {data : [40, 80, 32, 40, 20, 75, 60,70], label: 'Series C'},

    {data : [80, 30, 62, 50, 80, 55, 90,50], label: 'Series D'}

  ];

 

  public radarChartLabel = ['Q1','Q2','Q3','Q4'];

 

  public radarChartData = [

    {data: [120,150, 130,80], label:'2017'},

    {data: [80,130, 30,140], label:'2018'}

  ];

 

  public radarChartType = 'radar';

 

  public pieChartLabel = ['Sales Q1','Sales Q2','Sales Q3','Sales Q4'];

 

  public pieChartData = [120,150,180,90];

 

  public pieChartType = 'pie';


}
