//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "2349069045447";
global.owner = process.env.OWNER_NUMBER || "2349069045447";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/Y0pLkKX.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0V2c21PUTVXQlNzOGhPbWtVUFdQZVhqY0FKOURqTm12bGFyRXZVUFgxRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0xZRC9BVWxrMDNtcHhScVRRbjVhandPdTJFMjk1ZW9hZTlXSmhWbVBIZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlRDhlM3piZjBCR0hLUjU1ZjhMRXQ5T3dhL0kxMGl1cW5JVlU4UjltUDNFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4T0dtZkhvaytFYjV6SnNxRS9uMllMbklvckYxMGFNUll6bW8vK2UxWVVjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtPNDBjbHJFVnF5QkNJd21XMjJ5UVBRNERUeDNCL20rdnNQdnE2UlVwbnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlIxcHZQWmk5enZRVGpxV2lsWjdBSUZTcFJGU05NT0FudjRRemRxdXE4amM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU02U05GNzMyQUQ2cC9DS0ZBVUlVaUl5VmRXT2ZYQStpNWY5TWRMODJVaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN1VjYmRKUUJ1K0syZ1hwTUpDZFlYK0x3T01FUXQ3bkl3TmtCU1hCTEcyaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNWWVpQOE1CeGNMVG51QkdmZmZCcnplQnMzRWgxUS85WUd3N3YrTFdBbzc1MGd0MzVLeFZQUEI3dk1ncWYzSGZDay9CM3hLZHBkWXJEZnpmTklPWUJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIsImFkdlNlY3JldEtleSI6IjNLaDlyZ0VuS0dWNUtTRmY0alJ2cEd2Tm5taVA2U3gvM3I0NlY3YXpyUjg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im1vTmxTNjhQU1VhY21NbTI0eWluZWciLCJwaG9uZUlkIjoiOTY2NWEwYWUtNWFhOC00NGJiLTg4N2MtMzZkZjViMDlkMzc3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1RTC9uRURaSDhSOFJkcFFjSHZIQlI1bWc3dz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJubVNSbFU4NTlLOThXTGtBc0Rzd0Z3M3BDMzQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVkpRUkhSV1YiLCJtZSI6eyJpZCI6IjIzNDkwNjkwNDU0NDc6M0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTjd0bURFUW5lL2d0Z1lZQXlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSVJUc3FlY3ZxdDZPaXBqZUtBL1h5QUFSbzZZSmdsQ0pFRHU5YzlEcElYMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoicmNuOWZFWXNNVFR6cUdYMlVVVHg1LzUxRDVaSWRYSnBBTVJudjRpaUh6UVNxZTRxVGdXMEFWQmMxTjJPeHhON3ZtNW5POGFEZzE3YitFZUk1N2MxQmc9PSIsImRldmljZVNpZ25hdHVyZSI6IitEa1RHdkY3TVVhZFN2ZzdzNkRoeE0wbzZDNnJDU0VrL05HQzFNR2NyZWtHRk9tbDZBVW1XZlNvQWNVM0U2R2RUbVl4bzIrOHpGa0g4ZUZsZmo5MUFnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTA2OTA0NTQ0NzozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNFVTdLbm5MNnJlam9xWTNpZ1AxOGdBRWFPbUNZSlFpUkE3dlhQUTZTRjkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjU0NDYwNTgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQWhMIn0="
module.exports = {
  githubToken: process.env.GITHUB_TOKEN || "",
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
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
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
