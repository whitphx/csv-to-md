function validateCell(value, lineBreak=' ') {
  return value.replace(/\n/g, lineBreak);
}

export function convertToMdTable(data, useHeader = false) {
  // Validate input
  if (data.length === 0) return '';

  // Get header and body
  const header = useHeader ? data[0] : new Array(data[0].length);
  const body = useHeader ? data.slice(1) : data;

  // Create header of markdown table
  const nHeaderCols = header.length;
  let mdHeader = '|';
  for (let iCol = 0; iCol < nHeaderCols; ++iCol) {
    const cell = header[iCol] || '';
    mdHeader += validateCell(cell) + '|';
  }

  // Create divider of markdown table
  let mdDivider = '|';
  for (let iCol = 0; iCol < nHeaderCols; ++iCol) {
    mdDivider += '---|';
  }

  // Create body of markdown table
  let mdRows = new Array(body.length);

  const nRows = body.length;
  for (let iRow = 0; iRow < nRows; ++iRow) {
    const row = body[iRow];
    const nCols = row.length;

    mdRows[iRow] = '|';
    for (let iCol = 0; iCol < nCols; ++iCol) {
      const cell = row[iCol];
      mdRows[iRow] += validateCell(cell) + '|'
    }
  }

  const mdBody = mdRows.join('\n');

  return mdHeader + '\n' + mdDivider + '\n' + mdBody;
}
