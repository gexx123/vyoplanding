import type React from "react";

type LegalDocumentProps = {
  text: string;
};

function isMajorHeading(line: string) {
  return /^\d+\.\s/.test(line);
}

function isMinorHeading(line: string) {
  return /^\d+\.\d+\s/.test(line) || /^[a-e]\)\s/.test(line) || line === "By You" || line === "By Vyop";
}

function isHeading(line: string) {
  return isMajorHeading(line) || isMinorHeading(line);
}

function isTableLine(line: string) {
  return line.includes("\t");
}

function isBoundary(line: string) {
  return !line || isHeading(line) || isTableLine(line) || line === "⚠️" || line.startsWith("✅");
}

function renderInline(text: string) {
  return text.split(/(vyop4shop@gmail\.com|https:\/\/vyop\.in(?:\/privacy-policy)?)/g).map((part, index) => {
    if (part === "vyop4shop@gmail.com") {
      return (
        <a key={index} href="mailto:vyop4shop@gmail.com" className="font-medium text-[var(--brand-primary)] hover:underline">
          {part}
        </a>
      );
    }

    if (part.startsWith("https://vyop.in")) {
      return (
        <a key={index} href={part} className="font-medium text-[var(--brand-primary)] hover:underline">
          {part}
        </a>
      );
    }

    return part;
  });
}

function TableBlock({ rows }: { rows: string[] }) {
  const parsedRows = rows.map((row) => row.split("\t"));

  return (
    <div className="my-5 overflow-x-auto rounded-md border border-gray-200">
      <table className="w-full min-w-[520px] border-collapse text-sm">
        <tbody>
          {parsedRows.map((cells, rowIndex) => (
            <tr key={`${rowIndex}-${cells.join("-")}`} className={rowIndex === 0 ? "bg-[#f3f0eb]" : "bg-white"}>
              {cells.map((cell, cellIndex) => (
                <td
                  key={`${cellIndex}-${cell}`}
                  className={`border-b border-gray-200 px-4 py-3 align-top ${
                    rowIndex === 0 || cellIndex === 0 ? "font-semibold text-gray-900" : "text-gray-700"
                  } ${cell === "✅" ? "text-green-600" : ""} ${cell === "❌" ? "text-red-500" : ""}`}
                >
                  {renderInline(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ListBlock({ items }: { items: string[] }) {
  return (
    <ul className="my-4 list-disc space-y-2 pl-6 text-gray-700">
      {items.map((item) => (
        <li key={item}>{renderInline(item)}</li>
      ))}
    </ul>
  );
}

function Callout({ tone, title, lines }: { tone: "neutral" | "warning" | "success"; title?: string; lines: string[] }) {
  const toneClasses = {
    neutral: "border-gray-200 bg-[#f3f0eb] text-gray-800",
    warning: "border-red-100 bg-red-50 text-red-700",
    success: "border-green-100 bg-green-50 text-green-700",
  };

  return (
    <div className={`my-5 rounded-md border px-4 py-4 text-sm leading-6 ${toneClasses[tone]}`}>
      {title && <p className="mb-2 font-bold">{title}</p>}
      <div className="space-y-2">
        {lines.map((line) => (
          <p key={line}>{renderInline(line)}</p>
        ))}
      </div>
    </div>
  );
}

export default function LegalDocument({ text }: LegalDocumentProps) {
  const lines = text.split("\n").map((line) => line.trimEnd());
  const title = lines[0];
  const lastUpdated = lines[1];
  const blocks: React.ReactNode[] = [];
  let index = 3;

  while (index < lines.length) {
    const line = lines[index].trim();

    if (!line) {
      index++;
      continue;
    }

    if (line === "⚠️") {
      const titleLine = lines[index + 1]?.trim();
      const warningLines: string[] = [];
      index += 2;

      while (index < lines.length && !isMajorHeading(lines[index].trim())) {
        const warningLine = lines[index].trim();
        if (warningLine) warningLines.push(warningLine);
        index++;
      }

      blocks.push(<Callout key={`warning-${index}`} tone="warning" title={`⚠️ ${titleLine}`} lines={warningLines} />);
      continue;
    }

    if (line.startsWith("Important exception")) {
      blocks.push(<Callout key={`important-${index}`} tone="neutral" lines={[line]} />);
      index++;
      continue;
    }

    if (line.startsWith("✅")) {
      const successLines: string[] = [];

      while (index < lines.length) {
        const successLine = lines[index].trim();
        if (!successLine) {
          index++;
          continue;
        }
        if (!successLine.startsWith("✅")) break;
        successLines.push(successLine);
        index++;
      }

      blocks.push(<Callout key={`success-${index}`} tone="success" lines={successLines} />);
      continue;
    }

    if (isMajorHeading(line)) {
      blocks.push(
        <h2 key={`h2-${index}`} className="mt-10 border-t border-gray-200 pt-5 text-xl font-bold text-gray-950">
          {renderInline(line)}
        </h2>
      );
      index++;
      continue;
    }

    if (isMinorHeading(line)) {
      blocks.push(
        <h3 key={`h3-${index}`} className="mt-5 text-base font-bold text-gray-950">
          {renderInline(line)}
        </h3>
      );
      index++;
      continue;
    }

    if (isTableLine(line)) {
      const rows: string[] = [];

      while (index < lines.length && isTableLine(lines[index])) {
        rows.push(lines[index].trim());
        index++;
      }

      blocks.push(<TableBlock key={`table-${index}`} rows={rows} />);
      continue;
    }

    if (line.endsWith(":")) {
      blocks.push(
        <p key={`p-${index}`} className="my-4 leading-7 text-gray-700">
          {renderInline(line)}
        </p>
      );
      index++;

      const listItems: string[] = [];
      while (index < lines.length) {
        const nextLine = lines[index].trim();
        if (isBoundary(nextLine) || nextLine.startsWith("Important exception")) break;
        if (listItems.length > 0 && /[.!?]$/.test(nextLine)) break;
        listItems.push(nextLine);
        index++;
      }

      if (listItems.length > 0) {
        blocks.push(<ListBlock key={`list-${index}`} items={listItems} />);
      }

      continue;
    }

    const paragraphLines = [line];
    index++;

    while (index < lines.length) {
      const nextLine = lines[index].trim();
      if (isBoundary(nextLine) || nextLine.endsWith(":") || nextLine.startsWith("Important exception")) break;
      paragraphLines.push(nextLine);
      index++;
    }

    blocks.push(
      <p key={`p-${index}`} className="my-4 leading-7 text-gray-700">
        {renderInline(paragraphLines.join(" "))}
      </p>
    );
  }

  return (
    <article className="mx-auto max-w-3xl px-6 pb-16 pt-28 md:px-0 md:pt-32">
      <header className="mb-8 border-b border-gray-200 pb-5">
        <h1 className="text-3xl font-bold tracking-normal text-gray-950 md:text-4xl">{title}</h1>
        <p className="mt-2 text-sm font-medium text-gray-500">{lastUpdated}</p>
      </header>

      <div className="text-[15px] leading-7">{blocks}</div>
    </article>
  );
}
