interface Dataset {
    type: string;
    label: string;
    borderColor?: string;
    borderWidth?: number;
    fill?: boolean;
    tension?: number;
    data: number[];
    backgroundColor?: string;
  }
  
  export interface ChartData {
    labels: string[];
    datasets: Dataset[];
  }

interface LegendLabels {
    color: string;
  }
  
  interface Legend {
    labels: LegendLabels;
  }
  
  interface Plugins {
    legend: Legend;
  }
  
  interface Ticks {
    color: string;
  }
  
  interface Grid {
    color: string;
  }
  
  interface Axis {
    ticks: Ticks;
    grid: Grid;
  }
  
  interface Scales {
    x: Axis;
    y: Axis;
  }
  
  export interface ChartOptions {
    maintainAspectRatio: boolean;
    aspectRatio: number;
    plugins: Plugins;
    scales: Scales;
  }