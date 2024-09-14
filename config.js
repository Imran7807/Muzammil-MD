⅝const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="muhammadmuzammilhaqnawazarain@gmail.com"
global.location="Pakistan, Islamabad."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github=process.env.GITHUB|| "https://github.com/itxmemuzammil/Muzammil-MD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VajzERVFy72FxXdllv2y";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VajzERVFy72FxXdllv2y" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/a6c7556a03ceb8ed447d8.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "258867532400" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "258867532400";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "258867532400";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "258867532400,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://hitdev-qr.onrender.com";


global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0kyc3JJVmN1K0R0cWF3eWc0aXA1Q0dDQktucXI2QktzVUVoK1Z3bUJWVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0s3K0hVSWpURHc0ZXBUbWorcGdRK2l6a1krdGFIZjAwYTBwakZkQ2JtST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwSXBzaWFZQ0xWL3ZlU2lDY2lna3dmTElMd1lFdEVmYnVuTTFTaEpHL1h3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQS0pBSy8yQXUvYnZ2NWdoN01Ka3FUTzREZEVRTHJoVHpmZjdOdWVES0RVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNIZllPcC90T1ppcUp0anZQN1VSeXA3a2RwbHpVS1RqZzk4ak5MS2JaMEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdXbEpWUjNPc0tVWG1SQi9EUU1XVTBVRmozdkhwM3Fxb0xLejhLazZZU009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU1CNlNGbmZJOHp0TjZCU2x0R2xWY1g4WWs0cCtwMDk4SGxRM2xFaWptUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk1MVW9Qd2N3SUdWR28zaXRVZHFIN0pYdE54VGZlUXE4bitUc2ZIeEhGZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklSb2dMa3VEc2VLNzRRNHNTbmV6YmtlOGNMSEZ1Rk91UkN0RlBSaXRnd3VhNUFEa05zUDJQZm81V2tqclBCcnpJVG1rV3hZNHFaK2JrRG1tU1VoeUNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjgsImFkdlNlY3JldEtleSI6InRBeHhPMkt4cXh0ZnpOblhSWWo0aWpPWDFKaGNPQjZKbUdhOGk3UEp2ODg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjBLaXBiQV96UmJPTjFDeFJkMlhkQ0EiLCJwaG9uZUlkIjoiNmY5MGQwMDAtYjI4MS00MTY4LWEwM2UtMmE3ZDU4NDQ2Mzc4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImN6ai8rT253TkU3TytoWDRtLytFc05pWm45QT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsTzlmajg1ZHhYN0F2N0hRSFZSM3hXcVlnSnc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRlc1WFZSOFYiLCJtZSI6eyJpZCI6IjkyMzA0NjEyMzI2NDozNkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTWkzb3JrRkVJYmxrN2NHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaVMyWkVEbmRUOEN6NEM2Ulh6VVNnd2UwSFBYV2wya2ZndUhSZFViWmdGST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiaDF3WnhwekJ1YmRpaG9DekUxYVRoQVI3TWVjZ0I0a3Y1YzBNNktWMTdzWEU2MHlGWUl6KzFIVlZBQ1A2NDFzeDdVTldrdXp0OVYzN09LRHBnUG1IQXc9PSIsImRldmljZVNpZ25hdHVyZSI6InNVRlVnbVdWQXU2SDAzMEJGNFdZeUxQVS9mclFWTUZHT3NPLzV0N0YySDlOTlI4eDZGbzRLcHFtUE0rMXVEanhZa01rWFdUR2FRNzY2Y2ZONllZdERBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMDQ2MTIzMjY0OjM2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllrdG1SQTUzVS9BcytBdWtWODFFb01IdEJ6MTFwZHBINExoMFhWRzJZQlMifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjYyODAzMzgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRjhOIn0="
module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: HITDEV-MD Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0",
  caption : process.env.CAPTION || "『© 𝑴𝒖𝒛𝒂𝒎𝒎𝒊𝒍 𝑴𝑫 𝑶𝒇𝒇𝒊𝒄𝒊𝒂𝒍』" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʜɪᴛᴅᴇᴠ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • ʜɪᴛᴅᴇᴠ ᴛᴇᴄʜ』*\n youtube.com/@hitdeveloper0"),
 
  author : process.env.PACK_AUTHER|| "Muzammil - MD",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ᴍᴜᴢᴀᴍᴍɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Muzammil",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "HITDEV"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
