import parse from 'csv-parse';
import { convertToMdTable } from './convert';

const csvTextarea = document.getElementById('csv');
const mdTextarea = document.getElementById('markdown');
const headerCheck = document.getElementById('header');
const convertBtn = document.getElementById('convert');

const opt = {
  trim: true,
  quote: '"',
  escape: '\\',
};

convertBtn.addEventListener('click', function() {
  const csv = csvTextarea.value;
  const useHeader = headerCheck.checked;

  parse(csv, opt, function(err, data) {
    if (err) throw err;

    mdTextarea.value = convertToMdTable(data, useHeader);
  });
});
