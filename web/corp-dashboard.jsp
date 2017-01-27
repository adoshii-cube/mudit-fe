<%@page import="org.icube.question.Question"%>
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
                <%
                    int totalTabs = 4;
                    for (int tabNumber = 1; tabNumber <= totalTabs; tabNumber++) {%>
                <section class="mdl-layout__tab-panel" id="scroll-tab-<%=tabNumber%>">
                    <div class="page-content">
                        <div class="mdl-tabs vertical-mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
                            <div class="mdl-grid mdl-grid--no-spacing">
                                <div class="mdl-cell mdl-cell--3-col mdl-cell--4-col-phone">
                                    <div class="mdl-tabs__tab-bar">
                                        <%
                                            ChartHelper ch = new ChartHelper();
                                            List<Question> questionList = ch.getQuestionForTab(tabNumber);
                                            for (int i = 0; i < questionList.size(); i++) {
                                                Question q = questionList.get(i);
                                                String question = q.getQuestion();
                                                int questionNum = q.getPageId();
                                        %>

                                        <a href="#tab<%=questionNum%>-panel" class="mdl-tabs__tab">
                                            <!--<span class="hollow-circle"></span>-->
                                            <div>
                                                <%=question%>
                                            </div>
                                        </a>
                                        <%}%>   
                                    </div>

                                </div>

                                <div class="mdl-cell mdl-cell--9-col">
                                    <%
                                        //ChartHelper ch1 = new ChartHelper();
                                        List<Question> questionList1 = ch.getQuestionForTab(tabNumber);
                                        for (int i = 0; i < questionList1.size(); i++) {
                                            Question q = questionList1.get(i);
                                            int questionNum = q.getPageId();


                                    %>
                                    <div class="mdl-tabs__panel" id="tab<%=questionNum%>-panel"> 

                                        <div class="android-card-container mdl-grid">
                                            <%

                                                List<Metric> rawData = ch.getChartDataForPage(questionNum);
                                                JSONArray rawDataInJSON = new JSONArray(rawData);
                                                String rawDataJSONArray = rawDataInJSON.toString();

                                                List<Chart> chartList = ch.getChartMapping(questionNum);

                                                for (int j = 0; j < chartList.size(); j++) {
                                                    Chart chart = chartList.get(j);
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
                                            <div class="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp <%=className%>" id="pg<%=questionNum%>_chart<%=chart.getChartId()%>">
                                                <div class="mdl-card__title">
                                                    <h2 class="mdl-card__title-text"><%=chart.getChartTitle()%></h2>
                                                </div>
                                                <input type="hidden" id="chartType" value='<%=chart.getChartType()%>'/>
                                                <input type="hidden" id="chartMetricId" value='<%=chart.getMetricId()%>'/>
                                                <input type="hidden" id="pageNumber" value='<%=questionNum%>'/>
                                                <input type="hidden" id="totalPages" value='<%=totalTabs%>'/>
                                            </div>
                                            <%}%>
                                        </div>
                                    </div>
                                    <input type="hidden" id="rawData<%=questionNum%>" value='<%=rawDataJSONArray%>'/>  
                                    <%}%> 
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <%}%>
            </main>
        </div>
        <script src="js/material.min.js"></script>
        <!--TO DO ADITYA ::: REPLACE JS URL WITH LOCAL-->
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.js" charset="utf-8"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/crossfilter/1.3.12/crossfilter.js"></script>
        <script type="text/javascript" src="http://dc-js.github.io/dc.js/js/dc.js"></script>
        <script src="js/mudit.js"></script>
    </body>
</html>