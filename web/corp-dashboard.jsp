<%@page import="org.json.JSONArray"%>
<%@page import="org.icube.metric.Metric"%>
<%@page import="org.icube.chart.Chart"%>
<%@page import="java.util.List"%>
<%@page import="org.icube.chart.ChartHelper"%>
<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html lang="en">
    <head>
        <title>OWEN Analytics - AI driven people solutions</title>

        <meta name="description" content="Axis Bank - OWEN Analytics HR Solutions">
        <meta name="keywords" content="human resources, HR, big data, talent management, talent acquisition, productivity, onboarding, onboarding and engagement, recruitment, solution, insights, machine learning, artificial intelligence, organizational network analysis, ona, retention, attrition">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
        <meta content="IE=11;IE=Edge" http-equiv="X-UA-Compatible">
        <!--<meta charset="utf-8">-->
        <meta http-equiv="content-type" content="text/html; charset=UTF8">

        <meta itemprop="name" content="OWEN Analytics - AI driven people solutions">
        <meta itemprop="description" content="Axis Bank - OWEN Analytics HR Solutions">

        <meta property="og:type" content="website">
        <meta property="og:title" content="OWEN Analytics">
        <meta property="og:description" content="Axis Bank - OWEN Analytics HR Solutions">
        <meta property="og:url" content="http://www.owenanalytics.com/index.html/">
        <meta property="og:site_name" content="OWEN Analytics">
        <meta property="og:locale" content="en_IN">


        <!-- Page styles -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="css/material.min.css">
        <link href="css/materialdesignicons.css" media="all" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="css/styles.css">
        <link rel="stylesheet" href="css/mdl-selectfield.min.css">

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

        <link rel="stylesheet" type="text/css" href="css/dc.css"/>

        <link rel='shortcut icon' type='image/x-icon' href='images/OWEN_Favicon.ico'/>

        <!-- Chrome, Firefox OS and Opera -->
        <meta name="theme-color" content="#303f9f">
        <!-- Windows Phone -->
        <meta name="msapplication-navbutton-color" content="#303f9f">
        <!-- iOS Safari -->
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="#303f9f">
    </head>
    <body id="corp_dashboard">
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-tabs">
            <header class="mdl-layout__header mdl-layout__header--scroll">
                <!-- Top row, always visible -->
                <div class="mdl-layout__header-row">
                    <!-- Title -->
                    <span class="mdl-layout-title">
                        <img class="android-logo-image" src="images/OWEN_Logo_white.png" alt="OWEN Logo">
                    </span>
                    <div class="mdl-layout-spacer"></div>
                    <nav class="mdl-navigation">
                        <a class="mdl-navigation__link" href="">Logout</a>
                    </nav>
                </div>
                <!-- Bottom row, not visible on scroll -->
                <div class="mdl-layout__tab-bar mdl-js-ripple-effect">
                    <a href="#scroll-tab-1" class="mdl-layout__tab is-active">Executive Dashboard</a>
                    <a href="#scroll-tab-2" class="mdl-layout__tab">Demographics</a>
                    <a href="#scroll-tab-3" class="mdl-layout__tab">Experience</a>
                    <a href="#scroll-tab-4" class="mdl-layout__tab">Sourcing</a>
                </div>
            </header>
            <div class="mdl-layout__drawer">
                <span class="mdl-layout-title">INSTRUCTIONS</span>
                <span class="mdl-layout-title">Pie Chart</span>
                <p>Click on the pie to drill down further by Region and/or Circle</p>
                <span class="mdl-layout-title">Candidate Table</span>
                <p>Update one/many dropdowns to view the applicants list</p>
            </div>
            <main class="mdl-layout__content">
                <section class="mdl-layout__tab-panel is-active" id="scroll-tab-1">
                    <div class="mdl-grid">
                        <%
                            int pageNumber = 1;
                            ChartHelper ch = new ChartHelper();
                            List<Metric> rawData = ch.getChartDataForPage(pageNumber);
                            JSONArray rawDataInJSON = new JSONArray(rawData);
                            String rawDataJSONArray = rawDataInJSON.toString();

                            List<Chart> chartList = ch.getChartMapping(pageNumber);

                            for (int i = 0; i < chartList.size(); i++) {
                                Chart chart = chartList.get(i);
                                String chartType = chart.getChartType();
                                String className = "";
                                if (chartType.equals("Map")) {
                                    className = "mdl-chart__map";
                                } else if (chartType.equals("Pie")) {
                                    className = "mdl-chart__pie";
                                } else if (chartType.equals("Bar")) {
                                    className = "mdl-chart__bar";
                                }
                        %>
                        <div class="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp <%=className%>"
                             id="pg<%=pageNumber%>_chart<%=chart.getChartId()%>">
                            <div class="mdl-card__title">
                                <h2 class="mdl-card__title-text"><%=chart.getChartTitle()%></h2>
                            </div>
                            <div class="reset">Range: <span class="filter"></span>
                                <a>reset</a>
                            </div>
                            <input type="hidden" id="chartType" value='<%=chart.getChartType()%>'/>
                            <input type="hidden" id="chartMetricId" value='<%=chart.getMetricId()%>'/>
                            <input type="hidden" id="pageNumber" value='<%=pageNumber%>'/>
                        </div>
                        <%}%>
                        <input type="hidden" id="rawData<%=pageNumber%>" value='<%=rawDataJSONArray%>'/>
                    </div>
                </section>
                <section class="mdl-layout__tab-panel" id="scroll-tab-2">
                    <div class="mdl-grid">
                        <%
                            pageNumber = 2;

                            for (int i = 0; i < chartList.size(); i++) {
                                Chart chart = chartList.get(i);
                                String chartType = chart.getChartType();
                                String className = "";
                                if (chartType.equals("Map")) {
                                    className = "mdl-chart__map";
                                } else if (chartType.equals("Pie")) {
                                    className = "mdl-chart__pie";
                                } else if (chartType.equals("Bar")) {
                                    className = "mdl-chart__bar";
                                }
                        %>
                        <div class="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp <%=className%>"
                             id="pg<%=pageNumber%>_chart<%=chart.getChartId()%>">
                            <div class="mdl-card__title">
                                <h2 class="mdl-card__title-text"><%=chart.getChartTitle()%></h2>
                            </div>
                            <div class="reset" style="visibility: hidden;">Range: <span class="filter"></span>
                                <a href="javascript:pg<%=pageNumber%>_chart<%=chart.getChartId()%>.filterAll();dc.redrawAll();">reset</a>
                            </div>
                            <input type="hidden" id="chartType" value='<%=chart.getChartType()%>'/>
                            <input type="hidden" id="chartMetricId" value='<%=chart.getMetricId()%>'/>
                            <input type="hidden" id="pageNumber" value='<%=pageNumber%>'/>
                        </div>
                        <%}%>
                        <input type="hidden" id="rawData<%=pageNumber%>" value='<%=rawDataJSONArray%>'/>
                    </div>
                </section>
                <section class="mdl-layout__tab-panel" id="scroll-tab-3">
                    <!--<div class="page-content">-->
                    <div class="mdl-grid">
                        <div class="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp" id="demo-chart-pie">
                            <div class="reset" style="visibility: hidden;">Selected: <span class="filter"></span>
                                <a href="javascript:yearRingChart.filterAll();dc.redrawAll();">reset</a>
                            </div>
                        </div>
                        <div class="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp" id="demo-chart-column">
                            <div class="reset" style="visibility: hidden;">Range: <span class="filter"></span>
                                <a href="javascript:spendHistChart.filterAll();dc.redrawAll();">reset</a>
                            </div>
                        </div>
                        <div class="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp" id="demo-chart-bar">
                            <div class="reset" style="visibility: hidden;">Selected: <span class="filter"></span>
                                <a href="javascript:spenderRowChart.filterAll();dc.redrawAll();">reset</a>
                            </div>
                        </div>
                    </div>
                    <!--</div>-->
                </section>
                <section class="mdl-layout__tab-panel" id="scroll-tab-4">
                    <div class="page-content">
                        <div class="mdl-grid">

                        </div>
                    </div>
                </section>
            </main>
        </div>
        <script src="js/material.min.js"></script>
        <!--TO DO ADITYA ::: REPLACE JS URL WITH LOCAL-->
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.js" charset="utf-8"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/crossfilter/1.3.12/crossfilter.js"></script>
        <script type="text/javascript" src="http://dc-js.github.io/dc.js/js/dc.js"></script>
        <script src="js/mudit.js"></script>
        <script type="text/javascript">

            var yearRingChart = dc.pieChart("#demo-chart-pie"),
                    spendHistChart = dc.barChart("#demo-chart-column"),
                    spenderRowChart = dc.rowChart("#demo-chart-bar");

// use static or load via d3.csv("spendData.csv", function(error, spendData) {/* do stuff */});
            var spendData = [
                {Name: 'Mr A', Spent: '$40', Year: 2011},
                {Name: 'Mr B', Spent: '$10', Year: 2011},
                {Name: 'Mr C', Spent: '$40', Year: 2011},
                {Name: 'Mr A', Spent: '$70', Year: 2012},
                {Name: 'Mr B', Spent: '$20', Year: 2012},
                {Name: 'Mr B', Spent: '$50', Year: 2013},
                {Name: 'Mr C', Spent: '$30', Year: 2013}
            ];

// normalize/parse data
            spendData.forEach(function (d) {
                d.Spent = d.Spent.match(/\d+/);
            });

// set crossfilter
            var ndx = crossfilter(spendData),
                    yearDim = ndx.dimension(function (d) {
                        return +d.Year;
                    }),
                    spendDim = ndx.dimension(function (d) {
                        return Math.floor(d.Spent / 10);
                    }),
                    nameDim = ndx.dimension(function (d) {
                        return d.Name;
                    }),
                    spendPerYear = yearDim.group().reduceSum(function (d) {
                return +d.Spent;
            }),
                    spendPerName = nameDim.group().reduceSum(function (d) {
                return +d.Spent;
            }),
                    spendHist = spendDim.group().reduceCount();
            yearRingChart
                    .dimension(yearDim)
                    .group(spendPerYear)
                    .innerRadius(50)
                    .controlsUseVisibility(true);
            spendHistChart
                    .dimension(spendDim)
                    .group(spendHist)
                    .x(d3.scale.linear().domain([0, 10]))
                    .elasticY(true)
                    .controlsUseVisibility(true);
            spendHistChart
                    .xAxis()
                    .tickFormat(function (d) {
                        return d * 10
                    }); // convert back to base unit
            spendHistChart.yAxis().ticks(2);
            spenderRowChart
                    .dimension(nameDim)
                    .group(spendPerName)
                    .elasticX(true)
                    .controlsUseVisibility(true);
            function show_empty_message(chart) {
                var is_empty = d3.sum(chart.group().all().map(chart.valueAccessor())) === 0;
                var data = is_empty ? [1] : [];
                var empty = chart.svg().selectAll('.empty-message').data(data);
                empty.enter().append('text')
                        .text('NO DATA!')
                        .attr({
                            'text-anchor': 'middle',
                            'alignment-baseline': 'middle',
                            class: 'empty-message',
                            x: chart.margins().left + chart.effectiveWidth() / 2,
                            y: chart.margins().top + chart.effectiveHeight() / 2
                        })
                        .style('opacity', 0);
                empty.transition().duration(1000).style('opacity', 1);
                empty.exit().remove();
            }
            spendHistChart.on('pretransition', show_empty_message);
            spenderRowChart.on('pretransition', show_empty_message);
            dc.renderAll();

        </script>
    </body>
</html>