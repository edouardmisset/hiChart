import './App.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const y = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const options = {
  title: {
    text: 'My chart',
  },
  series: [
    {
      data: x,
    },
    {
      data: y,
    },
  ],
};

function App() {
  return (
    <div className='App'>
      <header className='App-header'>Highcharts</header>
      <main>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </main>
    </div>
  );
}

export default App;
