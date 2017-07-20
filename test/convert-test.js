import { expect } from 'chai';

import { convertToMdTable } from '../src/convert';

describe('arrToMarkdown', () => {
  it('converts 2d-array to markdown table', () => {
    const data = [
      ['aaa', 'bbb', 'ccc'],
      ['xxx', 'yyy', 'zzz'],
    ];

    const expected = '||||\n\
|---|---|---|\n\
|aaa|bbb|ccc|\n\
|xxx|yyy|zzz|';
    expect(convertToMdTable(data)).to.equal(expected);
  });

  it('handles the first row as a header if the option specified', () => {
    const data = [
      ['111', '222', '333'],
      ['aaa', 'bbb', 'ccc'],
      ['xxx', 'yyy', 'zzz'],
    ];

    const expected = '|111|222|333|\n\
|---|---|---|\n\
|aaa|bbb|ccc|\n\
|xxx|yyy|zzz|';

    expect(convertToMdTable(data, true)).to.equal(expected);
  });

  it('returns empty string for zero-length array', () => {
    const data = [];

    expect(convertToMdTable(data)).to.equal('');
  });
});
