import { Doughnut } from 'react-chartjs-2';

export default function DashboardDoughnutChart(props) {
  return <Doughnut data={props.data} />;
}
