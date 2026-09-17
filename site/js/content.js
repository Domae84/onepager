// Single source of truth for all page copy, in German and English.
// This shape mirrors what the future CAP export (projects.json) will provide,
// so swapping this file for a generated one later is a drop-in change.
// Loaded both as a browser <script> (window.SITE_CONTENT) and as a Node
// module (by the CV generator script) — keep this dual export working.
var SITE_CONTENT = {
  de: {
    meta: {
      title: "Dominik Espitalier — SAP Full-Stack Entwickler & Solution Architect | espitalier solutions",
      description: "Dominik Espitalier, freiberuflicher SAP Full-Stack Entwickler & Solution Architect: End-to-End-Entwicklung in Frontend, Service und Backend, in der SAP BTP Cloud und On-Premise auf S/4HANA. Lebenslauf als PDF/Word verfügbar.",
      ogDescription: "End-to-End-Entwicklung in Frontend, Service und Backend — in der SAP BTP Cloud und On-Premise auf S/4HANA."
    },
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
          { name: "OData Services (SEGW)", since: "seit 2016" }
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
        { label: "Tools & Technologien", items: ["SAP Fiori Tools", "CF CLI", "SAP Business Application Studio", "Eclipse — ADT", "VS Code", "Git", "abapGit", "Docker", "BOPF", "ABAP CDS Views", "HANA CDS Views", "Core Data Services (CDS)", "Unit-Tests (QUnit)", "Integration-Tests (OPA5)"] },
        { label: "Sprachen", items: ["Deutsch — Muttersprache", "Französisch — Muttersprache", "Englisch — verhandlungssicher"] }
      ]
    },
    timeline: {
      eyebrow: "Werdegang",
      title: "Projekt-Erfahrung",
      subtitle: "Chronologischer Überblick meiner Projekte der letzten Jahre — weitere Stationen und Details auf Anfrage.",
      earlierHeading: "Frühere Stationen",
      earlierLabel: "Frühere Stationen (2015 – 2019) anzeigen",
      earlierLabelHide: "Frühere Stationen ausblenden",
      items: [
        {
          period: "2026",
          title: "Freiberuflicher SAP-Berater",
          client: "Kunde: Beratungsunternehmen, Rosenheim — SAP Fiori/UI5 Developer im Bankensektor",
          summary: "Erweiterung einer bestehenden SAP-Fiori-Anwendung für das Management von Validierungsmethoden, -gruppen und -regeln im Bankenumfeld, inklusive Excel-basierter Import-/Export-Funktion für hierarchische Regelzuordnungen.",
          bullets: [
            "Integration und Erweiterung des OData-Service CONS_VECRULE_SRV",
            "Excel-Import/-Export für Validierungsmethoden, -gruppen und -regeln, inklusive Transformation der flachen Importdaten in die Method-Group-Rule-Struktur des Backends",
            "Transformation und Neuaufbau hierarchischer Datenstrukturen im Backend",
            "Datenvalidierungen und Konsistenzprüfungen implementiert"
          ],
          tags: ["SAP Fiori", "SAPUI5", "OData", "Banking"]
        },
        {
          period: "2025 — Heute", current: true,
          title: "Freiberuflicher SAP-Berater",
          client: "Kunde: Beratungsunternehmen, Rosenheim — als Lead Developer & Solution Architect",
          summary: "Konzeption und Umsetzung einer neuen, hybriden Lösung zur Datenanonymisierung als Ablösung einer Altanwendung — bestehend aus einer Fiori-App-Suite für Customizing und Steuerung auf der SAP BTP sowie der Anonymisierungslogik auf dem On-Premise-S/4HANA-System.",
          bullets: [
            "Konzeption der Gesamtarchitektur als vollständige Ablösung einer bestehenden Altlösung",
            "Suite aus vier Fiori-Anwendungen für Customizing und Steuerung, eingebunden ins SAP Build Workzone",
            "SAP CAP OData V4 als zentrale Service-Schicht auf der SAP BTP (PostgreSQL, HANA Cloud)",
            "Anbindung an die On-Premise-Anonymisierungslogik (ABAP-OData-Service auf S/4HANA) über den SAP Cloud Connector",
            "Code-Reviews im Entwicklerteam"
          ],
          tags: ["SAP CAP", "SAP Fiori Launchpad", "SAP Build Workzone", "ABAP OData", "S/4HANA", "Cloud Connector"]
        },
        {
          period: "2025",
          title: "Freiberuflicher SAP-Berater",
          client: "Kunde: Beratungsunternehmen, Rosenheim — SAP Full-Stack Entwickler (On-Premise)",
          summary: "Konzeption und Entwicklung einer SAPUI5 Fiori-Freestyle-Applikation zur Modellierung von Test- und Migrationsobjekten als Grundlage für mehrere nachgelagerte Anwendungen.",
          bullets: [
            "Interne Produktlösung zur standardisierten Pflege komplexer Migrationsstrukturen",
            "Auf SAP RAP basierender OData-Service auf S/4HANA On-Premise mit Deep-Create-Szenarien",
            "Sauberes Business-Object-Modell (Root / Child / Association / Composition) gemäß SAP-RAP-Best-Practices",
            "Enge fachliche Abstimmung mit dem Produktverantwortlichen des Kunden"
          ],
          tags: ["SAP RAP", "SAP Fiori Freestyle", "S/4HANA"]
        },
        {
          period: "2023 — 2025",
          title: "Freiberuflicher SAP-Berater",
          client: "Kunde: Beratungsunternehmen, Deutschland — Großbank — SAP Full-Stack Entwickler (On-Premise)",
          summary: "Umsetzung von Employee- und Manager-Self-Services im Rahmen einer S/4HANA-Transformation bei einer großen deutschen Bank.",
          bullets: [
            "ESS- und MSS-Prozesse im Rahmen der S/4-Transformation implementiert",
            "SAP Fiori Freestyle & SAP Fiori Elements Entwicklung",
            "OData-Services via SEGW auf Basis von ABAP-CDS-Views",
            "OData-Services mit SAP RAP (Restful ABAP Programming Model)"
          ],
          tags: ["SAP Fiori Elements", "SAP RAP", "SEGW", "ABAP CDS"]
        },
        {
          period: "2022 — Heute", current: true,
          title: "Freiberuflicher SAP-Berater",
          client: "Kunde: Beratungsunternehmen, Rosenheim — SAP BTP & Fiori Launchpad Administrator",
          summary: "Aufbau und Administration der SAP-BTP-Landschaft des Kunden von Grund auf — Subaccount- und Trust-Konfiguration, SAP Build Workzone sowie Aktivierung und Rollenkonfiguration des On-Premise SAP Fiori Launchpad.",
          bullets: [
            "SAP BTP als Pionier beim Kunden eingeführt: Subaccount-Setup, Cloud-Foundry-Umgebung und Trust-Konfiguration mit Custom Identity Provider (SAP IAS)",
            "Aufbau von SAP Build Workzone: Sites, Rollen, Kataloge und Gruppen im Content Manager konfiguriert",
            "Aktivierung und Konfiguration des On-Premise SAP Fiori Launchpad: Business-Catalogs, Gruppen und PFCG-Rollenzuordnung",
            "Aktivierung von OData-Services und ICF-Knoten im SAP-Backend",
            "Aufbau und Integration des SAP Cloud Connectors",
            "Diverse Proofs of Concept (POCs) auf der SAP BTP deployed und konfiguriert",
            "Guides zur Implementierung und zum Deployment von Multi-Target Applications (MTA) verfasst, Kollegen eingearbeitet"
          ],
          tags: ["SAP BTP", "Cloud Foundry", "SAP Build Workzone", "SAP Fiori Launchpad", "SAP Cloud Connector", "PFCG"]
        },
        {
          period: "2022 — Heute", current: true,
          title: "Freiberuflicher SAP-Berater",
          client: "Kunde: Axians — Solution Architect & SAP Full-Stack Entwickler (Cloud & On-Premise)",
          summary: "Laufende Weiterentwicklung eines Mitgliederportals sowie Konzeption und Aufbau eines SAP-CAP-basierten Ausfallservers, der Teile der ABAP-Backend-Logik während Wartungsfenstern übernimmt.",
          bullets: [
            "Implementierung diverser technischer Prozesse im Rahmen eines Mitgliederportals",
            "Konzeption und Aufbau eines SAP-CAP-basierten Ausfallservers zur Absicherung von Wartungsfenstern des SAP-ABAP-Backends, betrieben als Docker-Container",
            "Nachbildung zentraler ABAP-Business-Logik als SAP-CAP-Services auf dem Ausfallserver",
            "Neuer SAP-RAP-Service zur Replikation von Nutzerdaten zwischen Frontend-Server und Ausfallserver",
            "Betrieb und Support der produktiven Anwendung: neue Features sowie Bearbeitung von Support-Tickets"
          ],
          tags: ["SAP CAP", "Docker", "SAP RAP", "Support", "SEGW"]
        },
        {
          period: "2021 — 2022",
          title: "Freiberuflicher SAP-Berater",
          client: "Kunde: Paricon AG — SAP Full-Stack Entwickler (SAP HANA XSA)",
          summary: "SAP-Softwareentwicklung in mehreren Bereichen, von Stammdatenpflege bis Reporting-Dashboards.",
          bullets: [
            "Portal zur Pflege von Stammdaten im Rahmen von SAP FSDM (SAP CAP)",
            "Fachliches Protokoll im Rahmen eines ETL-Prozesses (SAP RAP)",
            "Dashboards für das Reporting eines Versicherungsunternehmens (SAP SAC)",
            "Backend-Prozesse mit Node.js"
          ],
          tags: ["SAP CAP", "SAP RAP", "SAP SAC", "Node.js"]
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
          tags: ["SAP Fiori Freestyle", "SAP Fiori Elements", "OData", "Coaching", "Architektur"]
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
      educationDegree: "Abschluss: Bachelor of Science",
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
    meta: {
      title: "Dominik Espitalier — SAP Full-Stack Developer & Solution Architect | espitalier solutions",
      description: "Dominik Espitalier, freelance SAP Full-Stack Developer & Solution Architect: end-to-end development across frontend, service and backend, on SAP BTP cloud and on-premise on S/4HANA. CV available as PDF/Word.",
      ogDescription: "End-to-end development across frontend, service and backend — on SAP BTP cloud and on-premise on S/4HANA."
    },
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
          { name: "OData Services (SEGW)", since: "since 2016" }
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
        { label: "Tools & Technologies", items: ["SAP Fiori Tools", "CF CLI", "SAP Business Application Studio", "Eclipse — ADT", "VS Code", "Git", "abapGit", "Docker", "BOPF", "ABAP CDS Views", "HANA CDS Views", "Core Data Services (CDS)", "Unit testing (QUnit)", "Integration testing (OPA5)"] },
        { label: "Spoken Languages", items: ["German — native", "French — native", "English — fluent"] }
      ]
    },
    timeline: {
      eyebrow: "Career",
      title: "Project Experience",
      subtitle: "A chronological overview of recent projects — further engagements and details on request.",
      earlierHeading: "Earlier Engagements",
      earlierLabel: "Show earlier engagements (2015 – 2019)",
      earlierLabelHide: "Hide earlier engagements",
      items: [
        {
          period: "2026",
          title: "Freelance SAP Consultant",
          client: "Client: Consulting firm, Rosenheim — SAP Fiori/UI5 Developer in the banking sector",
          summary: "Extended an existing SAP Fiori application for managing validation methods, groups and rules in a banking environment, including an Excel-based import/export function for hierarchical rule assignments.",
          bullets: [
            "Integrated and extended the OData service CONS_VECRULE_SRV",
            "Excel import/export for validation methods, groups and rules, including transforming the flat import data into the backend's method-group-rule structure",
            "Transformed and rebuilt hierarchical data structures in the backend",
            "Implemented data validations and consistency checks"
          ],
          tags: ["SAP Fiori", "SAPUI5", "OData", "Banking"]
        },
        {
          period: "2025 — Present", current: true,
          title: "Freelance SAP Consultant",
          client: "Client: Consulting firm, Rosenheim — as Lead Developer & Solution Architect",
          summary: "Designed and built a new, hybrid data anonymisation solution replacing a legacy application — comprising a Fiori app suite for customising and controlling the process on SAP BTP, with the anonymisation logic running on-premise on the S/4HANA system.",
          bullets: [
            "Designed the overall architecture as a full replacement for an existing legacy solution",
            "Suite of four Fiori applications for customising and control, embedded in SAP Build Workzone",
            "SAP CAP OData V4 as the central service layer on SAP BTP (PostgreSQL, HANA Cloud)",
            "Connection to the on-premise anonymisation logic (ABAP OData service on S/4HANA) via the SAP Cloud Connector",
            "Code reviews within the development team"
          ],
          tags: ["SAP CAP", "SAP Fiori Launchpad", "SAP Build Workzone", "ABAP OData", "S/4HANA", "Cloud Connector"]
        },
        {
          period: "2025",
          title: "Freelance SAP Consultant",
          client: "Client: Consulting firm, Rosenheim — SAP Full-Stack Developer (On-Premise)",
          summary: "Designed and built a SAP Fiori Freestyle (SAPUI5) application to model test and migration objects, forming the basis for several downstream applications.",
          bullets: [
            "Internal product solution for standardised maintenance of complex migration structures",
            "SAP RAP-based OData service on S/4HANA on-premise using deep-create scenarios",
            "Clean business object model (root / child / association / composition) per SAP RAP best practices",
            "Close functional alignment with the client's product owner"
          ],
          tags: ["SAP RAP", "SAP Fiori Freestyle", "S/4HANA"]
        },
        {
          period: "2023 — 2025",
          title: "Freelance SAP Consultant",
          client: "Client: Consulting firm, Germany — major bank — SAP Full-Stack Developer (On-Premise)",
          summary: "Delivered employee and manager self-services as part of an S/4HANA transformation at a large German bank.",
          bullets: [
            "Implemented ESS/MSS processes for the S/4 transformation",
            "SAP Fiori Freestyle & SAP Fiori Elements development",
            "OData services via SEGW based on ABAP CDS views",
            "OData services with SAP RAP (Restful ABAP Programming Model)"
          ],
          tags: ["SAP Fiori Elements", "SAP RAP", "SEGW", "ABAP CDS"]
        },
        {
          period: "2022 — Present", current: true,
          title: "Freelance SAP Consultant",
          client: "Client: Consulting firm, Rosenheim — SAP BTP & Fiori Launchpad Administrator",
          summary: "Built and administered the client's SAP BTP landscape from the ground up — subaccount and trust configuration, SAP Build Workzone, as well as activation and role configuration of the on-premise SAP Fiori Launchpad.",
          bullets: [
            "Introduced SAP BTP as a pioneer at the client: subaccount setup, Cloud Foundry environment and trust configuration with a custom Identity Provider (SAP IAS)",
            "Built out SAP Build Workzone: sites, roles, catalogs and groups configured in the Content Manager",
            "Activated and configured the on-premise SAP Fiori Launchpad: business catalogs, groups and PFCG role assignment",
            "Activated OData services and ICF nodes in the SAP backend",
            "Set up and integrated the SAP Cloud Connector",
            "Deployed and configured various proofs of concept (POCs) on SAP BTP",
            "Authored guides for implementing and deploying multi-target applications (MTA), onboarded colleagues"
          ],
          tags: ["SAP BTP", "Cloud Foundry", "SAP Build Workzone", "SAP Fiori Launchpad", "SAP Cloud Connector", "PFCG"]
        },
        {
          period: "2022 — Present", current: true,
          title: "Freelance SAP Consultant",
          client: "Client: Axians — Solution Architect & SAP Full-Stack Developer (Cloud & On-Premise)",
          summary: "Ongoing development of a member portal, plus design and build of a SAP CAP-based failover server that takes over parts of the ABAP backend logic during maintenance windows.",
          bullets: [
            "Implemented various technical processes for a member portal",
            "Designed and built a SAP CAP-based failover server to cover maintenance windows of the SAP ABAP backend, run as a Docker container",
            "Rebuilt core ABAP business logic as SAP CAP services on the failover server",
            "New SAP RAP service to replicate user data between the frontend server and the failover server",
            "Operations and support for the production application: new features as well as support ticket resolution"
          ],
          tags: ["SAP CAP", "Docker", "SAP RAP", "Support", "SEGW"]
        },
        {
          period: "2021 — 2022",
          title: "Freelance SAP Consultant",
          client: "Client: Paricon AG — SAP Full-Stack Developer (SAP HANA XSA)",
          summary: "SAP software development across several areas, from master data maintenance to reporting dashboards.",
          bullets: [
            "Portal for master data maintenance within SAP FSDM (SAP CAP)",
            "Business protocol as part of an ETL process (SAP RAP)",
            "Dashboards for insurance company reporting (SAP SAC)",
            "Backend processes with Node.js"
          ],
          tags: ["SAP CAP", "SAP RAP", "SAP SAC", "Node.js"]
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
          tags: ["SAP Fiori Freestyle", "SAP Fiori Elements", "OData", "Coaching", "Architecture"]
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
      educationDegree: "Degree: Bachelor of Science",
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

if (typeof window !== "undefined") { window.SITE_CONTENT = SITE_CONTENT; }
if (typeof module !== "undefined" && module.exports) { module.exports = SITE_CONTENT; }
