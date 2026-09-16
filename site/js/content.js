// Single source of truth for all page copy, in German and English.
// This shape mirrors what the future CAP export (projects.json) will provide,
// so swapping this file for a generated one later is a drop-in change.
window.SITE_CONTENT = {
  de: {
    nav: { skills: "Skills", projects: "Projekte", profile: "Profil", contact: "Kontakt", cv: "CV herunterladen" },
    hero: {
      badge: "Verfügbar für neue Projekte",
      name: "Dominik Espitalier",
      title: "SAP Full-Stack Entwickler & Solution Architect",
      intro: "Ich konzipiere und entwickle End-to-End — vom Frontend über den Service bis ins Backend. Als Full-Stack-Entwickler bewege ich mich dabei genauso sicher auf der SAP Business Technology Platform wie On-Premise auf S/4HANA-Systemen und in hybriden Szenarien zwischen beiden Welten. Aktuell verantworte ich als Lead Developer und Architekt die technische Umsetzung eines Projekts und leite dabei das Entwicklerteam.",
      ctaPdf: "CV als PDF herunterladen",
      ctaDocx: "Als Word herunterladen",
      location: "Friedrichsdorf, Deutschland"
    },
    skills: {
      eyebrow: "Kompetenzen",
      title: "Skills & Kenntnisse",
      coreTitle: "Kernkompetenzen",
      coreColumns: [
        { label: "Frontend", items: [
          { name: "SAP Fiori Freestyle (SAPUI5)", since: "seit 2015" },
          { name: "SAP Fiori Elements", since: "seit 2018" },
          { name: "HTML5, CSS3 & JavaScript", since: "seit 2012" }
        ]},
        { label: "Service", items: [
          { name: "SAP CAP", since: "seit 2021" },
          { name: "SAP RAP", since: "seit 2021" },
          { name: "Legacy (SEGW, BOPF)", since: "seit 2016" }
        ]},
        { label: "Backend", items: [
          { name: "ABAP / ABAP OO", since: "seit 2015" },
          { name: "Node.js", since: "seit 2018" },
          { name: "SQL", since: "" }
        ]}
      ],
      moreTitle: "Weitere Kenntnisse",
      groups: [
        { label: "Plattformen", items: ["SAP BTP (Cloud Foundry)", "S/4HANA On-Premise", "SAP HANA XSA", "SAP Business Suite", "SAP Analytics Cloud"] },
        { label: "Architektur & Führung", items: ["Solution Architect", "Lead Developer"] },
        { label: "Tools & Technologien", items: ["SAP Fiori Tools", "CF CLI", "SAP Business Application Studio", "Eclipse — ADT", "VS Code", "Git", "abapGit", "Docker"] },
        { label: "Sprachen", items: ["Deutsch — Muttersprache", "Französisch — Muttersprache", "Englisch — verhandlungssicher"] }
      ]
    },
    timeline: {
      eyebrow: "Werdegang",
      title: "Projekt-Erfahrung",
      subtitle: "Chronologischer Überblick meiner Projekte der letzten Jahre — weitere Stationen und Details auf Anfrage.",
      earlierLabel: "Frühere Stationen (2015 – 2019) anzeigen",
      earlierLabelHide: "Frühere Stationen ausblenden",
      items: [
        {
          period: "2025 — Heute", current: true,
          title: "Freiberuflicher SAP-Berater",
          client: "Kunde: Beratungsunternehmen, Rosenheim",
          summary: "Entwicklung einer SAPUI5-App zur Datenanonymisierung im Rahmen einer Datenmigration, inklusive CAP-basiertem OData-Service auf der SAP BTP.",
          bullets: [
            "SAPUI5-App zur Anonymisierung von Datenbanktabellen für die Datenmigration",
            "Fiori Elements & Fiori Freestyle Entwicklung",
            "OData-Service mit CAP OData V4 auf der SAP BTP (PostgreSQL, HANA Cloud)",
            "Hybrides Szenario: Integration zu S/4HANA On-Premise über den Cloud Connector",
            "Code-Reviews im Entwicklerteam"
          ],
          tags: ["CAP", "OData V4", "PostgreSQL", "HANA Cloud", "Code Reviews"]
        },
        {
          period: "2025",
          title: "Freiberuflicher SAP-Berater",
          client: "Kunde: Beratungsunternehmen, Rosenheim",
          summary: "Konzeption und Entwicklung einer SAPUI5 Fiori-Freestyle-Applikation zur Modellierung von Test- und Migrationsobjekten als Grundlage für mehrere nachgelagerte Anwendungen.",
          bullets: [
            "Interne Produktlösung zur standardisierten Pflege komplexer Migrationsstrukturen",
            "RAP-basierter OData-Service auf S/4HANA On-Premise mit Deep-Create-Szenarien",
            "Sauberes Business-Object-Modell (Root / Child / Association / Composition) nach RAP Best Practices",
            "Enge fachliche Abstimmung mit dem Produktverantwortlichen des Kunden"
          ],
          tags: ["RAP", "Fiori Freestyle", "S/4HANA"]
        },
        {
          period: "2022 — Heute", current: true,
          title: "Freiberuflicher SAP-Berater",
          client: "Kunde: Beratungsunternehmen, Deutschland",
          summary: "Technische Prozesse im Rahmen eines Mitgliederportals umgesetzt, inklusive laufendem Betrieb und Support der produktiven Anwendung.",
          bullets: [
            "Implementierung diverser technischer Prozesse im Rahmen eines Mitgliederportals",
            "SAP Fiori Freestyle & Fiori Elements Entwicklung",
            "OData-Services mittels SEGW auf Basis von ABAP-CDS-Views und ABAP",
            "Betrieb und Support der produktiven Anwendung: neue Features sowie Bearbeitung von Support-Tickets"
          ],
          tags: ["Fiori Elements", "Fiori Freestyle", "SEGW", "Support"]
        },
        {
          period: "2023 — 2025",
          title: "Freiberuflicher SAP-Berater",
          client: "Kunde: Beratungsunternehmen, Deutschland — Großbank",
          summary: "Umsetzung von Employee- und Manager-Self-Services im Rahmen einer S/4HANA-Transformation bei einer großen deutschen Bank.",
          bullets: [
            "ESS- und MSS-Prozesse im Rahmen der S/4-Transformation implementiert",
            "Fiori Freestyle & Fiori Elements Entwicklung",
            "OData-Services via SEGW auf Basis von ABAP-CDS-Views",
            "OData-Services mit SAP RAP (Restful ABAP Programming Model)"
          ],
          tags: ["Fiori Elements", "RAP", "SEGW", "ABAP CDS"]
        },
        {
          period: "2021 — 2022",
          title: "Freiberuflicher SAP-Berater",
          client: "Kunde: Softwarehersteller, Rosenheim",
          summary: "SAP-Softwareentwicklung in mehreren Bereichen, von Stammdatenpflege bis Reporting-Dashboards.",
          bullets: [
            "Portal zur Pflege von Stammdaten im Rahmen von SAP FSDM (SAP CAP)",
            "Fachliches Protokoll im Rahmen eines ETL-Prozesses (SAP RAP)",
            "Dashboards für das Reporting eines Versicherungsunternehmens (SAP SAC)",
            "Backend-Prozesse mit Node.js"
          ],
          tags: ["CAP", "RAP", "SAP SAC", "Node.js"]
        },
        {
          period: "2019 — 2021",
          title: "SAP Service Experte / SAP Softwarearchitekt",
          client: "SWM Services GmbH — Stadtwerke München",
          summary: "Fachliche und technische Verantwortung für den Bereich SAP-Fiori-Entwicklung bei den Stadtwerken München.",
          bullets: [
            "Verantwortung für den gesamten Bereich SAP-Fiori-Entwicklung",
            "Konzeption einer modularen SAPUI5-Anwendungsarchitektur",
            "Entwicklungsrichtlinien für SAPUI5-Apps erstellt",
            "Steuerung externer Dienstleister & Coaching von Entwicklern"
          ],
          tags: ["SAPUI5", "OData", "Coaching", "Architektur"]
        }
      ],
      earlierItems: [
        { period: "2018 — 2019", title: "SAP Cloud Platform Entwicklung", client: "SAP Deutschland SE & Co. KG — Kunde: SAP SE, Walldorf", summary: "Mendix-Anwendung und Multi-Target-Applikation (SAPUI5, XSOData, HANA) auf der SAP Cloud Platform; CI/CD-Pipeline mit Jenkins; Migration von XS Classic zu XS Advanced." },
        { period: "2017 — 2018", title: "SAP Fiori Anwendungsentwicklung", client: "SAP Deutschland SE & Co. KG — Kunde: Automobilhersteller", summary: "Entwicklung zweier SAP-Fiori-Anwendungen zur Analyse und Bearbeitung von Angeboten und Aufträgen im Automobilvertrieb." },
        { period: "2016 — 2017", title: "SAP Fiori Anwendungsentwicklung", client: "SAP Deutschland SE & Co. KG — Kunde: Fluggesellschaft", summary: "Entwicklung und Erweiterung mehrerer SAP-Fiori-Anwendungen zur Analyse von Flugdaten." },
        { period: "2015 — 2017", title: "SAPUI5 Frontend Anwendungsentwicklung", client: "SAP Deutschland SE & Co. KG — Kunde: Süßwarenhersteller", summary: "Mobile Anwendung zur Produktpräsentation in Supermärkten, angebunden an ein SAP Netweaver Java Backend." },
        { period: "2015 — 2017", title: "SAPUI5 Frontend Anwendungsentwicklung", client: "SAP Deutschland SE & Co. KG — Kunde: Automobilhersteller", summary: "Dashboard-Applikation zur Visualisierung von Lieferengpässen zwischen Lager und Produktionslinie." }
      ]
    },
    info: {
      educationTitle: "Ausbildung",
      educationName: "Business Information Systems (international)",
      educationDegree: "Abschluss: Bachelor",
      certTitle: "Zertifizierungen",
      certifications: [
        { name: "iSAQB — CPSA Foundation Level", url: "https://software-architecture-camp.de/isaqb-foundation-level/" },
        { name: "SAP BC400 — ABAP Workbench Grundlagen", url: "https://training.sap.com/course/bc400-abap-workbench-grundlagen-classroom-016-de-de/" },
        { name: "SAP GW100 — OData Services", url: "https://training.sap.com/course/gw100-sap-gateway---erstellen-von-odata-services-remoteclassroom-016-de-de/" },
        { name: "SAP HA300e — HANA Modeling", url: "https://training.sap.com/course/ha300e-sap-hana-modeling-e-learning-012-de-en/" },
        { name: "SAP AC230 — BRIM Overview", url: "https://training.sap.com/course/ac230-sap-billing-and-revenue-innovation-management-brim-overview-remoteclassroom-016-de-en/" }
      ],
      interestsTitle: "Interessen",
      interests: ["Triathlon", "Berg- & Schneewandern", "Reisen", "Programmieren (privat)"]
    },
    contact: {
      addressLine: "Hardtwaldallee 4, 61381 Friedrichsdorf",
      site: "www.espitalier-solutions.de",
      copyright: "© 2026 Dominik Espitalier — espitalier solutions"
    }
  },

  en: {
    nav: { skills: "Skills", projects: "Projects", profile: "Profile", contact: "Contact", cv: "Download CV" },
    hero: {
      badge: "Available for new projects",
      name: "Dominik Espitalier",
      title: "SAP Full-Stack Developer & Solution Architect",
      intro: "I design and build end-to-end — from the frontend through the service layer to the backend. As a full-stack developer, I'm equally at home on the SAP Business Technology Platform and on-premise on S/4HANA systems, as well as in hybrid scenarios spanning both worlds. I'm currently leading the technical delivery of a project as Lead Developer and Architect, guiding the development team.",
      ctaPdf: "Download CV as PDF",
      ctaDocx: "Download as Word",
      location: "Friedrichsdorf, Germany"
    },
    skills: {
      eyebrow: "Expertise",
      title: "Skills & Knowledge",
      coreTitle: "Core Competencies",
      coreColumns: [
        { label: "Frontend", items: [
          { name: "SAP Fiori Freestyle (SAPUI5)", since: "since 2015" },
          { name: "SAP Fiori Elements", since: "since 2018" },
          { name: "HTML5, CSS3 & JavaScript", since: "since 2012" }
        ]},
        { label: "Service", items: [
          { name: "SAP CAP", since: "since 2021" },
          { name: "SAP RAP", since: "since 2021" },
          { name: "Legacy (SEGW, BOPF)", since: "since 2016" }
        ]},
        { label: "Backend", items: [
          { name: "ABAP / ABAP OO", since: "since 2015" },
          { name: "Node.js", since: "since 2018" },
          { name: "SQL", since: "" }
        ]}
      ],
      moreTitle: "Further Knowledge",
      groups: [
        { label: "Platforms", items: ["SAP BTP (Cloud Foundry)", "S/4HANA on-premise", "SAP HANA XSA", "SAP Business Suite", "SAP Analytics Cloud"] },
        { label: "Architecture & Leadership", items: ["Solution Architect", "Lead Developer"] },
        { label: "Tools & Technologies", items: ["SAP Fiori Tools", "CF CLI", "SAP Business Application Studio", "Eclipse — ADT", "VS Code", "Git", "abapGit", "Docker"] },
        { label: "Spoken Languages", items: ["German — native", "French — native", "English — fluent"] }
      ]
    },
    timeline: {
      eyebrow: "Career",
      title: "Project Experience",
      subtitle: "A chronological overview of recent projects — further engagements and details on request.",
      earlierLabel: "Show earlier engagements (2015 – 2019)",
      earlierLabelHide: "Hide earlier engagements",
      items: [
        {
          period: "2025 — Present", current: true,
          title: "Freelance SAP Consultant",
          client: "Client: Consulting firm, Rosenheim",
          summary: "Built a SAPUI5 app for data anonymisation as part of a data migration, including a CAP-based OData service on SAP BTP.",
          bullets: [
            "SAPUI5 app to anonymise database tables for a data migration",
            "Fiori Elements & Fiori Freestyle development",
            "OData service with CAP OData V4 on SAP BTP (PostgreSQL, HANA Cloud)",
            "Hybrid scenario: integration with S/4HANA on-premise via the Cloud Connector",
            "Code reviews within the development team"
          ],
          tags: ["CAP", "OData V4", "PostgreSQL", "HANA Cloud", "Code Reviews"]
        },
        {
          period: "2025",
          title: "Freelance SAP Consultant",
          client: "Client: Consulting firm, Rosenheim",
          summary: "Designed and built a SAPUI5 Fiori Freestyle application to model test and migration objects, forming the basis for several downstream applications.",
          bullets: [
            "Internal product solution for standardised maintenance of complex migration structures",
            "RAP-based OData service on S/4HANA on-premise using deep-create scenarios",
            "Clean business object model (root / child / association / composition) per RAP best practices",
            "Close functional alignment with the client's product owner"
          ],
          tags: ["RAP", "Fiori Freestyle", "S/4HANA"]
        },
        {
          period: "2022 — Present", current: true,
          title: "Freelance SAP Consultant",
          client: "Client: Consulting firm, Germany",
          summary: "Implemented various technical processes as part of a member portal, including ongoing operations and support for the production application.",
          bullets: [
            "Implemented various technical processes for a member portal",
            "SAP Fiori Freestyle & Fiori Elements development",
            "OData services via SEGW based on ABAP CDS views and ABAP",
            "Operations and support for the production application: new features as well as support ticket resolution"
          ],
          tags: ["Fiori Elements", "Fiori Freestyle", "SEGW", "Support"]
        },
        {
          period: "2023 — 2025",
          title: "Freelance SAP Consultant",
          client: "Client: Consulting firm, Germany — major bank",
          summary: "Delivered employee and manager self-services as part of an S/4HANA transformation at a large German bank.",
          bullets: [
            "Implemented ESS/MSS processes for the S/4 transformation",
            "Fiori Freestyle & Fiori Elements development",
            "OData services via SEGW based on ABAP CDS views",
            "OData services with SAP RAP (Restful ABAP Programming Model)"
          ],
          tags: ["Fiori Elements", "RAP", "SEGW", "ABAP CDS"]
        },
        {
          period: "2021 — 2022",
          title: "Freelance SAP Consultant",
          client: "Client: Software vendor, Rosenheim",
          summary: "SAP software development across several areas, from master data maintenance to reporting dashboards.",
          bullets: [
            "Portal for master data maintenance within SAP FSDM (SAP CAP)",
            "Business protocol as part of an ETL process (SAP RAP)",
            "Dashboards for insurance company reporting (SAP SAC)",
            "Backend processes with Node.js"
          ],
          tags: ["CAP", "RAP", "SAP SAC", "Node.js"]
        },
        {
          period: "2019 — 2021",
          title: "SAP Service Expert / SAP Software Architect",
          client: "SWM Services GmbH — Stadtwerke München",
          summary: "Functional and technical responsibility for the SAP Fiori development area at Stadtwerke München.",
          bullets: [
            "Responsible for the entire SAP Fiori development area",
            "Designed a modular SAPUI5 application architecture",
            "Authored development guidelines for SAPUI5 apps",
            "Managed external service providers & coached developers"
          ],
          tags: ["SAPUI5", "OData", "Coaching", "Architecture"]
        }
      ],
      earlierItems: [
        { period: "2018 — 2019", title: "SAP Cloud Platform Development", client: "SAP Deutschland SE & Co. KG — Client: SAP SE, Walldorf", summary: "Mendix application and multi-target application (SAPUI5, XSOData, HANA) on SAP Cloud Platform; CI/CD pipeline with Jenkins; migration from XS Classic to XS Advanced." },
        { period: "2017 — 2018", title: "SAP Fiori Application Development", client: "SAP Deutschland SE & Co. KG — Client: Automotive manufacturer", summary: "Built two SAP Fiori applications for analysing and processing quotes and orders in automotive sales." },
        { period: "2016 — 2017", title: "SAP Fiori Application Development", client: "SAP Deutschland SE & Co. KG — Client: Airline", summary: "Developed and extended several SAP Fiori applications for flight data analysis." },
        { period: "2015 — 2017", title: "SAPUI5 Frontend Development", client: "SAP Deutschland SE & Co. KG — Client: Confectionery manufacturer", summary: "Mobile application for product presentation in supermarkets, connected to a SAP Netweaver Java backend." },
        { period: "2015 — 2017", title: "SAPUI5 Frontend Development", client: "SAP Deutschland SE & Co. KG — Client: Automotive manufacturer", summary: "Dashboard application visualising supply bottlenecks between warehouse and production line." }
      ]
    },
    info: {
      educationTitle: "Education",
      educationName: "Business Information Systems (international)",
      educationDegree: "Degree: Bachelor",
      certTitle: "Certifications",
      certifications: [
        { name: "iSAQB — CPSA Foundation Level", url: "https://software-architecture-camp.de/isaqb-foundation-level/" },
        { name: "SAP BC400 — ABAP Workbench Fundamentals", url: "https://training.sap.com/course/bc400-abap-workbench-grundlagen-classroom-016-de-de/" },
        { name: "SAP GW100 — Building OData Services", url: "https://training.sap.com/course/gw100-sap-gateway---erstellen-von-odata-services-remoteclassroom-016-de-de/" },
        { name: "SAP HA300e — HANA Modeling", url: "https://training.sap.com/course/ha300e-sap-hana-modeling-e-learning-012-de-en/" },
        { name: "SAP AC230 — BRIM Overview", url: "https://training.sap.com/course/ac230-sap-billing-and-revenue-innovation-management-brim-overview-remoteclassroom-016-de-en/" }
      ],
      interestsTitle: "Interests",
      interests: ["Triathlon", "Mountain & snow hiking", "Traveling", "Programming (personal projects)"]
    },
    contact: {
      addressLine: "Hardtwaldallee 4, 61381 Friedrichsdorf, Germany",
      site: "www.espitalier-solutions.de",
      copyright: "© 2026 Dominik Espitalier — espitalier solutions"
    }
  }
};
