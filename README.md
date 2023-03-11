# rn fusioncharts web wapper

This is another option to solve the problem described [here](https://github.com/osvald0/fusioncharts-web-wrapper).

# Example use

```
import React from 'react';
import FusionCharts from 'rn-fusioncharts-web-wrapper';
import { StyleSheet, View } from 'react-native';

const FUSIONCHARTS_DATA = {
  type: 'column2d',
  renderAt: 'chart-container',
  width: '600',
  height: '400',
  dataFormat: 'json',
  dataSource: {
    chart: {
      caption: 'Countries With Most Oil Reserves [2017-18]',
      subcaption: 'In MMbbl = One Million barrels',
    },
    data: [
      { label: 'Venezuela', value: '290000' },
      { label: 'Saudi', value: '260000' },
      { label: 'Canada', value: '180000' },
      { label: 'Iran', value: '140000' },
      { label: 'Russia', value: '115000' },
      { label: 'UAE', value: '100000' },
      { label: 'US', value: '30000' },
      { label: 'China', value: '30000' },
    ],
  },
};

const App = () => {
  return (
    <View style={styles.chartContainer}>
      <FusionCharts chartConfig={FUSIONCHARTS_DATA} />
    </View>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    height: '100%',
    width: '100%',
  },
});

export default App;
```
