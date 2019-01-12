sap.ui.require.preload({"domae/privat/SteckBriefUI/Component.js":'sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","domae/privat/SteckBriefUI/model/models"],function(e,t,i){"use strict";return e.extend("domae.privat.SteckBriefUI.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments),this.getRouter().initialize(),this.setModel(i.createDeviceModel(),"device")}})});',"domae/privat/SteckBriefUI/controller/Root.controller.js":'sap.ui.define(["sap/ui/core/mvc/Controller"],function(t){"use strict";return t.extend("domae.privat.SteckBriefUI.controller.Root",{onAfterRendering:function(){const t=this.getView().getModel("profExpList");t.attachRequestCompleted(function(){t.setProperty("/fellowList",this._getFormattedListText.call(this,"mainProfExpFellowList")),t.setProperty("/mbvdList",this._getFormattedListText.call(this,"mainProfExpMbvdList")),t.setProperty("/tcList",this._getFormattedListText.call(this,"mainProfExpTcList")),t.setProperty("/frList",this._getFormattedListText.call(this,"mainProfExpFrList")),t.setProperty("/vwList",this._getFormattedListText.call(this,"mainProfExpVwList"))}.bind(this))},_getFormattedListText:function(t){const e=this.getView().getModel("i18n").getResourceBundle();let i="<ul class=\'sapUiTinyMarginTop htmlList\'>",s=1;for(;e.hasText(t+s);){const o="</li>";i+="<li>"+e.getText(t+s)+o,s++}return i+="</ul>"}})});',"domae/privat/SteckBriefUI/model/models.js":'sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);return i.setDefaultBindingMode("OneWay"),i}}});',"domae/privat/SteckBriefUI/view/Root.view.xml":'<mvc:View controllerName="domae.privat.SteckBriefUI.controller.Root"\r\n          xmlns:mvc="sap.ui.core.mvc"\r\n          xmlns:core="sap.ui.core"\r\n          xmlns:layout="sap.ui.layout"\r\n          xmlns="sap.m"\r\n          displayBlock="true"><App id="idAppControl"><pages><Page showHeader="false"><content><layout:Grid class="upperGridElements" vSpacing="0"><layout:content><HBox justifyContent="Center" alignItems="Center" class="upperGridElements sapUiMediumMargin pic"><Image class="profilePic"\r\n                                       src="./images/domae_gedreht_lol_qudrat.jpg"\r\n                                       densityAware="false"></Image><layoutData><layout:GridData span="L3M3S3"/></layoutData></HBox><VBox class="upperGridElements sapUiMediumMarginTop"><HBox><Text class="nameTitle nameBox" text="{i18n>name}"/></HBox><HBox><Text class="descriptionTitle descBox" text="{i18n>jobTitle}"/></HBox><layoutData><layout:GridData span="L9M9S9"/></layoutData></VBox></layout:content></layout:Grid><layout:BlockLayout id="BlockLayout"><layout:BlockLayoutRow><layout:BlockLayoutCell class="skillBox onePadding" width="1"><layout:BlockLayout><layout:BlockLayoutRow><layout:BlockLayoutCell class="onePadding" title="{i18n>lbContactTitle}"><layout:Grid class="noMarginPaddingLeftChild"><layout:content><core:Icon\r\n                                                            src="sap-icon://call"><core:layoutData><layout:GridData span="L2M2S2"/></core:layoutData></core:Icon><Text text="{i18n>mobile}"><layoutData><layout:GridData span="L10M10S10"/></layoutData></Text></layout:content></layout:Grid><layout:Grid class="noMarginPaddingLeftChild"><layout:content><core:Icon\r\n                                                            src="sap-icon://email"><core:layoutData><layout:GridData span="L2M2S2"/></core:layoutData></core:Icon><Text text="{i18n>mail}"><layoutData><layout:GridData span="L10M10S10"/></layoutData></Text></layout:content></layout:Grid><layout:Grid class="noMarginPaddingLeftChild" vSpacing="0"><layout:content><core:Icon\r\n                                                            src="sap-icon://home"><core:layoutData><layout:GridData span="L2M2S2"/></core:layoutData></core:Icon><layout:VerticalLayout><Text text="{i18n>street}"/><Text text="{i18n>zip} {i18n>town}"/><layout:layoutData><layout:GridData span="L10M10S10"/></layout:layoutData></layout:VerticalLayout></layout:content></layout:Grid></layout:BlockLayoutCell></layout:BlockLayoutRow><layout:BlockLayoutRow><layout:BlockLayoutCell class="onePadding" title="{i18n>lbEducationTitle}"><layout:Grid class="noMarginPaddingLeftChild sapUiSmallMarginBottom"\r\n                                                         defaultSpan="L12M12S12" vSpacing="0"><layout:content><Text text="{i18n>lbBachelorName}" class="titleBold"/><Text text="{i18n>lbBachelorTitle}"/><Text text="{i18n>lbBachelorTown}"/><Text text="{i18n>lbBachelorPeriod}" class="textEmph"/></layout:content></layout:Grid><layout:Grid class="noMarginPaddingLeftChild sapUiSmallMarginBottom"\r\n                                                         defaultSpan="L12M12S12" vSpacing="0"><layout:content><Text text="{i18n>lbDiplomaName}" class="titleBold"/><Text text="{i18n>lbDiplomaTitle}"/><Text text="{i18n>lbDiplomaTown}"/><Text text="{i18n>lbDiplomaPeriod}" class="textEmph"/></layout:content></layout:Grid><layout:Grid class="noMarginPaddingLeftChild" defaultSpan="L12M12S12"\r\n                                                         vSpacing="0"><layout:content><Text text="{i18n>lbApprenticeName}" class="titleBold"/><Text text="{i18n>lbApprenticeTitle}"/><Text text="{i18n>lbApprenticeTown}"/><Text text="{i18n>lbApprenticePeriod}" class="textEmph"/></layout:content></layout:Grid></layout:BlockLayoutCell></layout:BlockLayoutRow><layout:BlockLayoutRow><layout:BlockLayoutCell class="onePadding" title="{i18n>lbTrainingsTitle}"><layout:Grid class="noMarginPaddingLeftChild"><layout:content><core:Icon\r\n                                                            src="sap-icon://circle-task-2"><core:layoutData><layout:GridData span="L2M2S2"/></core:layoutData></core:Icon><Link\r\n                                                            text="{i18n>lbTrainingsBc400Name}"\r\n                                                            target="_blank"\r\n                                                            href="{i18n>lbTrainingsBc400Url}"\r\n                                                            tooltip="{i18n>lbTrainingsBc400Url}"><layoutData><layout:GridData span="L10M10S10"/></layoutData></Link></layout:content></layout:Grid><layout:Grid class="noMarginPaddingLeftChild"><layout:content><core:Icon\r\n                                                            src="sap-icon://circle-task-2"><core:layoutData><layout:GridData span="L2M2S2"/></core:layoutData></core:Icon><Link\r\n                                                            text="{i18n>lbTrainingsGw100Name}"\r\n                                                            target="_blank"\r\n                                                            href="{i18n>lbTrainingsGw100Url}"\r\n                                                            tooltip="{i18n>lbTrainingsGw100Url}"><layoutData><layout:GridData span="L10M10S10"/></layoutData></Link></layout:content></layout:Grid><layout:Grid class="noMarginPaddingLeftChild"><layout:content><core:Icon\r\n                                                            src="sap-icon://circle-task-2"><core:layoutData><layout:GridData span="L2M2S2"/></core:layoutData></core:Icon><layout:VerticalLayout><Link\r\n                                                                text="{i18n>lbTrainingsHa300Name}"\r\n                                                                target="_blank"\r\n                                                                href="{i18n>lbTrainingsHa300Url}"\r\n                                                                tooltip="{i18n>lbTrainingsHa300Url}"><layoutData><layout:GridData span="L10M10S10"/></layoutData></Link></layout:VerticalLayout></layout:content></layout:Grid></layout:BlockLayoutCell></layout:BlockLayoutRow><layout:BlockLayoutRow><layout:BlockLayoutCell class="onePadding" title="{i18n>lbInterestsTitle}"><layout:Grid class="noMarginPaddingLeftChild"><layout:content><core:Icon\r\n                                                            src="sap-icon://physical-activity"><core:layoutData><layout:GridData span="L2M2S2"/></core:layoutData></core:Icon><Text text="{i18n>lbInterestsTriathlon}"><layoutData><layout:GridData span="L10M10S10"/></layoutData></Text></layout:content></layout:Grid><layout:Grid class="noMarginPaddingLeftChild"><layout:content><core:Icon\r\n                                                            src="sap-icon://card"><core:layoutData><layout:GridData span="L2M2S2"/></core:layoutData></core:Icon><Text text="{i18n>lbInterestsSnowHike}"><layoutData><layout:GridData span="L10M10S10"/></layoutData></Text></layout:content></layout:Grid><layout:Grid class="noMarginPaddingLeftChild"><layout:content><core:Icon\r\n                                                            src="sap-icon://flight"><core:layoutData><layout:GridData span="L2M2S2"/></core:layoutData></core:Icon><layout:VerticalLayout><Text text="{i18n>lbInterestsTraveling}"/><layout:layoutData><layout:GridData span="L10M10S10"/></layout:layoutData></layout:VerticalLayout></layout:content></layout:Grid><layout:Grid class="noMarginPaddingLeftChild"><layout:content><core:Icon\r\n                                                            src="sap-icon://source-code"><core:layoutData><layout:GridData span="L2M2S2"/></core:layoutData></core:Icon><layout:VerticalLayout><Text text="{i18n>lbInterestsProgramming}"/><layout:layoutData><layout:GridData span="L10M10S10"/></layout:layoutData></layout:VerticalLayout></layout:content></layout:Grid></layout:BlockLayoutCell></layout:BlockLayoutRow></layout:BlockLayout></layout:BlockLayoutCell><layout:BlockLayoutCell class="textBox onePadding" width="3"><layout:BlockLayout><layout:BlockLayoutRow><layout:BlockLayoutCell title="{i18n>mainProfileTitle}" class="onePadding"><Text text="{i18n>mainProfileText}"/></layout:BlockLayoutCell></layout:BlockLayoutRow><layout:BlockLayoutRow><layout:BlockLayoutCell\r\n                                                title="{i18n>mainProfExpTitle}"\r\n                                                class="onePadding"></layout:BlockLayoutCell></layout:BlockLayoutRow><layout:BlockLayoutRow><layout:BlockLayoutCell title="" class="onePadding"><VBox class="sapUiTinyMarginBottom"><Title text="{i18n>mainProfExpFellowTitle}" titleStyle="H2"\r\n                                                       class="noShadow titleBold"/><Title text="{i18n>mainProfExpFellowPlace}" titleStyle="H4"\r\n                                                       class="noShadow"/></VBox><VBox><Text class="cellBox"\r\n                                                      text="{i18n>mainProfExpFellowDesc}"/><Title text="{i18n>mainProfExpCoreActivities}" titleStyle="H5"\r\n                                                       class="noShadow titleBold sapUiTinyMarginTop"/><FormattedText htmlText="{profExpList>/fellowList}"/></VBox></layout:BlockLayoutCell></layout:BlockLayoutRow><layout:BlockLayoutRow><layout:BlockLayoutCell title="" class="onePadding"><VBox class="sapUiTinyMarginBottom"><Title text="{i18n>mainProfExpMbvdTitle}" titleStyle="H2"\r\n                                                       class="noShadow titleBold"/><Title text="{i18n>mainProfExpMbvdPlace}" titleStyle="H4"\r\n                                                       class="noShadow"/></VBox><VBox><Text class="cellBox" text="{i18n>mainProfExpMbvdDesc}"/><Title text="{i18n>mainProfExpCoreActivities}" titleStyle="H5"\r\n                                                       class="noShadow titleBold sapUiTinyMarginTop"/><FormattedText htmlText="{profExpList>/mbvdList}"/></VBox></layout:BlockLayoutCell></layout:BlockLayoutRow><layout:BlockLayoutRow><layout:BlockLayoutCell title="" class="onePadding"><VBox class="sapUiTinyMarginBottom"><Title text="{i18n>mainProfExpTcTitle}" titleStyle="H2"\r\n                                                       class="noShadow titleBold"/><Title text="{i18n>mainProfExpTcPlace}" titleStyle="H4"\r\n                                                       class="noShadow"/></VBox><VBox><Text class="cellBox" text="{i18n>mainProfExpTcDesc}"/><Title text="{i18n>mainProfExpCoreActivities}" titleStyle="H5"\r\n                                                       class="noShadow titleBold sapUiTinyMarginTop"/><FormattedText htmlText="{profExpList>/tcList}"/></VBox></layout:BlockLayoutCell></layout:BlockLayoutRow><layout:BlockLayoutRow><layout:BlockLayoutCell title="" class="onePadding"><VBox class="sapUiTinyMarginBottom"><Title text="{i18n>mainProfExpFrTitle}" titleStyle="H2"\r\n                                                       class="noShadow titleBold"/><Title text="{i18n>mainProfExpFrPlace}" titleStyle="H4"\r\n                                                       class="noShadow"/></VBox><VBox><Text text="{i18n>mainProfExpFrDesc}" class="cellBox"/><Title text="{i18n>mainProfExpCoreActivities}" titleStyle="H5"\r\n                                                       class="noShadow titleBold sapUiTinyMarginTop"/><FormattedText htmlText="{profExpList>/frList}"/></VBox></layout:BlockLayoutCell></layout:BlockLayoutRow><layout:BlockLayoutRow><layout:BlockLayoutCell title="" class="onePadding"><VBox class="sapUiTinyMarginBottom"><Title text="{i18n>mainProfExpVwTitle}" titleStyle="H3"\r\n                                                       class="noShadow titleBold"/><Title text="{i18n>mainProfExpVwPlace}" titleStyle="H4"\r\n                                                       class="noShadow"/></VBox><VBox><Text text="{i18n>mainProfExpVwDesc}" class="cellBox"/><Title text="{i18n>mainProfExpCoreActivities}" titleStyle="H5"\r\n                                                       class="noShadow titleBold sapUiTinyMarginTop"/><FormattedText htmlText="{profExpList>/vwList}"/></VBox></layout:BlockLayoutCell></layout:BlockLayoutRow></layout:BlockLayout></layout:BlockLayoutCell></layout:BlockLayoutRow></layout:BlockLayout></content></Page></pages></App></mvc:View>',"domae/privat/SteckBriefUI/i18n/i18n_de.properties":"#Application\r\ntitle=Lebenslauf\r\nappTitle=SteckBriefUI\r\nappDescription=Kurzer beruflicher Steckbrief\r\n\r\n##Personal Information\r\nname=Dominik Espitalier\r\njobTitle=SAP Fiori Full Stack Entwickler\r\n\r\n#Left Bar\r\n\r\n##Contact\r\nlbContactTitle=Kontakt\r\nmobile=0151 678 34524\r\nmail=Dominik.Espitalier@gmx.de\r\nstreet=Kreuzstra\\u00DFe 15\r\nzip=76698\r\ntown=Ubstadt-Weiher\r\n\r\n##Education\r\nlbEducationTitle=Ausbildung\r\nlbBachelorName=Bachelor of Science\r\nlbBachelorTitle=Business Information Systems - International\r\nlbBachelorTown=University of Applied Sciences - Frankfurt am Main\r\nlbBachelorPeriod=2008 - 2014\r\n\r\n##Technical Diploma\r\nlbDiplomaName=Fachabitur\r\nlbDiplomaTitle=Schwerpunkt: Informatik\r\nlbDiplomaTown=Hochtaunusschule - Oberursel\r\nlbDiplomaPeriod=2006 - 2007\r\n\r\n##Apprenticeship\r\nlbApprenticeName=Schulische Ausbildung\r\nlbApprenticeTitle=Technischer Assistent f\\u00FCr Informationsverarbeitung\r\nlbApprenticeTown=Hochtaunusschule - Oberursel\r\nlbApprenticePeriod=2004 - 2006\r\n\r\n##Trainings\r\nlbTrainingsTitle=SAP Schulungen\r\nlbTrainingsBc400Name=BC 400\r\nlbTrainingsBc400Url=https://training.sap.com/course/bc400-abap-workbench-grundlagen-classroom-016-de-de/\r\nlbTrainingsGw100Name=GW 100\r\nlbTrainingsGw100Url=https://training.sap.com/course/gw100-sap-gateway---erstellen-von-odata-services-remoteclassroom-016-de-de/?\r\nlbTrainingsHa300Name=HA 300\r\nlbTrainingsHa300Url=https://training.sap.com/course/ha300e-sap-hana-modeling-e-learning-012-de-en/\r\n\r\n##Interests\r\nlbInterestsTitle=Hobbies\r\nlbInterestsTriathlon=Triathlon\r\nlbInterestsSnowHike=Snowboarden / Wandern\r\nlbInterestsTraveling=Reisen\r\nlbInterestsProgramming=Programmieren\r\n\r\n#Main Body\r\nmainProfileTitle=Profil\r\nmainProfileText=L\\u00F6sungsorientierter SAP-Technologieberater mit 4 Jahren Erfahrung in der SAPUI5- und OData-Entwicklung. Mein Hauptinteresse gilt leistungsstarken, wartbaren und einfach zu bedienenden SAP Fiori-Anwendungen. Hervorragende Kenntnisse in der Einarbeitung in neue Technologien und der Umsetzung von Kundenanforderungen. Enthusiastischer Teamplayer, der st\\u00E4ndig motiviert ist, sich neuen Herausforderungen zu stellen und sein Wissen weiterzugeben.\r\nmainProfExpTitle=Berufserfahrung - SAP Deutschland - Januar 2015 bis heute\r\nmainProfExpCoreActivities=Kernaufgaben\r\n\r\n##Fellowship\r\nmainProfExpFellowTitle=SAP Cloud Platform Entwicklung\r\nmainProfExpFellowPlace=SAP SE, Walldorf / Deutschland - 6 Monate\r\nmainProfExpFellowDesc=Entwicklung und Administration einer Mendix-Anwendung zur Erstellung von Schulungsunterlagen\r\nmainProfExpFellowList1=Entwicklung der Mendix Anwendung unter Benutzung des Mendix Desktop Modelers\r\nmainProfExpFellowList2=Entwicklung einer Multi-Target-Anwendung bestehend aus einem SAPUI5-Frontend, einem XSOData-Service und einem Hana-Datenbankmodul.\r\nmainProfExpFellowList3=Aufbau und Verwaltung der Entwicklungslandschaft auf der SAP Cloud Platform (Cloud Foundry)\r\nmainProfExpFellowList4=Aufbau einer Continuous Integration und Continuous Delivery Pipeline mit Jenkins\r\nmainProfExpFellowList5=Einrichtung des SAP Cloud Connectors, um eine End-to-End-Verbindung von der SAP Cloud Platform zum S4Hana Backend mit Principle Propagation aufzubauen.\r\n\r\n##MBVD\r\nmainProfExpMbvdTitle=SAP Fiori Anwendungsentwicklung\r\nmainProfExpMbvdPlace=Automobilhersteller, Deutschland - 12 Monate\r\nmainProfExpMbvdDesc=Entwicklung von zwei SAP Fiori-Anwendungen zur Analyse und Bearbeitung von Angeboten und Auftr\\u00E4gen im Rahmen des Automobilvertriebs. Die Daten stammen aus einem SAP Business Warehouse on HANA und werden \\u00FCber einen OData Service an das Frontend gesendet.\r\nmainProfExpMbvdList1=Entwicklung der SAP Fiori-Anwendungen (SAPUI5)\r\nmainProfExpMbvdList2=Entwicklung der OData Services unter Verwendung von Abap-CDS-Views\r\nmainProfExpMbvdList3=Entwicklung / Bereitstellung von Anwendungen mit SAP WebIDE auf der SAP Cloud Platform\r\nmainProfExpMbvdList4=Aufbau der lokalen Entwicklungsumgebung mit Jetbrains Webstorm, Grunt und nodeJs\r\nmainProfExpMbvdList5=Arbeiten mit Git als Versionskontrollsystem\r\n\r\n##TC\r\nmainProfExpTcTitle=SAP Fiori Anwendungsentwicklung\r\nmainProfExpTcPlace=Fluggesellschaft, Deutschland - 12 Monate\r\nmainProfExpTcDesc=Entwicklung und Erweiterung mehrerer SAP Fiori-Anwendungen zur Analyse von Flugdaten. Die Daten stammen von einem SAP Application Server ABAP und werden \\u00FCber einen OData Service an das Frontend gesendet.\r\nmainProfExpTcList1=Entwicklung und Erweiterung der SAP Fiori-Anwendungen (SAPUI5)\r\nmainProfExpTcList2=Entwicklung der OData Services unter Verwendung von Abap-CDS-Views\r\nmainProfExpTcList3=Entwicklung / Bereitstellung von Anwendungen mit SAP WebIDE auf der SAP Cloud Platform\r\nmainProfExpTcList4=Aufbau der lokalen Entwicklungsumgebung mit Jetbrains Webstorm, Grunt und nodeJs\r\nmainProfExpTcList5=Arbeiten mit Git als Versionskontrollsystem\r\n\r\n#FR\r\nmainProfExpFrTitle=SAPUI5 Frontend Anwendungsentwicklung\r\nmainProfExpFrPlace=S\\u00FC\\u00DFwarenhersteller, Deutschland - 12 Monate\r\nmainProfExpFrDesc=Entwicklung einer mobilen Anwendung zur Pr\\u00E4sentation von Produkten und deren Vermarktung in Superm\\u00E4rkten. Die dargestellten Bilder stammen aus einem SAP Netweaver Java Backend und werden \\u00FCber einen REST-Service an das Frontend gesendet.\r\nmainProfExpFrList1=Entwicklung des SAPUI5 Frontends\r\nmainProfExpFrList2=Administration des SAP Netweaver Java\r\nmainProfExpFrList3=Aufbau der lokalen Entwicklungsumgebung mit Jetbrains Webstorm, Grunt und nodeJs\r\nmainProfExpFrList4=Arbeiten mit Git als Versionskontrollsystem\r\n\r\n#VW\r\nmainProfExpVwTitle=SAPUI5 Frontend Anwendungsentwicklung\r\nmainProfExpVwPlace=Automobilhersteller, Deutschland - 12 Monate\r\nmainProfExpVwDesc=Entwicklung einer Dashboard-Applikation zur Visualisierung von Lieferengp\\u00E4ssen zwischen Lager und Produktionslinie. Die Daten stammen von einem SAP Application Server ABAP und werden \\u00FCber einen OData Service an das Frontend gesendet.\r\nmainProfExpVwList1=Entwicklung des SAPUI5 Frontends\r\nmainProfExpVwList2=Entwicklung eines Custom Dashboards Control\r\nmainProfExpVwList3=Aufbau der lokalen Entwicklungsumgebung mit Jetbrains Webstorm, Grunt und nodeJs\r\nmainProfExpVwList4=Arbeiten mit Git als Versionskontrollsystem\r\n\r\n","domae/privat/SteckBriefUI/i18n/i18n.properties":"#Application\r\ntitle=CV\r\nappTitle=SteckBriefUI\r\nappDescription=Short work summary\r\n\r\n##Personal Information\r\nname=Dominik Espitalier\r\njobTitle=SAP Fiori Full Stack Developer\r\n\r\n#Left Bar\r\n\r\n##Contact\r\nlbContactTitle=Contact\r\nmobile=0151 678 34524\r\nmail=Dominik.Espitalier@gmx.de\r\nstreet=Kreuzstra\\u00DFe 15\r\nzip=76698\r\ntown=Ubstadt-Weiher\r\n\r\n##Education\r\nlbEducationTitle=Education\r\nlbBachelorName=Bachelor of Science\r\nlbBachelorTitle=Business Information Systems - International\r\nlbBachelorTown=University of Applied Sciences - Frankfurt am Main\r\nlbBachelorPeriod=2008 - 2014\r\n\r\n##Technical Diploma\r\nlbDiplomaName=Technical Diploma\r\nlbDiplomaTitle=Focus: Information Technology\r\nlbDiplomaTown=Hochtaunusschule - Oberursel\r\nlbDiplomaPeriod=2006 - 2007\r\n\r\n##Apprenticeship\r\nlbApprenticeName=Apprenticeship\r\nlbApprenticeTitle=Technischer Assistent f\\u00FCr Informationsverarbeitung\r\nlbApprenticeTown=Hochtaunusschule - Oberursel\r\nlbApprenticePeriod=2004 - 2006\r\n\r\n##Trainings\r\nlbTrainingsTitle=SAP Trainings\r\nlbTrainingsBc400Name=BC 400\r\nlbTrainingsBc400Url=https://training.sap.com/course/bc400-abap-workbench-grundlagen-classroom-016-de-de/\r\nlbTrainingsGw100Name=GW 100\r\nlbTrainingsGw100Url=https://training.sap.com/course/gw100-sap-gateway---erstellen-von-odata-services-remoteclassroom-016-de-de/?\r\nlbTrainingsHa300Name=HA 300\r\nlbTrainingsHa300Url=https://training.sap.com/course/ha300e-sap-hana-modeling-e-learning-012-de-en/\r\n\r\n##Interests\r\nlbInterestsTitle=Interests\r\nlbInterestsTriathlon=Triathlon\r\nlbInterestsSnowHike=Snowboarding / Hiking\r\nlbInterestsTraveling=Traveling\r\nlbInterestsProgramming=Programming\r\n\r\n#Main Body\r\nmainProfileTitle=Profile\r\nmainProfileText=Solution-oriented SAP technology consultant with 4 years of experience in SAPUI5 and  OData development. My main interests are high-performance, maintainable and simply intuitive SAP Fiori applications. Highly accomplished in familiarization with new technologies and the implementation of customer requirements. Enthusiastic team-player, who is constantly motivated about facing new challenges as well as sharing his knowledge.\r\nmainProfExpTitle=Professional Experience - SAP Deutschland - January 2015 till Now\r\nmainProfExpCoreActivities=Core activities\r\n\r\n##Fellowship\r\nmainProfExpFellowTitle=SAP Cloud Platform Development\r\nmainProfExpFellowPlace=SAP SE, Walldorf / Germany - 6 Month\r\nmainProfExpFellowDesc=Development and administration of a Mendix application for the production of training material\r\nmainProfExpFellowList1=Development of the Mendix Application using the Mendix Desktop Modeler\r\nmainProfExpFellowList2=Development of a Multi-Target application consisting of a SAPUI5 Frontend, a XSOData Service and a Hana Database Module\r\nmainProfExpFellowList3=Setup and Administration of Development Landscape on SAP Cloud Platform (Cloud Foundry)\r\nmainProfExpFellowList4=Setup of a Continuous Integration and Continuous Delivery Pipeline with Jenkins\r\nmainProfExpFellowList5=Setup of SAP Cloud Connector in order to build an End-to-End connection from SAP Cloud Platform to S4Hana Backend using Principle Propagation\r\n\r\n##MBVD\r\nmainProfExpMbvdTitle=SAP Fiori Application Development\r\nmainProfExpMbvdPlace=Car Manufacturer, Germany - 12 Month\r\nmainProfExpMbvdDesc=Development of two SAP Fiori applications for the analysis and processing of quotations and orders in the context of car sales. The data comes from a SAP Business Warehouse on HANA and is send to the frontend via an OData Service\r\nmainProfExpMbvdList1=Development of the SAP Fiori Applications (SAPUI5)\r\nmainProfExpMbvdList2=Development of OData Services using Abap CDS views\r\nmainProfExpMbvdList3=Developing / Deploying of apps with SAP WebIDE on SAP Cloud Platform\r\nmainProfExpMbvdList4=Setup of local development environment with Jetbrains Webstorm, Grunt and nodeJs\r\nmainProfExpMbvdList5=Working with Git as Version Control System\r\n\r\n##TC\r\nmainProfExpTcTitle=SAP Fiori Application Development\r\nmainProfExpTcPlace=Airline, Germany - 12 Month\r\nmainProfExpTcDesc=Development and extension of several SAP Fiori Applications for the analysis of flight data. The data comes from an SAP Application Server ABAP and is send to the frontend via an OData Service.\r\nmainProfExpTcList1=Development and Extension of the SAP Fiori Applications (SAPUI5)\r\nmainProfExpTcList2=Development of OData Services using Abap CDS views\r\nmainProfExpTcList3=Developing / Deploying of apps with SAP WebIDE on SAP Cloud Platform\r\nmainProfExpTcList4=Setup of local development environment with Jetbrains Webstorm, Grunt and nodeJs\r\nmainProfExpTcList5=Working with Git as Version Control System\r\n\r\n#FR\r\nmainProfExpFrTitle=SAPUI5 Frontend Application Development\r\nmainProfExpFrPlace=Confectioner, Germany - 12 Month\r\nmainProfExpFrDesc=Development of a mobile application for the presentation of products and their marketing in supermarkets. The images shown originate from a SAP Netweaver Java backend and are transferred to the frontend via a REST Service.\r\nmainProfExpFrList1=Development of the SAPUI5 Frontend\r\nmainProfExpFrList2=Administration of the SAP Netweaver Java\r\nmainProfExpFrList3=Setup of local development environment with Jetbrains Webstorm, Grunt and nodeJs\r\nmainProfExpFrList4=Working with Git as Version Control System\r\n\r\n#VW\r\nmainProfExpVwTitle=SAPUI5 Frontend Application Development\r\nmainProfExpVwPlace=Car Manufacturer, Germany - 12 Month\r\nmainProfExpVwDesc=Development of a dashboard application to visualize supply bottlenecks between warehouse and production line. The data comes from an SAP Application Server ABAP and is send to the frontend via an OData Service.\r\nmainProfExpVwList1=Development of the SAPUI5 Frontend\r\nmainProfExpVwList2=Development of a Custom Dashboard Control\r\nmainProfExpVwList3=Setup of local development environment with Jetbrains Webstorm, Grunt and nodeJs\r\nmainProfExpVwList4=Working with Git as Version Control System\r\n","domae/privat/SteckBriefUI/manifest.json":'{"_version":"1.8.0","sap.app":{"id":"domae.privat.SteckBriefUI","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"1.0.0"},"title":"{{appTitle}}","description":"{{appDescription}}","sourceTemplate":{"id":"html5moduletemplates.basicSAPUI5ApplicationProjectModule","version":"1.40.12"},"dataSources":{"profExpList":{"uri":"model/profExpList.json","type":"JSON"}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true},"supportedThemes":["sap_hcb","sap_belize"]},"sap.ui5":{"rootView":{"viewName":"domae.privat.SteckBriefUI.view.Root","type":"XML"},"dependencies":{"minUI5Version":"1.38.34","libs":{"sap.ui.core":{},"sap.m":{},"sap.ui.layout":{},"sap.ushell":{},"sap.collaboration":{},"sap.ui.comp":{},"sap.uxap":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"domae.privat.SteckBriefUI.i18n.i18n"}},"profExpList":{"type":"sap.ui.model.json.JSONModel","dataSource":"profExpList"}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"domae.privat.SteckBriefUI.view","controlAggregation":"pages","controlId":"idAppControl","clearControlAggregation":false},"routes":[{"name":"RouteRoot","pattern":"RouteRoot","target":["TargetRoot"]}],"targets":{"TargetRoot":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewName":"Root"}}}}}'},"domae/privat/SteckBriefUI/Component-preload");