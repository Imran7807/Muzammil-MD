const fs = require('fs-extra')
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


global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0Z0VDlsR3VFc2ZvRnl6NStXb2lLWXltQ0pLVUpFUGM3T3hQTXM3SU1GND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOUt3RzFydzdOV3h3clB4Z1B4MWh4NW9UZ0FZR0EwY1NXTEJHVENKYldCTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXRHVadmk5S2MrOGg3Q2sxY3Nxd2NFZ0tYeEUwMnNzSnNaRHA4ZVlxdlVRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhd0dSZEZueUE2UzFZdGd5bEsxUHVkS0UzeHMxYk9ZalJjQmNWbExja0VjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFDclV0VThVNmRudUFEdW5FdWEwSGlWc3IvR2NEY2RsNlZ1NGE0MFhBVTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJuLzI1bmhNdjAzcHJ3SmZZUEdmWHRmTExEZit3d1JDQlB0bkdqT3ZSaDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUJpNUtQZm5sK0oweExOTUhJMWpuN3M5bGlVd2lDZjNUcDZiT3NSbkVtVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0tsNlp5RFNmMkNaTk4ybFNnYm9aeGRDM1FoQ0ZiV3JyVVlRTGdQZDRuUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllnSm53ck5tMWRZaWdwYmt2QjE5aEVFQUlWajRwNkFVK2hXeCtybW82ZkFFRUlFSUVtQUdUN0FaMDZKVVlSc0duQlc1c1JlVkhZVUF3dnFnNzhINEJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc1LCJhZHZTZWNyZXRLZXkiOiJZSW9JTjZyQzdNT1pBRnBaWXNFMmU3d3JTRGtkUi9GclYyUTQzc1ZwaFF3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJDazFpZ0MwUlNnV0Z1QkE4TVY0N2FnIiwicGhvbmVJZCI6IjYxMWQzODdkLWFjOTktNDk2NS04YWJhLTlmYTI3YzQwOWU3YSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsT1Ara1lhOG1GUnRmdmYyS2pqSWZUVmpJNjg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR01JQmdWUVd0LzREOEZqNXUram4ybkF3ckp3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IldLM1k5WlkxIiwibWUiOnsiaWQiOiI5MjMwNDYxMjMyNjQ6MzNAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01hM29ya0ZFTzdOaUxjR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImlTMlpFRG5kVDhDejRDNlJYelVTZ3dlMEhQWFdsMmtmZ3VIUmRVYlpnRkk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkVBVjJNUTJRU1lTall5V0N1UXg4ZlVtV3B1ZllzYUgwL0JHTUJCbDZJMStXbDl3NDNjRU5rbnBIU2hteTZHT3hBMXB4TzJkVWVKaURZbjRIN2JwUERBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIxUFI4STg1Mk5EUmFxYk51TzRQVTFUZzZpTWh2MDMzT0JnQ3BXSUpobUpOakljYzBraTFnRkFGVnczSEd6RFZlb1FRTm1GV2d3N29lNzA3dU9QRzdEUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzA0NjEyMzI2NDozM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZa3RtUkE1M1UvQXMrQXVrVjgxRW9NSHRCejExcGRwSDRMaDBYVkcyWUJTIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI2MDk3MTQ3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU5iZSJ9"
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
