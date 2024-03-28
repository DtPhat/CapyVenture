'use server'
const { Translate } = require('@google-cloud/translate').v2;
require('dotenv').config();
// import GoogleCloudTranslate from '@google-cloud/translate';
// const { Translate } = GoogleCloudTranslate.v2
// Creates a client
const CREDENTIALS = JSON.parse(process.env.CREDENTIALS ?? "")

const translate = new Translate({
  credentials: CREDENTIALS,
  projectId: CREDENTIALS?.project_id
});

async function translateText(text: string) {
  const target = 'vi';
  try {
    // Translates the text into the target language. "text" can be a string for
    // translating a single piece of text, or an array of strings for translating
    // multiple texts.
    let [translations] = await translate.translate(text, target);
    // translations = Array.isArray(translations) ? translations : [translations];
    // console.log('Translations:');
    // translations.forEach((translation: any, i: number) => {
    //   console.log(`${text[i]} => (${target}) ${translation}`);
    // });
    return translations
  } catch (error) {
    console.log(`Error when translating --> ${error}`);
  }
}

const detectLanguage = async (text: string) => {
  try {
    let response = await translate.detect(text);
    return response[0].language;
  } catch (error) {
    console.log(`Error when detecting language --> ${error}`);
    return 0;
  }
}

export default translateText;