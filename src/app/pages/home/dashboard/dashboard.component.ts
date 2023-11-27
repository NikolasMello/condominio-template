import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports:[ NgApexchartsModule ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export default class DashboardComponent implements OnInit {
  
  currentMonth: string = this.getMonth(new Date());
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: any = {
    series: [76, 24],
      chart: {
        width: 480,
        type: "pie"
      },
      title: {
        text: "Product Trends by Month",
        align: "left"
      },
      labels: ["Ocupados", "Vagos"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
  };

  public chartOptions2: any = {
    series: [
      {
        name: "distibuted",
        data: [242, 185, 68]
      }
    ],
    chart: {
      height: 350,
      type: "bar",
    },
    colors: [
      "#008FFB",
      "#00E396",
      "#546E7A",
    ],
    plotOptions: {
      bar: {
        columnWidth: "45%",
        distributed: true
      }
    },
    title: {
      text: "Visitantes no mês de " + this.getMonth(new Date()),
      align: "left"
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    grid: {
      row: {
        colors: ["#f9f9f9", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5
      }
    },
    xaxis: {
      categories: [
        ["Visitantes"],
        ["Prestadores", "de serviço"],
        ["Funcionários"]
      ],
      labels: {
        style: {
          colors: [
            "#008FFB",
            "#00E396",
            "#546E7A"
          ],
          fontSize: "12px"
        }
      }
    }
  };

  constructor(){

  }

  ngOnInit(): void {

  }

  getMonth(currentDate: Date){
    return new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(currentDate);
  }
 

}
