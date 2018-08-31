const Discord = require('discord.js');
const client = new Discord.Client();




client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '$help') {
    msg.reply('$aboutclan,$rules, חוקים$, $עלהקלאן ');
  }
});

client.on('message', msg => {
  if (msg.content === '$עזרה') {
    msg.reply('$aboutclan,$rules, חוקים$, $עלהקלאן ');
  }
});



client.on('message', msg => {
  if (msg.content === '$aboutclan') {
    msg.reply('\n KWR - \n 1.KwR_Ra1nZo :מנהל \n 2. מידע: הקלאן הוא קלאן ישראלי');
  }
});

client.on('message', msg => {
  if (msg.content === '$עלהקלאן') {
    msg.reply('\n KWR - \n 1.KwR_Ra1nZo :מנהל \n 2. מידע: הקלאן הוא קלאן ישראלי');
  }
});

client.on('message', msg => {
  if (msg.content === '$rules') {
    msg.reply('\n 1. אסור לקלל אחד את השני \n 2.    להתנהג בכבוד אחד כלפי השני. \n 3.    כשמבקשים ממכם לכבות את המיקרופון, תעשו טובה ותנתקו את המיקרופון או שתשימו מיוט. \n 4.    כל מי שעובר על החוקים יענש בחומרה!!\n 5.    פעם ראשונה: אזהרה פעם שנייה: קיק מהשרת פעם שלישית: באן מהשרת!\n 6.    אל תקללו בלי סיבה את השרת או אנשי הצוות\n 7.    אל תבקשו ראנק בשום צורה שהיא, פרסומים יהיו ע"י הבוטים בלבד!\n 8.    מי שמפרסם לייב/ערוץ/או קישורים להכנס בלי רשותי יקבל קיק מהשרת\n 9.    :banana:תהנו');
  }
});

client.on('message', msg => {
  if (msg.content === '$חוקים') {
    msg.reply('\n 1. אסור לקלל אחד את השני \n 2.    להתנהג בכבוד אחד כלפי השני. \n 3.    כשמבקשים ממכם לכבות את המיקרופון, תעשו טובה ותנתקו את המיקרופון או שתשימו מיוט. \n 4.    כל מי שעובר על החוקים יענש בחומרה!!\n 5.    פעם ראשונה: אזהרה פעם שנייה: קיק מהשרת פעם שלישית: באן מהשרת!\n 6.    אל תקללו בלי סיבה את השרת או אנשי הצוות\n 7.    אל תבקשו ראנק בשום צורה שהיא, פרסומים יהיו ע"י הבוטים בלבד!\n 8.    מי שמפרסם לייב/ערוץ/או קישורים להכנס בלי רשותי יקבל קיק מהשרת\n 9.    :banana:תהנו');
  }
});

client.login(process.env.BOT_TOKEN);
