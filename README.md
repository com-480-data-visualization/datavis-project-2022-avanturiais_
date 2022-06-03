# log_returns 📈

### Team

| Student's name    | SCIPER |
| ----------------- | ------ |
| Etienne Salimbeni | 270963 |
| Carlo Musso       | 283736 |
| Filippo Salmina   | 289092 |

### Context

Correlation between stock prices gives powerful insights into the evolution of financial systems in interesting periods: during a financial crisis, political instability, or significant economic development of a country. Correlation tells us a lot about how stocks are linked, such as how industries are dependent on or independent of crisis or development in specific economic sectors.
The goal of this visualization is to represent the evolution in time of correlation, hierarchies and clustering of various financial stocks.

### GitHub repository

**Note** - this private repository will be updated from time to time, specifically for each Milestone. The actual repository of continuous deployment had to be public for practical reasons. The public repository **log_returns** can be found [here](https://github.com/salimbeni1/log_returns)

### Visualization

The web visualization we are currently working on can be found [here](https://log-returns.vercel.app).

Screen cast : [here](no-link)

Project process book : [here](/milestones/Team%20AvanTuRiais%20-%20PROCESS%20BOOK.pdf).

## Milestone 1

Download [Milestone 1.pdf](https://github.com/com-480-data-visualization/datavis-project-2022-avanturiais_/files/8449218/Team.AvanTuRiais.-.Milestone.1.pdf) or view it in the `/milestones/` [directory](https://github.com/com-480-data-visualization/datavis-project-2022-avanturiais_/tree/main/milestones) on this repository.

## Milestone 2

Download [Milestone 2.pdf](https://github.com/com-480-data-visualization/datavis-project-2022-avanturiais_/files/8630060/Team.AvanTuRiais.-.Milestone.2.pdf) or view it in the `/milestones/` [directory](https://github.com/com-480-data-visualization/datavis-project-2022-avanturiais_/tree/main/milestones) on this repository.

## Dependencies

Install Node.js, this will include the npm and yarn package managers

## Front-End

```
cd front-end
yarn
yarn dev
```

## Back-end

Our setup is very flexible , we have a preview with a static dataset of asset logreturns that you can find in the public folder of the front-end, but we can also connect to an API. In our real-time page we connect to the FTX api for crypto-currencies returns using serverless functions for the backend graph computation, but for more custom and optimized scenarios we have a docker container in case you want to deploy your own API and connect the front-end.

```
cd back-end
docker compose up
```
