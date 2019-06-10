import {Component, OnInit, ViewChild} from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  @ViewChild('lineChart') private chartRef;
  chart: any;
  labels = [
    'Janvier',
    'février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Aout',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre'
  ];
  dataPoints = [{
    x: 1,
    y: 0
  },
    {
      x: 2,
      y: 0
    },
    {
      x: 2,
      y: 0
    },
    {
      x: 2,
      y: 0
    },
    {
      x: 2,
      y: 2000
    },
    {
      x: 4,
      y: 2500
    }];

  constructor() {
  }

  ngOnInit() {
    this.onGraph();
  }

  onGraph() {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: " Chiffre d'affaire ",
            data: this.dataPoints,
            borderColor: '#FF6F00',
            fill: false
          },
        ]
      },
      options: {
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }


}
