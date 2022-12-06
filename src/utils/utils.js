import {decode as base64_decode} from 'base-64';

const BASE = '';//process.env.STR_CONTANCT_URL
const SPLIT_CHAR ='_';

window.Buffer = window.Buffer || require("buffer").Buffer;
const { TelegramClient } = require('messaging-api-telegram');

const MessageClient = function(){
    const client = new TelegramClient({
        accessToken: base64_decode(BASE.split(SPLIT_CHAR)[0]),
      });
    let cli = {}; 
    cli.sendMessge = function(message){
      return client.sendMessage(base64_decode(BASE.split(SPLIT_CHAR)[1]),message);
    }

    return cli;
};

export function sendMessge(message) {
   let mssg= MessageClient();
   return mssg.sendMessge(message);

}