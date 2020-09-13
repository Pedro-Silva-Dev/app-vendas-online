import { HistoricoVenda } from './models/historico-venda.model';
import { HistoricoMensal } from './models/historico-bebida.model';
import { HistoricoAno } from './models/historico-ano.model';
import { HttpResponse } from '@angular/common/http';
import { Aderencia } from './models/aderencia.model';
import { DashboardService } from './dashboard.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;

  //Configuração do grafico historico anual
  chartHistoricoAnoOptions: Highcharts.Options;
  historicosAnuais: HistoricoAno[];

  //Configuração do grafico historico mensal
  chartHistoricoMensalOptions: Highcharts.Options;
  historicosMensais: HistoricoMensal[];
  mesesHistoricoMensal: string[];

  //Configuração do grafico historico de vendas
  chartHistoricoVendasOptions: Highcharts.Options;
  historicosVendas: HistoricoVenda[];

  //Dados dos 3 cards superiores.
  aderencias: Aderencia[];


  constructor(
    private _toastrService: ToastrService,
    private _dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    this.obterAderencias();
    this.obterHistoricoAnual();
    this.obterHistoricoMensal();
    this.obterHistoricoVendas();
  }

  /**
   * Obtem os dados da aderencia.
   */
 obterAderencias(){
  this._dashboardService.obterAderencias().subscribe(
    (res: HttpResponse<Aderencia[]>) => {
      if(res.status == 200){
        this.aderencias = res.body;
      }
    });
 }

 /**
  * Verifica se a aderencia foi maior que a meta.
  */
 isAderenciaPositiva(aderencia: Aderencia): boolean{
  return aderencia.percentual >= aderencia.meta ? true : false;
 }

 /**
  * Exibe o grafico de historico anual.
  */
 exibirHistoricoAnual(historicosAnuais: HistoricoAno[]){
   if(historicosAnuais && historicosAnuais.length){
      let meses = historicosAnuais[0].vendas.map(v => v.mes);
      let anoAtual = historicosAnuais[0].ano;
      let dadosAnoAtual = historicosAnuais[0].vendas.map(v => v.produtividade);
      let dadosAnoAnterior = []
      if(historicosAnuais.length > 1){
        dadosAnoAnterior = historicosAnuais[1].vendas.map(v => v.produtividade);
      }
      this.chartHistoricoAnoOptions = this.criarGraficoHistoricoAnual(meses, anoAtual, dadosAnoAtual, dadosAnoAnterior);
   }
 }

 /**
  * Obtem os dados de historico dos ultimos anos.
  */
 obterHistoricoAnual(){
  this._dashboardService.obterHistoricoAno().subscribe(
    (res: HttpResponse<HistoricoAno[]>) => {
      if(res.status == 200){
        this.historicosAnuais = res.body;
        this.exibirHistoricoAnual(this.historicosAnuais);
      }
    });
 }

 /**
  * Cria o grafico de historico anual.
  * @param meses
  * @param anoAtual
  * @param dadosAnoAtual
  * @param dadosAnoAnterior
  */
 criarGraficoHistoricoAnual(meses: string[], anoAtual: number, dadosAnoAtual: number[], dadosAnoAnterior: number[]): Highcharts.Options{
    let chartHistoricoAnoOptions: Highcharts.Options = {
      chart: {
        type: 'column'
    },
    credits: {
      enabled: false
    },
    title: {
        text: 'Historico Anual de Produtividade'
    },
    xAxis: {
        categories: meses,
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Valor'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y: .1f} %</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [
      {
        name: anoAtual.toString(),
        // @ts-ignore
        data: dadosAnoAtual,
        // color: '#C8E6C9'
      },
      {
        name: "Ano anterior",
        // @ts-ignore
        data: dadosAnoAnterior,
        // color: '#dc3545'
      }
    ]
  }
  return chartHistoricoAnoOptions;
}

/**
 * Obtem os dados de historico mensal.
 */
obterHistoricoMensal(){
  this._dashboardService.obterHistoricoMensal().subscribe(
    (res: HttpResponse<HistoricoMensal[]>) => {
      if(res.status == 200){
        this.historicosMensais = res.body;
        this.mesesHistoricoMensal = res.body.map(h => h.mes);
        this.exibirGraficoVendaMensal(this.historicosMensais[0]);
      }
    });
}

/**
 * Exibe o grafico de historico mensal.
 * @param historicoMensal
 */
exibirGraficoVendaMensal(historicoMensal: HistoricoMensal){
  if(historicoMensal){
    this.chartHistoricoMensalOptions = this.criarGraficoVendaMensal(historicoMensal);
  }
}

/**
 * Cria o grafico de historico mensal.
 * @param historicoMensal
 */
criarGraficoVendaMensal(historicoMensal: HistoricoMensal): Highcharts.Options{
  let chartHistoricoMensalOptions: Highcharts.Options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
  },
  credits: {
    enabled: false
  },
  title: {
      text: `Mês: ${historicoMensal.mes}`
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
      point: {
          valueSuffix: '%'
      }
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
      }
  },
  // @ts-ignore
  series: [{
      name: 'Vendas',
      colorByPoint: true,
      data: [{
          name: 'Suco',
          y: historicoMensal.suco,
          color: '#dc3545'
      }, {
          name: 'Água',
          y: historicoMensal.agua,
          color: '#01579B'
      }, {
          name: 'Energetico',
          y: historicoMensal.energetico,
          color: '#4CAF50'
      }, {
          name: 'Cerveja',
          y: historicoMensal.cerveja,
          color: '#FFC400'
      }]
  }]
}
return chartHistoricoMensalOptions;
}

/**
 * Troca os dados do grafico mensal de acordo com o mes selecionado.
 * @param mes
 */
trocarMesHistorico(mes: string){
  if(mes){
    let historico = this.historicosMensais.find(h => h.mes == mes);
    this.exibirGraficoVendaMensal(historico);
  }
}

/**
 * Obtem os dados de vendas do mes.
 */
obterHistoricoVendas(){
  this._dashboardService.obterHistoricoVendas().subscribe(
    (res: HttpResponse<HistoricoVenda[]>) =>{
      if(res.status == 200){
        this.historicosVendas = res.body;
        if(this.historicosVendas?.length){
          this.exibirGraficoHistoricoVendas(this.historicosVendas);
        }
      }
    }
  )
}

/**
 * Exibe o grafico de vendas do ano.
 * @param historicoVendas
 */
exibirGraficoHistoricoVendas(historicoVendas: HistoricoVenda[]){
  let meses = historicoVendas.map(h => h.mes);
  let vendaSuco = historicoVendas.map(h => h.suco);
  let vendaAgua = historicoVendas.map(h => h.agua);
  let vendaCerveja = historicoVendas.map(h => h.cerveja);
  let vendaEnergetico = historicoVendas.map(h => h.energetico);
  this.chartHistoricoVendasOptions = this.criarGraficoHistoricoVendas(vendaSuco, vendaAgua, vendaCerveja, vendaEnergetico, meses);
}

/**
 * Cria o grafico de historico de vendas.
 * @param vendaSuco
 * @param vendaAgua
 * @param vendaCerveja
 * @param vendaEnergetico
 * @param meses
 */
criarGraficoHistoricoVendas(vendaSuco: number[], vendaAgua: number[], vendaCerveja: number[], vendaEnergetico: number[], meses: string[]): Highcharts.Options{
  let chartHistoricoVendasOptions: Highcharts.Options = {
    chart: {
      type: 'line'
  },
  credits: {
    enabled: false
  },
    title: {
      text: 'Historico de venda por produto'
  },
  yAxis: {
      title: {
          text: 'Unidades vendidas'
      }
  },
  xAxis: {
    categories: meses
  },
  plotOptions: {
    line: {
      dataLabels: {
          enabled: true
      },
      enableMouseTracking: false
  }
  },

  series: [{
      name: 'Suco',
      // @ts-ignore
      data: vendaSuco,
      color: '#dc3545'
  }, {
      name: 'Água',
      // @ts-ignore
      data: vendaAgua,
      color: '#01579B'
  }, {
      name: 'Energetico',
      // @ts-ignore
      data: vendaEnergetico,
      color: '#4CAF50'
  }, {
      name: 'Cerveja',
      // @ts-ignore
      data: vendaCerveja,
      color: '#FFC400'
  }],

  responsive: {
      rules: [{
          condition: {
              maxWidth: 500
          },
          chartOptions: {
              legend: {
                  layout: 'horizontal',
                  align: 'center',
                  verticalAlign: 'bottom'
              }
          }
      }]
  }
  }
  return chartHistoricoVendasOptions;
}


}
