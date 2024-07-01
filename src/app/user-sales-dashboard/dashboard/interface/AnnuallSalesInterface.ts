export interface Dataset {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }
  
  export interface BasicData {
    labels: string[];
    datasets: Dataset[];
  }
  
  export interface LegendLabels {
    color: string;
  }
  
  export interface Legend {
    labels: LegendLabels;
  }
  
  export interface Plugins {
    legend: Legend;
  }
  
  export interface Ticks {
    color: string;
  }
  
  export interface Grid {
    color: string;
    drawBorder: boolean;
  }
  
  export interface Scale {
    beginAtZero?: boolean;
    ticks: Ticks;
    grid: Grid;
  }
  
  export interface Scales {
    y: Scale;
    x: Scale;
  }
  
  export interface BasicOptions {
    plugins: Plugins;
    scales: Scales;
  }