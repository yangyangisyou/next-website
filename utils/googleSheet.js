import { GoogleSpreadsheet } from 'google-spreadsheet';
import credentials from '../credentials.json';
/**
 * @param  {String} docID the document ID
 * @param  {String} sheetID the google sheet table ID
 * @param  {String} credentialsPath the credentials path defalt is './credentials.json'
 */
async function getData(docID, sheetID) {
  const result = [];
  const doc = new GoogleSpreadsheet(docID);
  await doc.useServiceAccountAuth(credentials);
  await doc.loadInfo();
  const sheet = doc.sheetsById[sheetID];
  const rows = await sheet.getRows();
  for (const row of rows) {
    result.push(row._rawData);
  }
  return result;
}

module.exports = {
  getData,
};
