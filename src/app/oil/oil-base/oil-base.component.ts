import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Oil } from 'src/app/model/Oil';
import { OilBaseListService } from 'src/app/shared/oil-base/oil-base-list.service';
import { OilNewDataService } from 'src/app/shared/oil-new/oil-new-data.service';
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};


@Component({
  selector: 'app-oil-base',
  templateUrl: './oil-base.component.html',
  styleUrls: ['./oil-base.component.scss']
})
export class OilBaseComponent implements OnInit {
  @Input()
  result$: Observable<any>;

  @ViewChild("chart") chart: ChartComponent | undefined;
  public chartOptions: Partial<ChartOptions>;

  list!: any[];
  oil_new!: any[];
  new_list!: any[];
  public model: Oil;
  countries!: any[];
  no1 = 0;
  no2 = 0;
  no3 = 0;
  no4 = 0;
  no5 = 0;



  constructor(private itemsService: OilBaseListService, private oilNewData: OilNewDataService) {
    this.model = new Oil();
    this.result$ = itemsService.resolveItems();
    this.itemsService.resolveItems().subscribe(res => {
      this.list = res;
    });


    this.oilNewData.resolveItems().subscribe(
      res => {
        this.oil_new = res;
        // this.oil_new.sort((a, b) => a.country.rendered.localeCompare(b.country.rendered));



        for (let val of Object.values(this.oil_new)) {

          if (val.country == "Australia" && val.mydate == "Jul2021") {

            this.no1 = +val.value
          } else if (val.country == "Albania" && val.mydate == "Jul2021") {
            this.no2 = +val.value
          } else if (val.country == "Austria" && val.mydate == "Jul2021") {
            this.no3 = +val.value
          } else if (val.country == "Azerbaijan" && val.mydate == "Jul2021") {
            this.no4 = +val.value
          } else if (val.country == "Angola" && val.mydate == "Jul2021") {
            this.no5 = +val.value
          }
        }
        console.log(this.countries);

        this.chartOptions = {
          series: [this.no1, this.no2, this.no3, this.no4, this.no5],
          chart: {
            type: "donut"
          },
          labels: ["Australia", "Albania", "Austria", "Angola", "Azerbaijan"],
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
      }
    );

    this.chartOptions = {
      series: [4, 1, 1, 1, 1],
      chart: {
        type: "donut"
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
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

  }

  ngOnInit(): void {
  }

  transferData() {


    for (let val of Object.values(this.list)) {

      // again with another month
      this.model.country = val.country;
      this.model.mydate = "Jul2021";
      this.model.value = val.jul2021;

      this.oilNewData.save(this.model);
      // again with another month
      this.model.country = val.country;
      this.model.mydate = "Jul2021";
      this.model.value = val.jul2021;

      this.oilNewData.save(this.model);
      // again with another month
      this.model.country = val.country;
      this.model.mydate = "Aug2021";
      this.model.value = val.aug2021;

      this.oilNewData.save(this.model);
      // again with another month
      this.model.country = val.country;
      this.model.mydate = "Sep2021";
      this.model.value = val.sep2021;

      this.oilNewData.save(this.model);
      // again with another month
      this.model.country = val.country;
      this.model.mydate = "Oct2021";
      this.model.value = val.oct2021;

      this.oilNewData.save(this.model);
      // again with another month
      this.model.country = val.country;
      this.model.mydate = "Nov2021";
      this.model.value = val.nov2021;

      this.oilNewData.save(this.model);
      // again with another month
      this.model.country = val.country;
      this.model.mydate = "Dec2021";
      this.model.value = val.dec2021;

      this.oilNewData.save(this.model);
      // again with another month
      this.model.country = val.country;
      this.model.mydate = "Jan2022";
      this.model.value = val.jan2022;

      this.oilNewData.save(this.model);
      // again with another month
      this.model.country = val.country;
      this.model.mydate = "Feb2022";
      this.model.value = val.feb2022;

      this.oilNewData.save(this.model);
      // again with another month
      this.model.country = val.country;
      this.model.mydate = "Mar2022";
      this.model.value = val.mar2022;

      this.oilNewData.save(this.model);
      // again with another month
      this.model.country = val.country;
      this.model.mydate = "Apr2022";
      this.model.value = val.apr2022;

      this.oilNewData.save(this.model);
      // again with another month
      this.model.country = val.country;
      this.model.mydate = "May2022";
      this.model.value = val.may2022;

      this.oilNewData.save(this.model);
      // again with another month
      this.model.country = val.country;
      this.model.mydate = "Jun2022";
      this.model.value = val.jun2022;

      this.oilNewData.save(this.model);
      // again with another month
      this.model.country = val.country;
      this.model.mydate = "Jul2022";
      this.model.value = val.jul2022;

      this.oilNewData.save(this.model);

      // again with another month
      this.model.country = val.country;
      this.model.mydate = "Aug2022";
      this.model.value = val.aug2022;

      this.oilNewData.save(this.model);
      // again with another month
      this.model.country = val.country;
      this.model.mydate = "Sep2022";
      this.model.value = val.sep2022;

      this.oilNewData.save(this.model);

    }

  }
}
