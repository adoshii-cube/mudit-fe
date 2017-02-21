<%@page import="org.icube.helper.Stopwatch"%>
<%@page import="java.util.ArrayList"%>
<%@page import="org.icube.question.Question"%>
<%@page import="org.json.JSONArray"%>
<%@page import="org.icube.metric.Metric"%>
<%@page import="org.icube.chart.Chart"%>
<%@page import="java.util.List"%>
<%@page import="org.icube.chart.ChartHelper"%>
<%-- 
    Document   : hiring
    Created on : 31 Jan, 2017, 4:49:12 PM
    Author     : adoshi
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>OWEN Analytics - AI driven Hiring</title>

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
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">
        <!--<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:regular,bold,thin,black,medium&amp;lang=en">-->
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="css/material.min.css">
        <!--<link href="css/materialdesignicons.css" media="all" rel="stylesheet" type="text/css" />-->
        <link rel="stylesheet" href="css/styles.css">
        <!--<link rel="stylesheet" href="css/mdl-selectfield.min.css">-->
        <link rel="stylesheet" type="text/css" href="css/dc.css"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

        <link rel='shortcut icon' type='image/x-icon' href='images/OWEN_Favicon.ico'/>

        <!-- Chrome, Firefox OS and Opera -->
        <meta name="theme-color" content="#303f9f">
        <!-- Windows Phone -->
        <meta name="msapplication-navbutton-color" content="#303f9f">
        <!-- iOS Safari -->
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="#303f9f">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    </head>
    <body id="hiring_dashboard">
        <div class="mdl-layout mdl-js-layout">
            <header class="mdl-layout__header mdl-layout__header--scroll mdl-layout__header--transparent header-shadow">
                <div class="mdl-layout__header-row">
                    <!-- Title -->
                    <span class="android-title mdl-layout-title">
                        <img class="android-logo-image" src="images/Axis_Bank_logo.svg" alt="Axis Bank Logo">
                    </span>
                    <!-- Add spacer, to align navigation to the right -->
                    <div class="mdl-layout-spacer"></div>
                    <!-- Navigation -->
                    <div class="android-navigation-container">
                        <nav class="android-navigation mdl-navigation">
                            <a class="mdl-navigation__link" href="">Hiring</a>
                            <a class="mdl-navigation__link" href="">Onboarding & Engagement</a>
                            <a class="mdl-navigation__link" href="">Attrition</a>
                            <a class="mdl-navigation__link" href="index.jsp">Logout</a>
                        </nav>
                    </div>
                    <span class="android-mobile-title mdl-layout-title">
                        <img class="android-logo-image" src="images/Axis_Bank_logo.svg" alt="Axis Bank Logo">
                    </span>
                </div>
            </header>
            <div class="mdl-layout__drawer">
                <nav class="mdl-navigation">
                    <a class="mdl-navigation__link" href="">Hiring</a>
                    <a class="mdl-navigation__link" href="">Onboarding & Engagement</a>
                    <a class="mdl-navigation__link" href="">Attrition</a>
                    <a class="mdl-navigation__link" href="index.jsp">Logout</a>
                </nav>
            </div>
            <main class="mdl-layout__content">
                <%
                    int totalTabs = 1;
                    int tabNumber = 1;
                %>
                <!--<section class="mdl-layout__tab-panel" id="scroll-tab-<%=tabNumber%>">-->
                <div class="page-content">
                    <!--<div id="loader" class="mdl-progress mdl-js-progress mdl-progress__indeterminate"></div>-->
                    <div class="mdl-tabs vertical-mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
                        <div class="mdl-grid mdl-grid--no-spacing">
                            <div class="mdl-cell mdl-cell--2-col mdl-cell--8-col-tablet mdl-cell--4-col-phone">
                                <div class="mdl-tabs__tab-bar">
                                    <%
                                        ChartHelper ch = new ChartHelper();
                                        List<Question> questionList = ch.getQuestionForTab(tabNumber);
                                        List<Integer> questionIdList = new ArrayList<Integer>();
                                        for (int i = 0; i < questionList.size(); i++) {
                                            Question q = questionList.get(i);
                                            String question = q.getQuestionText();
                                            int questionId = q.getPageId();
                                            questionIdList.add(q.getPageId());
                                    %>

                                    <a href="#tab<%=questionId%>-panel" class="mdl-tabs__tab vertical-mdl-tabs-disabled" id="question-tab-<%=questionId%>">
                                        <!--<span class="hollow-circle"></span>-->
                                        <div>
                                            <%=question%>
                                        </div>
                                    </a>
                                    <%}%>   
                                </div>

                            </div>

                            <div class="mdl-cell mdl-cell--10-col mdl-cell--8-col-tablet mdl-cell--4-col-phone" id="parentDiv">
                                <%
                                    JSONArray qIdList = new JSONArray(questionIdList);
                                    Question q = questionList.get(0);
                                    int questionId = q.getPageId();
                                %>
                                <div class="mdl-tabs__panel" id="tab<%=questionId%>-panel"> 
                                    <div class="android-card-container">
                                        <%Stopwatch sw = new Stopwatch();
                                            List<Metric> rawData = ch.getChartDataForPage(questionId);
                                            System.out.println("getChartDataForPage : " + sw.elapsedTime());%>
                                        <%  Stopwatch sw1 = new Stopwatch();
                                            JSONArray rawDataInJSON = new JSONArray(rawData);
                                            System.out.println("rawDataInJSON data : " + rawDataInJSON.length());
                                            System.out.println("rawDataInJSON : " + sw1.elapsedTime());%>
                                        <%Stopwatch sw3 = new Stopwatch();
                                            List<Chart> chartList = ch.getChartMapping(questionId);
                                            System.out.println("chartList : " + sw3.elapsedTime());%>
                                        <%Stopwatch sw4 = new Stopwatch();
                                            for (int j = 0; j < chartList.size(); j++) {
                                                Chart chart = chartList.get(j);
                                                String chartType = chart.getChartType();
                                                String className = "";
                                                if (chartType.equals("Map")) {
                                                    className = "mdl-chart__map mdl-cell--4-col";
                                                } else if (chartType.equals("Pie")) {
                                                    className = "mdl-chart__pie mdl-cell--4-col";
                                                } else if (chartType.equals("Bar")) {
                                                    className = "mdl-chart__bar mdl-cell--4-col";
                                                } else if (chartType.equals("Dropdown")) {
                                                    className = "mdl-chart__dropdown mdl-cell--4-col";
                                                } else if (chartType.equals("Timeseries")) {
                                                    className = "mdl-chart__timeseries mdl-cell--12-col";
                                                }
                                        %>
                                        <div class="mdl-cell mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp <%=className%>" id="pg<%=questionId%>_chart<%=chart.getChartId()%>">
                                            <div class="mdl-card__title">
                                                <h2 class="mdl-card__title-text"><%=chart.getChartTitle()%></h2>
                                            </div>
                                            <input type="hidden" id="chartType" value='<%=chart.getChartType()%>'/>
                                            <input type="hidden" id="chartMetricId" value='<%=chart.getMetricId()%>'/>
                                            <input type="hidden" id="pageNumber" value='<%=questionId%>'/>
                                            <input type="hidden" id="totalPages" value='<%=totalTabs%>'/>
                                        </div>
                                        <%}
                                            System.out.println("chartList looping : " + sw4.elapsedTime());
                                        %>
                                    </div>
                                </div>
                                <input type="hidden" id="rawData<%=questionId%>" value='<%=rawDataInJSON%>'/>
                                <% //}%> 
                                <input type="hidden" id="questionIdList" value='<%=qIdList%>'/> 
                            </div>
                        </div>
                    </div>

                </div>
                <!--</section>-->
                <footer class="mdl-mini-footer">
                    <div class="mdl-mini-footer__left-section">
                        <div class="mdl-logo">
                            <img class="android-logo-image" src="images/OWEN_Logo_white.png" alt="OWEN Logo">
                            © 2017 i-Cube Analytics & Data Services - All rights reserved.
                        </div>
                        <!--<ul class="mdl-mini-footer__link-list">-->
                        <!--<li><a href="#">Help</a></li>-->
                        <!--<li><a href="#">Privacy & Terms</a></li>-->
                        <!--</ul>-->
                    </div>
                </footer>
            </main>
        </div>
        <script src="js/material.min.js"></script>
        <script src="js/mdl-selectfield.min.js"></script>
        <script src="js/d3.min.js"></script>
        <script src="js/crossfilter.min.js"></script>
        <script src="js/dc.min.js"></script>

        <!--<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.js" charset="utf-8"></script>-->
        <!--<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/crossfilter/1.3.12/crossfilter.js"></script>-->

        <!--<script src="js/mudit.js"></script>-->
        <!--<script src="js/dalela.js"></script>-->
        <script src="js/lucknow.js"></script>
    </body>
</html>