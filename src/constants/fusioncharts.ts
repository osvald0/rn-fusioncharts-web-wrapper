import Config from 'react-native-config';

const FUSIONCHARTS_BASE_HTML = `
    <!doctype html>
    <html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
        <script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
    </head>
    <body>
        <div id="chart-container"></div>
        <script>
            FusionCharts.options.license({
                key: '${Config.FUSIONCHART_LICENSE_KEY}',
                creditLabel: false,
            });
            FusionCharts.ready(function () {
                var chart = new FusionCharts(CHART_CONFIG).render();
            });
        </script>
    </body>
    </html>
`;

export { FUSIONCHARTS_BASE_HTML };
