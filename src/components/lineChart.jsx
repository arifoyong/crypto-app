import React from 'react'
import { Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title as ChartTitle,
  Tooltip,
  Legend } from 'chart.js'
  
 import { Line } from 'react-chartjs-2'
import { Col, Row, Typography } from 'antd'

const { Title } = Typography


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ChartTitle,
  Tooltip,
  Legend
);

const LineChart = ({coinHistory, currentPrice, coinName}) => {
  const coinPrice = []
  const coinTimeStamp = []

  for (let i=0; i<coinHistory?.history.length; i += 1) {
    const idx = coinHistory.history.length - 1 - i
    coinPrice.push(coinHistory.history[idx].price)
    coinTimeStamp.push(new Date(coinHistory.history[idx].timestamp * 1000).toLocaleDateString())
  }

  const data = {
    labels: coinTimeStamp,
    datasets: [
      {
        label: 'Price in USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd'
      }
    ]
  }


  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      // title: {
      //   display: true,
      //   text: 'Chart.js Line Chart',
      // },
    },
  }



  return  (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Price Chart
          <Col className="price-container">
            <Title level={5} className="price-change">{coinHistory?.data?.change}</Title>
            <Title level={5} className="current-price">Current: {coinName} Price: ${currentPrice}</Title>
          
          </Col>
        </Title>
      </Row>
      <Line data={data}  options={options}/>
    </>
  )
}

export default LineChart