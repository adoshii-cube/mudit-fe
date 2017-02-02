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
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="css/material.min.css">
        <link href="css/materialdesignicons.css" media="all" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="css/styles.css">
        <link rel="stylesheet" href="css/mdl-selectfield.min.css">

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

        <link rel="stylesheet" type="text/css" href="css/dc.css"/>
        <link rel="stylesheet" type="text/css" href="css/slidebars.css"/>

        <link rel='shortcut icon' type='image/x-icon' href='images/OWEN_Favicon.ico'/>

        <!-- Chrome, Firefox OS and Opera -->
        <meta name="theme-color" content="#303f9f">
        <!-- Windows Phone -->
        <meta name="msapplication-navbutton-color" content="#303f9f">
        <!-- iOS Safari -->
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="#303f9f">
    </head>
    <body>
        <div class="mdl-layout mdl-js-layout">
            <header class="mdl-layout__header mdl-layout__header--scroll">
                <div class="mdl-layout__header-row">
                    <!-- Title -->
                    <span class="mdl-layout-title">
                        <img class="android-logo-image" src="images/OWEN_Logo_white.png" alt="OWEN Logo">
                    </span>
                    <!-- Add spacer, to align navigation to the right -->
                    <div class="mdl-layout-spacer"></div>
                    <!-- Navigation -->
                    <nav class="mdl-navigation">
                        <a class="mdl-navigation__link" href="">Link</a>
                        <a class="mdl-navigation__link" href="">Link</a>
                        <a class="mdl-navigation__link" href="">Link</a>
                        <a class="mdl-navigation__link" href="">Link</a>
                    </nav>
                </div>
            </header>
            <div class="mdl-layout__drawer">
                <span class="mdl-layout-title">Title</span>
                <nav class="mdl-navigation">
                    <a class="mdl-navigation__link" href="">Link</a>
                    <a class="mdl-navigation__link" href="">Link</a>
                    <a class="mdl-navigation__link" href="">Link</a>
                    <a class="mdl-navigation__link" href="">Link</a>
                </nav>
            </div>
            <main class="mdl-layout__content">
                <div class="page-content">
                    <div canvas="container">

                        <p>You'd need to open the console to view the results of some of these tests.</p>

                        <h4>Left Slidebar Controls</h4>

                            <button class="js-toggle-left-slidebar">Toggle left Slidebar</button>
                        

                        <h4>Right Slidebar Controls</h4>

                        <p>
                            <button class="js-open-right-slidebar">Open right Slidebar</button>
                            <button class="js-close-right-slidebar">Close right Slidebar</button>
                            <button class="js-toggle-right-slidebar">Toggle right Slidebar</button>
                        </p>

                        <h4>Top Slidebar Controls</h4>

                        <p>
                            <button class="js-open-top-slidebar">Open top Slidebar</button>
                            <button class="js-close-top-slidebar">Close top Slidebar</button>
                            <button class="js-toggle-top-slidebar">Toggle top Slidebar</button>
                        </p>

                        <h4>Bottom Slidebar Controls</h4>

                        <p>
                            <button class="js-open-bottom-slidebar">Open bottom Slidebar</button>
                            <button class="js-close-bottom-slidebar">Close bottom Slidebar</button>
                            <button class="js-toggle-bottom-slidebar">Toggle bottom Slidebar</button>
                        </p>

                        <h4>Other Controls</h4>

                        <p>
                            <button class="js-close-any-slidebar">Close any Slidebar</button>
                        </p>

                        <h4>Initialization, Exit and CSS Reset</h4>

                        <p>
                            <button class="js-initialize-slidebars">Initialize Slidebars</button>
                            <button class="js-exit-slidebars">Exit Slidebars</button>
                            <button class="js-reset-slidebars-css">Reset Slidebars CSS</button>
                        </p>

                        <h4>Is and Get</h4>

                        <p>
                            <button class="js-is-active">Is Slidebars active?</button>
                            <button class="js-is-active-slidebar">Is Slidebar with id active?</button>
                            <button class="js-get-active-slidebar">Get id of active Slidebar</button>
                            <button class="js-get-all-slidebars">Get all Slidebar id's</button>
                            <button class="js-get-slidebar">Get Slidebar by id</button>
                        </p>

                        <h4>Callbacks</h4>

                        <p>
                            <button class="js-init-callback">Init callback</button>
                            <button class="js-exit-callback">Exit callback</button>
                            <button class="js-css-callback">CSS callback</button>
                            <button class="js-open-callback">Open callback</button>
                            <button class="js-close-callback">Close callback</button>
                            <button class="js-toggle-callback">Toggle callback</button>
                        </p>
                    </div>

                    <div off-canvas="slidebar-1 left reveal">
                        <p>Slidebar with id 'slidebar-1' on the left side and reveal style.</p>
                    </div>

                    <div off-canvas="slidebar-2 right shift">
                        <p>Slidebar with id 'slidebar-2' on the right side and shift style.</p>
                    </div>

                    <div off-canvas="slidebar-3 top push">
                        <p>Slidebar with id 'slidebar-3' on the top and push style.</p>
                    </div>

                    <div off-canvas="slidebar-4 bottom overlay">
                        <p>Slidebar with id 'slidebar-4' on the bottom and overlay style.</p>
                    </div>
                </div>
            </main>
        </div>
        <script src="js/material.min.js"></script>
        <script src="js/slidebars.js"></script>
        <script src="js/scripts.js"></script>
    </body>
</html>
