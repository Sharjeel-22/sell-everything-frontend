// Define the interface for the dataset
export interface Dataset {
    label: string;
    fill: boolean;
    borderColor: string;
    yAxisID: string;
    tension: number;
    data: number[]; // Assuming itemSellingRatio() returns an array of numbers
  }
  
  // Define the interface for the main data object
  export interface ItemSellingRatioChartData {
    labels: string[];
    datasets: Dataset[];
  }