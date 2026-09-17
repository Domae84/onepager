const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  Table, TableRow, TableCell, WidthType, BorderStyle, ExternalHyperlink,
  UnderlineType, Footer, PageNumber
} = require("docx");

const ACCENT = "0D9488";
const ACCENT_DARK = "0F766E";
const NAVY = "16233A";
const MUTED = "4A5568";
const SOFT = "5B6B82";

const FONT = "Calibri";
const noBorder = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const cellBorders = { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder };

function sectionHeading(text) {
  return new Paragraph({
    spacing: { before: 260, after: 120 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "D6D3D1", space: 4 } },
    children: [new TextRun({ text: text.toUpperCase(), bold: true, color: ACCENT, size: 22, font: FONT })]
  });
}

function coreColumnCell(col) {
  const children = [
    new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: col.label, bold: true, color: ACCENT_DARK, size: 19 })] })
  ];
  col.items.forEach((item) => {
    children.push(new Paragraph({
      spacing: { after: 30 },
      children: [
        new TextRun({ text: item.name, size: 18, color: NAVY }),
        item.since ? new TextRun({ text: "  " + item.since, size: 16, color: ACCENT_DARK }) : new TextRun({ text: "" })
      ]
    }));
  });
  return new TableCell({
    borders: cellBorders,
    shading: { fill: "F0F9F8" },
    margins: { top: 120, bottom: 120, left: 140, right: 140 },
    children
  });
}

function jobParagraphs(item, isFirst) {
  const paras = [
    new Paragraph({
      keepNext: true, keepLines: true,
      spacing: { before: isFirst ? 0 : 320, after: 40 },
      border: isFirst ? undefined : { top: { style: BorderStyle.SINGLE, size: 4, color: "E7E5E4", space: 8 } },
      children: [
        new TextRun({ text: item.period + "  ", bold: true, color: ACCENT_DARK, size: 18 }),
        new TextRun({ text: item.title, bold: true, color: NAVY, size: 21 })
      ]
    }),
    new Paragraph({
      keepNext: true, keepLines: true,
      spacing: { after: 60 },
      children: [new TextRun({ text: item.client, bold: true, color: SOFT, size: 18 })]
    }),
    new Paragraph({
      keepNext: true, keepLines: true,
      spacing: { after: 100 },
      children: [new TextRun({ text: item.summary, color: MUTED, size: 18 })]
    })
  ];
  item.bullets.forEach((b, i) => {
    paras.push(new Paragraph({
      keepNext: true, keepLines: true,
      bullet: { level: 0 },
      spacing: { after: 50 },
      children: [new TextRun({ text: b, color: MUTED, size: 18 })]
    }));
  });
  paras.push(new Paragraph({
    keepLines: true,
    spacing: { before: 40, after: 40 },
    children: [new TextRun({ text: item.tags.join("   ·   "), color: ACCENT_DARK, size: 16, italics: true })]
  }));
  return paras;
}

function earlierParagraph(item) {
  return new Paragraph({
    keepLines: true,
    spacing: { after: 100 },
    children: [
      new TextRun({ text: item.period + "  ", bold: true, color: SOFT, size: 16 }),
      new TextRun({ text: item.title + " — ", bold: true, color: NAVY, size: 16 }),
      new TextRun({ text: item.client, color: SOFT, size: 16 }),
      new TextRun({ text: "  " + item.summary, color: MUTED, size: 16, break: 1 })
    ]
  });
}

function certParagraph(cert) {
  return new Paragraph({
    bullet: { level: 0 },
    spacing: { after: 40 },
    children: [
      new ExternalHyperlink({
        link: cert.url,
        children: [new TextRun({ text: cert.name, color: ACCENT, size: 18, underline: { type: UnderlineType.SINGLE } })]
      })
    ]
  });
}

function buildFooter(contact) {
  return new Footer({
    children: [
      new Paragraph({
        tabStops: [{ type: "right", position: 9900 }],
        children: [
          new TextRun({
            text: `${contact.addressLine}   ·   +49 151 20196267   ·   dominik@espitalier-solutions.de   ·   ${contact.site}`,
            color: SOFT, size: 14
          }),
          new TextRun({ text: "\t", size: 14 }),
          new TextRun({ children: [PageNumber.CURRENT, "/", PageNumber.TOTAL_PAGES], color: SOFT, size: 14 })
        ]
      })
    ]
  });
}

function buildCvDocx(lang, data) {
  const { hero, skills, timeline, info, contact } = data;

  const coreTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder, insideHorizontal: noBorder, insideVertical: noBorder },
    rows: [new TableRow({ children: skills.coreColumns.map(coreColumnCell) })]
  });

  const moreParas = skills.groups.map((g) => new Paragraph({
    spacing: { after: 100 },
    children: [
      new TextRun({ text: g.label + ": ", bold: true, color: NAVY, size: 18 }),
      new TextRun({ text: g.items.join("  ·  "), color: MUTED, size: 18 })
    ]
  }));

  const jobsFlat = timeline.items.flatMap((item, i) => jobParagraphs(item, i === 0));
  const earlierFlat = timeline.earlierItems.map(earlierParagraph);
  const certsFlat = info.certifications.map(certParagraph);

  const doc = new Document({
    styles: {
      default: {
        document: { run: { font: FONT, size: 18 } }
      }
    },
    sections: [{
      properties: { page: { margin: { top: 850, bottom: 850, left: 1000, right: 1000 } } },
      footers: { default: buildFooter(contact) },
      children: [
        new Paragraph({
          children: [new TextRun({ text: hero.name, bold: true, color: NAVY, size: 44, font: FONT })]
        }),
        new Paragraph({
          spacing: { after: 80 },
          children: [new TextRun({ text: hero.title, bold: true, color: ACCENT, size: 24 })]
        }),
        new Paragraph({
          spacing: { after: 200 },
          children: [new TextRun({ text: hero.intro, color: MUTED, size: 18 })]
        }),

        sectionHeading(skills.coreTitle),
        coreTable,
        new Paragraph({ spacing: { before: 180 }, children: [] }),
        ...moreParas,

        sectionHeading(timeline.title),
        ...jobsFlat,
        new Paragraph({
          keepNext: true,
          spacing: { before: 300, after: 120 },
          border: { top: { style: BorderStyle.SINGLE, size: 4, color: "D6D3D1", space: 8 } },
          children: [new TextRun({ text: timeline.earlierHeading, bold: true, color: NAVY, size: 20 })]
        }),
        ...earlierFlat,

        sectionHeading(info.educationTitle + " & " + info.certTitle),
        new Paragraph({
          spacing: { after: 20 },
          children: [new TextRun({ text: info.educationName, bold: true, color: NAVY, size: 18 })]
        }),
        new Paragraph({
          spacing: { after: 140 },
          children: [new TextRun({ text: info.educationDegree, color: MUTED, size: 18 })]
        }),
        ...certsFlat,
        new Paragraph({
          spacing: { before: 140 },
          children: [
            new TextRun({ text: info.interestsTitle + ": ", bold: true, color: NAVY, size: 18 }),
            new TextRun({ text: info.interests.join(", "), color: MUTED, size: 18 })
          ]
        })
      ]
    }]
  });

  return doc;
}

module.exports = { buildCvDocx, Packer };
