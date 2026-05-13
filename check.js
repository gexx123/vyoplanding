const fs = require('fs');
const content = fs.readFileSync('public/uploads/lighthouse.txt', 'utf8');
const lines = content.split('\n');
let currentId = '';
let currentTitle = '';
let currentScore = '';
let currentDisplayValue = '';
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('"id":')) currentId = lines[i].split('"id": "')[1]?.split('"')[0];
  if (lines[i].includes('"title":')) currentTitle = lines[i].split('"title": "')[1]?.split('"')[0];
  if (lines[i].includes('"score":')) currentScore = lines[i].split('"score": ')[1]?.split(',')[0];
  if (lines[i].includes('"displayValue":')) currentDisplayValue = lines[i].split('"displayValue": "')[1]?.split('"')[0];
  if (lines[i].includes('"scoreDisplayMode":')) {
    if (parseFloat(currentScore) < 0.9 && currentScore !== 'null') {
      console.log(currentId, '|', currentScore, '|', currentTitle, '|', currentDisplayValue);
    }
    currentId = '';
    currentTitle = '';
    currentScore = '';
    currentDisplayValue = '';
  }
}
