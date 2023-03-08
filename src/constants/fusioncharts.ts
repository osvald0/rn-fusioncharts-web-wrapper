const FUSIONCHARTS_BASE_HTML = `
    <!doctype html>
    <html>
    <head>
        <script src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
    </head>
    <body>
        <div id="chart-container"></div>
        <script>
            FusionCharts.ready(function () {
                var chart = new FusionCharts(CHART_CONFIG).render();
            });
        </script>
    </body>
    </html>
`;

export { FUSIONCHARTS_BASE_HTML };
