
const defaultCoin = 'ETHUSDT';
const defaultTimeframe = 1;
let chartWidget;
let currentCoin = localStorage.getItem('currentCoin') || defaultCoin;
let currentTimeframe = localStorage.getItem('currentTimeframe') || defaultTimeframe;

const coinSelect = document.getElementById('coinSelect');
const timeframeSelect = document.getElementById('timeframeSelect');


coinSelect.value = currentCoin;
timeframeSelect.value = currentTimeframe;

function loadChart(coin, timeframe) {
 
  localStorage.setItem('currentCoin', coin);
  localStorage.setItem('currentTimeframe', timeframe);

  if (chartWidget) {
    chartWidget.remove();
  }

  chartWidget = new TradingView.widget({
    symbol: `${coin}`, 
    interval: timeframe == '1' ? '1' : timeframe == '3' ? '3' : '5', 
    container_id: 'chartContainer', 
    library_path: "/charting_library/", 
    locale: "en",
    autosize: true, 
    theme: "light",
    style: "1", 
    timezone: "Etc/UTC",
    allow_symbol_change: true,
  });
}


coinSelect.addEventListener('change', () => {
  currentCoin = coinSelect.value;
  loadChart(currentCoin, currentTimeframe);
});


timeframeSelect.addEventListener('change', () => {
  currentTimeframe = timeframeSelect.value;
  loadChart(currentCoin, currentTimeframe);
});

loadChart(currentCoin, currentTimeframe);
