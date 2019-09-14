const Discord = require("discord.js");
const superagent = require("superagent");
const client = new Discord.Client;



client.on('ready', () => {
  console.log('Go!');
  client.user.setStatus('idle');
 
  //client.uploader.loadCommands();
});



client.on('message', async message => {
if(message.content.startsWith (">shiki")){
 message.content = message.content.slice (7);

if(!message.content) return message.channel.send("Введите ник пользователя!");



let {body} = await superagent
    .get(`https://shikimori.one/api/users/${message.content}`);



let sss = body.stats.statuses['anime'][0].size;
let aaa = body.stats.statuses['anime'][1].size;
let bbb = body.stats.statuses['anime'][2].size;
let fff = body.stats.statuses['anime'][3].size;
let eee = body.stats.statuses['anime'][4].size;

let rrr = body.stats.statuses['manga'][0].size;
let yyy = body.stats.statuses['manga'][1].size;
let hhh = body.stats.statuses['manga'][2].size;
let lll = body.stats.statuses['manga'][3].size;
let ppp = body.stats.statuses['manga'][4].size;

  let embed = new Discord.RichEmbed()
  .setColor("#b91ab8")
  .setAuthor(`Профиль пользователя ${body.nickname}`, "https://imgur.com/48Qz1RL.png")
  .setThumbnail(body.image.x160)
  .addField("Имя:", body.name, true)
  .addField("Пол:", body.sex, true)
  .addField("Возраст:", body.full_years, true)
  .addField("Локация:", body.location, true)
  .addField(`Последний раз в сети:`, "**" + body.last_online + "**", true)
  .addField("______", '.\n\n\n\n', true)
  .addField("Список аниме:", `**Запланировано:** ${sss}\n**Смотрит:** ${aaa}\n**Просмотрено:** ${bbb}\n**Отложено:** ${fff}\n**Брошено:** ${eee}`, true)
  .addField("Список манги:", `**Запланировано:** ${rrr}\n**Читает:** ${yyy}\n**Прочитано:** ${hhh}\n**Отложено:** ${lll}\n**Брошено:** ${ppp}`, true)
  //.addField(`Локация`, body.location, true);

  return message.channel.send(embed);

}
});

client.login("---");