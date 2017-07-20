export function convertToMdTable(data, useHeader=false) {
  if (data.length === 0) return '';

  // Get header and body
  const header = useHeader ? data[0] : new Array(data[0].length);
  const body = useHeader ? data.slice(1) : data;

  // Create header of markdown table
  const mdHeader = '|' + header.join('|') + '|';

  // Create divider of markdown table
  const nCols = header.length;
  let mdDivider = '|';
  for (let iCol = 0; iCol < nCols; ++iCol) {
    mdDivider += '---|';
  }

  // Create body of markdown table
  let mdRows = new Array(body.length);

  const nRows = body.length;
  for (let iRow = 0; iRow < nRows; ++iRow) {
    const row = body[iRow];
    mdRows[iRow] = '|' + row.join('|') + '|';
  }

  const mdBody = mdRows.join('\n');

  return mdHeader + '\n' + mdDivider + '\n' + mdBody;
}
