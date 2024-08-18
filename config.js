//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Topudmh@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Toputech/Topu-ai";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/13f1bb945857eb9b1eca6.jpg";
global.devs = "2348073836273";
global.sudo = process.env.SUDO || "2348073836273";
global.owner = process.env.OWNER_NUMBER || "2348073836273";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV01WMDRKcjNIeUpob0NpTERhN0l0ZDF1a0V2UUdtM2l2SkNPZHhjN2VVVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRGMzN1ljb2N6ZU5UbWV5T1RESDIwM2RBR3hzZHRuV3BqS3ZscG9WL0RnZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2R2g1VUFablZjQTZ2UTArR09RZHMyZTZkNmt4emF5NTVvbFpUY2sxeVZZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJWkoybnJNMmRoRlZvMVIyWkM5RE1xWnhWY2NNNmJMM0pxbndmYkJBR244PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9QT2ZBajFHdW1PMnJpb3B4UnZxbzMrdUVQTFR1MVNPQ2pJZ0E2UG92VW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlSaFF3K0MrZ05YNmQxa0kxZ0FOb2ZCWHNwbEdqRHVUZEprTTdObEdmMjg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic093c0xkWHU3aXJNVVVGdjM4T2RZUXN3aGhQWFM0OWdQMmtFYWRsVU8zZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0VJYkZTdDllVFYwb3dXbHFydGphWnB6eXc5aW9YdkE3eDRKV3l5Mzd4WT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlF4Vlp4RGM2RkhseHhiY1psWXovaElkcmd4TTNueWd3NEdTcmVNSVowOHQxK1c3QkhwRlBMUnVFUFhSWUJzOWxIK3loVW5DbXNpRldvSWFaMHNGeWhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk2LCJhZHZTZWNyZXRLZXkiOiJsc2pRbUV4dTM0TUYwc01KYzJKeUhWYk5LRWJtVGZJMXh0anlMa3M5aTBrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgwNzM4MzYyNzNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNTkyRjNFM0Y1MDc2QjE3MjhDMjI3QkJDODNGMjJDQzkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMzk3MTg2Mn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiUWRkbU9mYUlRZVd2bjdzdHNWVzU3USIsInBob25lSWQiOiIxYWE3YTg4OS1mMDIxLTQ3ZmEtYjg4NS05ODIzNDJlNDVmZjciLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidGhiaHVNSUhHU1BicHg5WHNTRElaNzl6RENrPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJLRWQvK2tYejVJYWlwbERINGxYK1VUci9PTT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJUWU01UkpSQyIsIm1lIjp7ImlkIjoiMjM0ODA3MzgzNjI3MzoxMUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJNciBTYXN1a2UgdHbmgakifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ00rWDNQZ0RFSVh5aHJZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InVMejJMd0g1VnJiRFFaekE1czhzN3o4NFBOeHRZc1VhS29iaEt5VVkxZ3M9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImlQQThibmd0YTlBcXlLejl5UUE5TjJZS25WeEdwUHdmelFhZjhscWZEMXRMbUtmcnNscjJjWVZxZTBIdGFSdEJlVXRHWFlhWU9LenY4bmtpSWFHbUFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJJRkFvbC93TTI1SWg5UkJ3UjlFZUwwYUo4K3VCUlFVWWRpVSt0YVhPdjZNMjhDemZMQm5SWjNOU05BL0FWUjZEditzcWdLamJUbzF1UGRIVEZRcFVpdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwNzM4MzYyNzM6MTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYmk4OWk4QitWYTJ3MEdjd09iUExPOC9PRHpjYldMRkdpcUc0U3NsR05ZTCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzk3MTg1OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEeTMifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝖂𝖔𝖜 𝖙𝖔𝖕𝖚 𝖒𝖉 𝖍𝖆𝖘 𝖏𝖚𝖘𝖙 𝖌𝖊𝖓𝖊𝖗𝖆𝖙𝖊𝖉 𝖆 𝖓𝖊𝖜 𝖋𝖎𝖑𝖊",
  author: process.env.PACK_AUTHER || "TOPU",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "TOP-Md",
  ownername: process.env.OWNER_NAME || "TOPU",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "TOPU").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
