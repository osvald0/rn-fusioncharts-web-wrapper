import React from 'react';
import WebView from 'react-native-webview';

import { buildFusionChartsHTML } from '../helpers/fusioncharts';

type Props = {
  chartConfig: unknown;
};

const FusionCharts = (props: Props): JSX.Element => {
  const { chartConfig } = props;
  const sourceHtml = buildFusionChartsHTML(chartConfig);

  return <WebView originWhitelist={['*']} source={{ html: sourceHtml }} />;
};

export default FusionCharts;
