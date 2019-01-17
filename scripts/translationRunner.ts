const manageTranslations = require('react-intl-translations-manager').default;

manageTranslations({
  messagesDirectory: process.argv[2],
  translationsDirectory: process.argv[3],
  languages: ['cs', 'en']
});
