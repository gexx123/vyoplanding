import React from "react";

type LegalTextProps = {
  document: string;
};

function isHeading(line: string) {
  return /^\d+\.\s/.test(line) || /^\d+\.\d+\s/.test(line);
}

function isSubheading(line: string) {
  return /^[a-z]\)\s/.test(line) || /^Option \d:/.test(line) || line === "By You" || line === "By Vyop";
}

function isTableLine(line: string) {
  return line.includes("\t");
}

function renderTable(lines: string[], key: string) {
  const rows = lines.map((line) => line.split("\t"));
  const [head, ...body] = rows;

  return (
    <div key={key} className="my-5 overflow-x-auto rounded-md border border-[var(--border-subtle)]">
      <table className="w-full min-w-[560px] border-collapse text-left text-sm">
        <thead className="bg-[#F1EFEA] text-[var(--text-primary)]">
          <tr>
            {head.map((cell, index) => (
              <th key={index} className="border-b border-[var(--border-subtle)] px-4 py-3 font-bold">
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, rowIndex) => (
            <tr key={rowIndex} className="odd:bg-white even:bg-[#FAFAFA]">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="border-b border-[var(--border-subtle)] px-4 py-3 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function renderBulletList(lines: string[], key: string) {
  return (
    <ul key={key} className="my-4 list-disc space-y-2 pl-6 text-[15px] leading-7 text-gray-700">
      {lines.map((line, index) => (
        <li key={index}>{line}</li>
      ))}
    </ul>
  );
}

function renderCallout(lines: string[], key: string) {
  const [title, ...body] = lines;

  return (
    <div key={key} className="my-5 rounded-md border border-red-100 bg-red-50 px-5 py-4 text-red-700">
      <p className="mb-2 font-bold text-red-800">{title}</p>
      <div className="space-y-3 text-sm leading-7">
        {body.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
}

export default function LegalText({ document }: LegalTextProps) {
  const lines = document.split(/\r?\n/);
  const nodes: React.ReactNode[] = [];

  let i = 0;
  while (i < lines.length) {
    const rawLine = lines[i];
    const line = rawLine.trim();

    if (!line) {
      i++;
      continue;
    }

    if (i === 0) {
      nodes.push(
        <h1 key="title" className="mb-1 text-2xl font-extrabold text-[var(--text-primary)]">
          {line}
        </h1>
      );
      i++;
      continue;
    }

    if (line.startsWith("Last updated:")) {
      nodes.push(
        <p key={`updated-${i}`} className="mb-8 border-b border-[var(--border-subtle)] pb-5 text-sm text-gray-500">
          {line}
        </p>
      );
      i++;
      continue;
    }

    if (line === "⚠️") {
      const calloutLines: string[] = [];
      i++;
      while (i < lines.length) {
        const next = lines[i].trim();
        if (/^3\.\s/.test(next)) break;
        if (next) calloutLines.push(next);
        i++;
      }
      nodes.push(renderCallout(calloutLines, `callout-${i}`));
      continue;
    }

    if (isTableLine(line)) {
      const tableLines: string[] = [];
      while (i < lines.length && isTableLine(lines[i].trim())) {
        tableLines.push(lines[i].trim());
        i++;
      }
      nodes.push(renderTable(tableLines, `table-${i}`));
      continue;
    }

    if (isHeading(line)) {
      nodes.push(
        <h2 key={`h2-${i}`} className="mt-9 border-b border-[var(--border-subtle)] pb-2 text-xl font-extrabold text-[var(--text-primary)]">
          {line}
        </h2>
      );
      i++;
      continue;
    }

    if (isSubheading(line)) {
      nodes.push(
        <h3 key={`h3-${i}`} className="mt-5 text-base font-bold text-[var(--text-primary)]">
          {line}
        </h3>
      );
      i++;
      continue;
    }

    if (line.endsWith(":")) {
      nodes.push(
        <p key={`p-${i}`} className="mt-4 text-[15px] leading-7 text-gray-700">
          {line}
        </p>
      );
      i++;

      const bullets: string[] = [];
      while (i < lines.length) {
        const next = lines[i].trim();
        if (!next || isHeading(next) || isSubheading(next) || isTableLine(next) || next === "⚠️") break;
        bullets.push(next);
        i++;
      }

      if (bullets.length) {
        nodes.push(renderBulletList(bullets, `ul-${i}`));
      }
      continue;
    }

    if (line.startsWith("✅")) {
      const checkLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("✅")) {
        checkLines.push(lines[i].trim());
        i++;
        while (i < lines.length && !lines[i].trim()) i++;
      }
      nodes.push(
        <div key={`checks-${i}`} className="my-5 rounded-md bg-[#F1EFEA] px-5 py-4 text-sm leading-7 text-gray-700">
          {checkLines.map((check, index) => (
            <p key={index}>{check}</p>
          ))}
        </div>
      );
      continue;
    }

    nodes.push(
      <p key={`p-${i}`} className="mt-4 text-[15px] leading-7 text-gray-700">
        {line}
      </p>
    );
    i++;
  }

  return <article className="mx-auto w-full max-w-3xl">{nodes}</article>;
}
