import { FUSIONCHARTS_BASE_HTML } from '../constants/fusioncharts';

const buildFusionChartsHTML = (chartConfig: unknown): string => {
  return FUSIONCHARTS_BASE_HTML.replace('CHART_CONFIG', JSON.stringify(chartConfig));
};

export { buildFusionChartsHTML };
