import './App.css';
import stockMarket from '../src/stockmarket.jpg'; 
import React, {useState, useEffect} from 'react';


function App() {

  function refreshPage() {
    window.location.reload(false);
  }

  const [date, setDate] = useState();
  const [priceData, setPriceData] = useState(null);
  const [currencyUSD, setCurrencyUSD] = useState();
  const [currencyEUR, setCurrencyEUR] = useState(null);
  const [currencyGBP, setCurrencyGBP] = useState(null);

  useEffect(() => {
          fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
          .then((response) => response.json())
          .then((data) => {
            setDate(data.time.updated);
            setPriceData(data.bpi);
            setCurrencyUSD(priceData.USD)
            setCurrencyEUR(priceData.EUR)
            setCurrencyGBP(priceData.GBP)

            console.log(currencyGBP)
          }
          );
    }
  , )


  return (
    <div className="App">

<div class="main__wrapper">
    <main>
        <h1>The CEO Times</h1>

    <div>
      <button class="refresh" onClick={refreshPage}>refresh news data</button>
    </div>
        
        <aside>
            <div>
                <div class="issue">Issue #1 </div>
                <div class="date">{date}</div> 
                <div class="edition">React JS Edition</div>
            </div>
        </aside>
        <h2 class="title--large main-title">Woman recently starts spending all her free time on newly discovered site, CEO.</h2>
        <div class="main-text multi-column">
        <p>Sometimes, Internet users land themselves in an uncommon situation where an app or website can be used for both work and personal situations. Well, a young crypto enthusiast was spending up to 13 hours a day on the site, CEO-- parent company: EarthLabs-- for work and her hobby, which is also tracking stock prices. </p>
            <p> The developer who uses Machine Learning in her work to predict the amount of elements in mines across the world was amazed by the organized manner that CEO displays their data perfectly for her use.</p>
            <p> <em>"As much as I love coding these algorithms for my company, I also just adore watching stock prices fluctuate during certain periods of time. It's so satisfying to me. I'm glad I came across this company."</em> She additionally loves using the discussion board feature on CEO to educate herself on online stock buying best practices.</p>
        </div>

        <hr class="divider"></hr>

        <h2 class="title--large main-title">Bitcoin pricing index for leading currencies around the globe </h2>

        <div class="row">
          <div class="column">
            <h2>{currencyUSD?.code}</h2>
            <p class="line"></p>
            <p>The U.S. Treasury classified bitcoin as a convertible decentralized virtual currency in 2013. Bitcoin jumped over $18,000 to the highest level in a month during U.S.A's cooling inflation.</p>
            <li>⁍ &nbsp; Rate: {currencyUSD?.rate}</li>
            <li>⁍ &nbsp; Name: {currencyUSD?.description}</li>
            <li>⁍ &nbsp; Symbol: {currencyUSD?.symbol}</li>
            <li>⁍ &nbsp; Float rate: {currencyUSD?.rate_float}</li>
          </div>
          

         <div class="column" >
          <h2>{currencyEUR?.code}</h2>
          <p class="line"></p>
          <p>In July 2021, The European Central Bank launched a pilot project for the "digital euro". A EU credit card company, Huobi allows users to pay from their crypto accounts at point-of-sale stations globally.</p>
            <li>⁍ &nbsp; Rate: {currencyEUR?.rate}</li>
            <li>⁍ &nbsp; Name: {currencyEUR?.description}</li>
            <li>⁍ &nbsp; Symbol: {currencyEUR?.symbol}</li>
            <li>⁍ &nbsp; Float rate: {currencyEUR?.rate_float}</li>
        </div>

        <div class="column">
          <h2>{currencyGBP?.code}</h2>
          <p class="line"></p>
          <p>This past month, His Majesty’s Treasury published a long-anticipated consultation paper for the UK's upcoming crypto regulation. Apart from traditional finance, crypto companies won’t have to report their market data regularly. </p>
            <li>⁍ &nbsp; Rate: {currencyGBP?.rate}</li>
            <li>⁍ &nbsp; Name: {currencyGBP?.description}</li>
            <li>⁍ &nbsp; Symbol: {currencyGBP?.symbol}</li>
            <li>⁍ &nbsp; Float rate: {currencyGBP?.rate_float}</li>
        
        </div>
        <img  class= "image" src={stockMarket}></img>
      </div>

      <p1 class="image-title">Picturing an old stock market held in person in New York City.</p1>

    </main>
</div>

    </div>
  );
}

export default App;
