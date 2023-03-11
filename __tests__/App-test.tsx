import 'react-native';
import renderer from 'react-test-renderer';
import React from 'react';
import App from '../src/App';

jest.mock('react-native-webview', () => 'WebView');

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

describe('App', () => {
  it('Renders correctly', () => {
    const app = renderer.create(<App chartConfig={FUSIONCHARTS_DATA} />).toJSON();
    expect(app).toMatchSnapshot();
  });
});
