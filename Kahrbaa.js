const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://اتفرج_علي_الشرح.glitch.me/`);
}, 280000);
 

// طبعا الكود هيبقا صعب انك تفهم لوحدك لنو معقد شويتين لكن فكرتو سهلة وحاولت اوفرلكم حاجات كتير مثل انك تقدر تشغل 10 توكانات ف الكود ده
// 
const Discord = require('discord.js');
const initcmd = '#';
const serverid = "ايدي السيرفر"; 
const roomid = "ايدي الروم";
const KahrbaaID = "ايدي حقك";
const GroupNM = "رقم المجموعة";
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const client9 = new Discord.Client();
const client10 = new Discord.Client();
const settings = require("./config.json"); 

client.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم واحد يعمل`);
  console.log(`Hi ${client.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client.guilds.size} " ]`);
});
client2.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم اثنين يعمل `);
  console.log(`Hi ${client2.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client2.guilds.size} " ]`);
});
client3.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 3 يعمل`);
  console.log(`Hi ${client3.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client3.guilds.size} " ]`);
});
client4.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 4 يعمل`);
  console.log(`Hi ${client4.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client4.guilds.size} " ]`);
});
client5.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 5 يعمل`);
  console.log(`Hi ${client5.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client5.guilds.size} " ]`);
});
client6.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 6 يعمل`);
  console.log(`Hi ${client6.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client6.guilds.size} " ]`);
});
client7.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 7 يعمل`);
  console.log(`Hi ${client7.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client7.guilds.size} " ]`);
});
client8.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 8 يعمل`);
  console.log(`Hi ${client8.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client8.guilds.size} " ]`);
});
client9.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 9 يعمل`);
  console.log(`Hi ${client9.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client9.guilds.size} " ]`);
});
client10.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 10 يعمل`);
  console.log(`Hi ${client10.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client10.guilds.size} " ]`);
});


client.on('message', message => {
    if(message.content === initcmd +'dly'){
        message.channel.send('#daily')
    }
});
client2.on('message', message => {
    if(message.content === initcmd +'dly'){
        message.channel.send('#daily')
    }
});
client3.on('message', message => {
    if(message.content === initcmd +'dly'){
        message.channel.send('#daily')
    }
});
client4.on('message', message => {
    if(message.content === initcmd +'dly'){
        message.channel.send('#daily')
    }
});
client5.on('message', message => {
    if(message.content === initcmd +'dly'){
        message.channel.send('#daily')
    }
});
client6.on('message', message => {
    if(message.content === initcmd +'dly'){
        message.channel.send('#daily')
    }
});
client7.on('message', message => {
    if(message.content === initcmd +'dly'){
        message.channel.send('#daily')
    }
});
client8.on('message', message => {
    if(message.content === initcmd +'dly'){
        message.channel.send('#daily')
    }
});
client9.on('message', message => {
    if(message.content === initcmd +'dly'){
        message.channel.send('#daily')
    }
});
client10.on('message', message => {
    if(message.content === initcmd +'dly'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
	
	  if (!KahrbaaID.includes(message.author.id)) return;
    if(message.content === initcmd +'repadmin'){
        message.channel.send("#rep "+"<@" + KahrbaaID + ">")
    }
});
client2.on('message', message => {
	
	  if (!KahrbaaID.includes(message.author.id)) return;
    if(message.content === initcmd +'repadmin'){
        message.channel.send("#rep "+"<@" + KahrbaaID + ">")
    }
});
client3.on('message', message => {
	
	  if (!KahrbaaID.includes(message.author.id)) return;
    if(message.content === initcmd +'repadmin'){
        message.channel.send("#rep "+"<@" + KahrbaaID + ">")
    }
});
client4.on('message', message => {
	
	  if (!KahrbaaID.includes(message.author.id)) return;
    if(message.content === initcmd +'repadmin'){
        message.channel.send("#rep "+"<@" + KahrbaaID + ">")
    }
});
client5.on('message', message => {
	
	  if (!KahrbaaID.includes(message.author.id)) return;
    if(message.content === initcmd +'repadmin'){
        message.channel.send("#rep "+"<@" + KahrbaaID + ">")
    }
});
client6.on('message', message => {
	
	  if (!KahrbaaID.includes(message.author.id)) return;
    if(message.content === initcmd +'repadmin'){
        message.channel.send("#rep "+"<@" + KahrbaaID + ">")
    }
});
client7.on('message', message => {
	
	  if (!KahrbaaID.includes(message.author.id)) return;
    if(message.content === initcmd +'repadmin'){
        message.channel.send("#rep "+"<@" + KahrbaaID + ">")
    }
});
client8.on('message', message => {
	
	  if (!KahrbaaID.includes(message.author.id)) return;
    if(message.content === initcmd +'repadmin'){
        message.channel.send("#rep "+"<@" + KahrbaaID + ">")
    }
});
client9.on('message', message => {
	
	  if (!KahrbaaID.includes(message.author.id)) return;
    if(message.content === initcmd +'repadmin'){
        message.channel.send("#rep "+"<@" + KahrbaaID + ">")
    }
});
client10.on('message', message => {
	
	  if (!KahrbaaID.includes(message.author.id)) return;
    if(message.content === initcmd +'repadmin'){
        message.channel.send("#rep "+"<@" + KahrbaaID + ">")
    }
});



client.on('ready', async () => {

let Kahrbaa = ['سبحان الله',
         'اللهم حبب الي الايمان وزينه في قلبي وكره الي الكفر والفسوق والعصيان واجعلني من الراشدين',
         'استغفر الله',
         'الحمد الله',
         'لا اله الا الله',
         'سبحان الله',
         'بسم الله',
         'اللسان لن تتجاوز الآذان',
         'الحمد للة يسطا',
         'تمم يحب انت عامل ايه',
         'ازيكو يرجالة',
         'Happy new Year Guys',
         'التليفون هيفصل سربرايظ',
         'كل سنة وانتم طيبين',
         'باي',
         'لسا هفتح جوجل وانسخ واترجم واقراء',
         'والله مشوار',
         'ترجمه قوقل فست',
         'اي يجدع السرفر كله انجليزي',
         'حد يراعي شعورنا',
         'ك',
         'okey',
         'ك',
         'طمام الساعه 6 بليل هتلاقيها عندك',
         'اقفل الاوردر علي كدا ؟',
         'بالموبايل المعاهت',
         'يلا اكههربا  ببجي',
         'حبيبي ي كههربا',
         '.كل شيء يبدأ صغيراً ثم يكبر،',
         ' "عندما يعيش الإنسان لنفسه فقط ،يشعر بالحياة قصيرة . لكن عندما يعيش لغيره أيضاً يشعر بها طويلة و عميقة',
         '"فرق شاسع بين العلم و المعرفة فالعلم هو فهم الحقائق أمّا المعرفة هى إدراك الحقائق ',
         '" "لا تقيسوا المحبّة بعذب الكلام ، فكم من أناس يترجمون حبّهم لأفعال و مواقف "',
         ' "لا تفرّط فى مشاعرك من أجل أشخاص',
         ' لا يعرفون قيمتها " "عندما تسطر ',
         'قصّة حياتك ، لا تجعل ش',
         'خصاً آخر يمسك القلم "',
         ' "لست مضطراً لتكون شخص',
         'اً كاملاً ، فقط إستمتع بالحياة و ',
         'ان تكون شخصاً أفضل" "كلمة واحدة',
         ' طيّبة يمكنها أن تغيّر ش',
         '" "أحياناً عليك أن تتقبّل حقيقة',
         ' أنّ ماحدث قد حدث وأنّه لا يمكنك تتغيّير الماضي، لكن بإمكانك صنع المستقبل ',
         '" "العالم الذى بين يدينا الآن هو نتاج لأفكارنا',
         ' لا نستطيع تغيّيره دون تغيير فكرنا" "أحياناً ن',
         'لا تسأل عمّا سوف يحدث بعد شهر ، ',
         'ركّز على يومك',
         'الجمل اهيه',
         'مسابقة جديدااا ارجالة',
         'مبروك يا قلبلي',
         'لافففف',
         'منور الدنيا يكهرببا',
         'جارفي',
         'كورنا اخبارك',
         'ياسطا انا معاية كريديت كتير',
         'لا فكك',
         'كلزق',
         'اشترك ف قناة كههربا ياض ',
         'سبحان الله وبحمده سبحان الله العظيم',
         'استغفر الله العظيم',
         'الحمد لله',
         'لا اله الا الله',
         'حسبي الله لا اله الا هو عليه توكلت وهو رب العرش العظيم'
    , 'واصبر نفسك مع الذين يدعون ربهم بالغداة والعشي يريدون وجهه',
         'ﻻ حول وﻻ قوة الا بالله'
    , 'رب ارحمهما كما ربياني صغيرا']

  setInterval(() => {
client.guilds.get(serverid).channels.get(roomid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},180000);
});


client2.on('ready', async () => {

let Kahrbaa = ['سبحان الله',
         'اللهم حبب الي الايمان وزينه في قلبي وكره الي الكفر والفسوق والعصيان واجعلني من الراشدين',
         'استغفر الله',
         'الحمد الله',
         'لا اله الا الله',
         'سبحان الله',
         'بسم الله',
         'اللسان لن تتجاوز الآذان',
         'الحمد للة يسطا',
         'تمم يحب انت عامل ايه',
         'ازيكو يرجالة',
         'Happy new Year Guys',
         'التليفون هيفصل سربرايظ',
         'كل سنة وانتم طيبين',
         'باي',
         'لسا هفتح جوجل وانسخ واترجم واقراء',
         'والله مشوار',
         'ترجمه قوقل فست',
         'اي يجدع السرفر كله انجليزي',
         'حد يراعي شعورنا',
         'ك',
         'okey',
         'ك',
         'طمام الساعه 6 بليل هتلاقيها عندك',
         'اقفل الاوردر علي كدا ؟',
         'بالموبايل المعاهت',
         'يلا اكههربا  ببجي',
         'حبيبي ي كههربا',
         '.كل شيء يبدأ صغيراً ثم يكبر،',
         ' "عندما يعيش الإنسان لنفسه فقط ،يشعر بالحياة قصيرة . لكن عندما يعيش لغيره أيضاً يشعر بها طويلة و عميقة',
         '"فرق شاسع بين العلم و المعرفة فالعلم هو فهم الحقائق أمّا المعرفة هى إدراك الحقائق ',
         '" "لا تقيسوا المحبّة بعذب الكلام ، فكم من أناس يترجمون حبّهم لأفعال و مواقف "',
         ' "لا تفرّط فى مشاعرك من أجل أشخاص',
         ' لا يعرفون قيمتها " "عندما تسطر ',
         'قصّة حياتك ، لا تجعل ش',
         'خصاً آخر يمسك القلم "',
         ' "لست مضطراً لتكون شخص',
         'اً كاملاً ، فقط إستمتع بالحياة و ',
         'ان تكون شخصاً أفضل" "كلمة واحدة',
         ' طيّبة يمكنها أن تغيّر ش',
         '" "أحياناً عليك أن تتقبّل حقيقة',
         ' أنّ ماحدث قد حدث وأنّه لا يمكنك تتغيّير الماضي، لكن بإمكانك صنع المستقبل ',
         '" "العالم الذى بين يدينا الآن هو نتاج لأفكارنا',
         ' لا نستطيع تغيّيره دون تغيير فكرنا" "أحياناً ن',
         'لا تسأل عمّا سوف يحدث بعد شهر ، ',
         'ركّز على يومك',
         'الجمل اهيه',
         'مسابقة جديدااا ارجالة',
         'مبروك يا قلبلي',
         'لافففف',
         'منور الدنيا يكهرببا',
         'جارفي',
         'كورنا اخبارك',
         'ياسطا انا معاية كريديت كتير',
         'لا فكك',
         'كلزق',
         'اشترك ف قناة كههربا ياض ',
         'سبحان الله وبحمده سبحان الله العظيم',
         'استغفر الله العظيم',
         'الحمد لله',
         'لا اله الا الله',
         'حسبي الله لا اله الا هو عليه توكلت وهو رب العرش العظيم'
    , 'واصبر نفسك مع الذين يدعون ربهم بالغداة والعشي يريدون وجهه',
         'ﻻ حول وﻻ قوة الا بالله'
    , 'رب ارحمهما كما ربياني صغيرا']

  setInterval(() => {
client2.guilds.get(serverid).channels.get(roomid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},180000);
});

client3.on('ready', async () => {

let Kahrbaa = ['سبحان الله',
         'اللهم حبب الي الايمان وزينه في قلبي وكره الي الكفر والفسوق والعصيان واجعلني من الراشدين',
         'استغفر الله',
         'الحمد الله',
         'لا اله الا الله',
         'سبحان الله',
         'بسم الله',
         'اللسان لن تتجاوز الآذان',
         '.كل شيء يبدأ صغيراً ثم يكبر،',
         ' "عندما يعيش الإنسان لنفسه فقط ،يشعر بالحياة قصيرة . لكن عندما يعيش لغيره أيضاً يشعر بها طويلة و عميقة',
         '"فرق شاسع بين العلم و المعرفة فالعلم هو فهم الحقائق أمّا المعرفة هى إدراك الحقائق ',
         '" "لا تقيسوا المحبّة بعذب الكلام ، فكم من أناس يترجمون حبّهم لأفعال و مواقف "',
         ' "لا تفرّط فى مشاعرك من أجل أشخاص',
         ' لا يعرفون قيمتها " "عندما تسطر ',
         'قصّة حياتك ، لا تجعل ش',
         'خصاً آخر يمسك القلم "',
         ' "لست مضطراً لتكون شخص',
         'اً كاملاً ، فقط إستمتع بالحياة و ',
         'ان تكون شخصاً أفضل" "كلمة واحدة',
         ' طيّبة يمكنها أن تغيّر ش',
         '" "أحياناً عليك أن تتقبّل حقيقة',
         ' أنّ ماحدث قد حدث وأنّه لا يمكنك تتغيّير الماضي، لكن بإمكانك صنع المستقبل ',
         '" "العالم الذى بين يدينا الآن هو نتاج لأفكارنا',
         ' لا نستطيع تغيّيره دون تغيير فكرنا" "أحياناً ن',
         'لا تسأل عمّا سوف يحدث بعد شهر ، ',
         'ركّز على يومك',
         'الجمل اهيه',
         'مسابقة جديدااا ارجالة',
         'مبروك يا قلبلي',
         'لافففف',
         'منور الدنيا يكهرببا',
         'جارفي',
         'كورنا اخبارك',
         'ياسطا انا معاية كريديت كتير',
         'لا فكك',
         'كلزق',
         'اشترك ف قناة كههربا ياض ',
         'سبحان الله وبحمده سبحان الله العظيم',
         'استغفر الله العظيم',
         'الحمد لله',
         'لا اله الا الله',
         'حسبي الله لا اله الا هو عليه توكلت وهو رب العرش العظيم'
    , 'واصبر نفسك مع الذين يدعون ربهم بالغداة والعشي يريدون وجهه',
         'ﻻ حول وﻻ قوة الا بالله'
    , 'رب ارحمهما كما ربياني صغيرا']

  setInterval(() => {
client3.guilds.get(serverid).channels.get(roomid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},180000);
});

client4.on('ready', async () => {

let Kahrbaa = ['سبحان الله',
         'اللهم حبب الي الايمان وزينه في قلبي وكره الي الكفر والفسوق والعصيان واجعلني من الراشدين',
         'استغفر الله',
         'الحمد الله',
         'لا اله الا الله',
         'سبحان الله',
         'بسم الله',
         'اللسان لن تتجاوز الآذان',
         'الحمد للة يسطا',
         'تمم يحب انت عامل ايه',
         'ازيكو يرجالة',
         'Happy new Year Guys',
         'التليفون هيفصل سربرايظ',
         'كل سنة وانتم طيبين',
         'باي',
         'لسا هفتح جوجل وانسخ واترجم واقراء',
         'والله مشوار',
         'ترجمه قوقل فست',
         'اي يجدع السرفر كله انجليزي',
         'حد يراعي شعورنا',
         'ك',
         'okey',
         'ك',
         'طمام الساعه 6 بليل هتلاقيها عندك',
         'اقفل الاوردر علي كدا ؟',
         'بالموبايل المعاهت',
         'يلا اكههربا  ببجي',
         'حبيبي ي كههربا',
         '.كل شيء يبدأ صغيراً ثم يكبر،',
         ' "عندما يعيش الإنسان لنفسه فقط ،يشعر بالحياة قصيرة . لكن عندما يعيش لغيره أيضاً يشعر بها طويلة و عميقة',
         '"فرق شاسع بين العلم و المعرفة فالعلم هو فهم الحقائق أمّا المعرفة هى إدراك الحقائق ',
         '" "لا تقيسوا المحبّة بعذب الكلام ، فكم من أناس يترجمون حبّهم لأفعال و مواقف "',
         ' "لا تفرّط فى مشاعرك من أجل أشخاص',
         ' لا يعرفون قيمتها " "عندما تسطر ',
         'قصّة حياتك ، لا تجعل ش',
         'خصاً آخر يمسك القلم "',
         ' "لست مضطراً لتكون شخص',
         'اً كاملاً ، فقط إستمتع بالحياة و ',
         'ان تكون شخصاً أفضل" "كلمة واحدة',
         ' طيّبة يمكنها أن تغيّر ش',
         '" "أحياناً عليك أن تتقبّل حقيقة',
         ' أنّ ماحدث قد حدث وأنّه لا يمكنك تتغيّير الماضي، لكن بإمكانك صنع المستقبل ',
         '" "العالم الذى بين يدينا الآن هو نتاج لأفكارنا',
         ' لا نستطيع تغيّيره دون تغيير فكرنا" "أحياناً ن',
         'لا تسأل عمّا سوف يحدث بعد شهر ، ',
         'ركّز على يومك',
         'الجمل اهيه',
         'مسابقة جديدااا ارجالة',
         'مبروك يا قلبلي',
         'لافففف',
         'منور الدنيا يكهرببا',
         'جارفي',
         'كورنا اخبارك',
         'ياسطا انا معاية كريديت كتير',
         'لا فكك',
         'كلزق',
         'اشترك ف قناة كههربا ياض ',
         'سبحان الله وبحمده سبحان الله العظيم',
         'استغفر الله العظيم',
         'الحمد لله',
         'لا اله الا الله',
         'حسبي الله لا اله الا هو عليه توكلت وهو رب العرش العظيم'
    , 'واصبر نفسك مع الذين يدعون ربهم بالغداة والعشي يريدون وجهه',
         'ﻻ حول وﻻ قوة الا بالله'
    , 'رب ارحمهما كما ربياني صغيرا']

  setInterval(() => {
client4.guilds.get(serverid).channels.get(roomid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},180000);
});

client5.on('ready', async () => {

let Kahrbaa = ['سبحان الله',
         'اللهم حبب الي الايمان وزينه في قلبي وكره الي الكفر والفسوق والعصيان واجعلني من الراشدين',
         'استغفر الله',
         'الحمد الله',
         'لا اله الا الله',
         'سبحان الله',
         'بسم الله',
         'اللسان لن تتجاوز الآذان',
         '.كل شيء يبدأ صغيراً ثم يكبر،',
         ' "عندما يعيش الإنسان لنفسه فقط ،يشعر بالحياة قصيرة . لكن عندما يعيش لغيره أيضاً يشعر بها طويلة و عميقة',
         '"فرق شاسع بين العلم و المعرفة فالعلم هو فهم الحقائق أمّا المعرفة هى إدراك الحقائق ',
         '" "لا تقيسوا المحبّة بعذب الكلام ، فكم من أناس يترجمون حبّهم لأفعال و مواقف "',
         ' "لا تفرّط فى مشاعرك من أجل أشخاص',
         ' لا يعرفون قيمتها " "عندما تسطر ',
         'قصّة حياتك ، لا تجعل ش',
         'خصاً آخر يمسك القلم "',
         ' "لست مضطراً لتكون شخص',
         'اً كاملاً ، فقط إستمتع بالحياة و ',
         'ان تكون شخصاً أفضل" "كلمة واحدة',
         ' طيّبة يمكنها أن تغيّر ش',
         '" "أحياناً عليك أن تتقبّل حقيقة',
         ' أنّ ماحدث قد حدث وأنّه لا يمكنك تتغيّير الماضي، لكن بإمكانك صنع المستقبل ',
         '" "العالم الذى بين يدينا الآن هو نتاج لأفكارنا',
         ' لا نستطيع تغيّيره دون تغيير فكرنا" "أحياناً ن',
         'لا تسأل عمّا سوف يحدث بعد شهر ، ',
         'ركّز على يومك',
         'الجمل اهيه',
         'مسابقة جديدااا ارجالة',
         'مبروك يا قلبلي',
         'لافففف',
         'منور الدنيا يكهرببا',
         'جارفي',
         'كورنا اخبارك',
         'ياسطا انا معاية كريديت كتير',
         'لا فكك',
         'كلزق',
         'اشترك ف قناة كههربا ياض ',
         'سبحان الله وبحمده سبحان الله العظيم',
         'استغفر الله العظيم',
         'الحمد لله',
         'لا اله الا الله',
         'حسبي الله لا اله الا هو عليه توكلت وهو رب العرش العظيم'
    , 'واصبر نفسك مع الذين يدعون ربهم بالغداة والعشي يريدون وجهه',
         'ﻻ حول وﻻ قوة الا بالله'
    , 'رب ارحمهما كما ربياني صغيرا']

  setInterval(() => {
client5.guilds.get(serverid).channels.get(roomid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},180000);
});

client6.on('ready', async () => {

let Kahrbaa = ['سبحان الله',
         'اللهم حبب الي الايمان وزينه في قلبي وكره الي الكفر والفسوق والعصيان واجعلني من الراشدين',
         'استغفر الله',
         'الحمد الله',
         'لا اله الا الله',
         'سبحان الله',
         'بسم الله',
         'اللسان لن تتجاوز الآذان',
         'الحمد للة يسطا',
         'تمم يحب انت عامل ايه',
         'ازيكو يرجالة',
         'Happy new Year Guys',
         'التليفون هيفصل سربرايظ',
         'كل سنة وانتم طيبين',
         'باي',
         'لسا هفتح جوجل وانسخ واترجم واقراء',
         'والله مشوار',
         'ترجمه قوقل فست',
         'اي يجدع السرفر كله انجليزي',
         'حد يراعي شعورنا',
         'ك',
         'okey',
         'ك',
         'طمام الساعه 6 بليل هتلاقيها عندك',
         'اقفل الاوردر علي كدا ؟',
         'بالموبايل المعاهت',
         'يلا اكههربا  ببجي',
         'حبيبي ي كههربا',
         '.كل شيء يبدأ صغيراً ثم يكبر،',
         ' "عندما يعيش الإنسان لنفسه فقط ،يشعر بالحياة قصيرة . لكن عندما يعيش لغيره أيضاً يشعر بها طويلة و عميقة',
         '"فرق شاسع بين العلم و المعرفة فالعلم هو فهم الحقائق أمّا المعرفة هى إدراك الحقائق ',
         '" "لا تقيسوا المحبّة بعذب الكلام ، فكم من أناس يترجمون حبّهم لأفعال و مواقف "',
         ' "لا تفرّط فى مشاعرك من أجل أشخاص',
         ' لا يعرفون قيمتها " "عندما تسطر ',
         'قصّة حياتك ، لا تجعل ش',
         'خصاً آخر يمسك القلم "',
         ' "لست مضطراً لتكون شخص',
         'اً كاملاً ، فقط إستمتع بالحياة و ',
         'ان تكون شخصاً أفضل" "كلمة واحدة',
         ' طيّبة يمكنها أن تغيّر ش',
         '" "أحياناً عليك أن تتقبّل حقيقة',
         ' أنّ ماحدث قد حدث وأنّه لا يمكنك تتغيّير الماضي، لكن بإمكانك صنع المستقبل ',
         '" "العالم الذى بين يدينا الآن هو نتاج لأفكارنا',
         ' لا نستطيع تغيّيره دون تغيير فكرنا" "أحياناً ن',
         'لا تسأل عمّا سوف يحدث بعد شهر ، ',
         'ركّز على يومك',
         'الجمل اهيه',
         'مسابقة جديدااا ارجالة',
         'مبروك يا قلبلي',
         'لافففف',
         'منور الدنيا يكهرببا',
         'جارفي',
         'كورنا اخبارك',
         'ياسطا انا معاية كريديت كتير',
         'لا فكك',
         'كلزق',
         'اشترك ف قناة كههربا ياض ',
         'سبحان الله وبحمده سبحان الله العظيم',
         'استغفر الله العظيم',
         'الحمد لله',
         'لا اله الا الله',
         'حسبي الله لا اله الا هو عليه توكلت وهو رب العرش العظيم'
    , 'واصبر نفسك مع الذين يدعون ربهم بالغداة والعشي يريدون وجهه',
         'ﻻ حول وﻻ قوة الا بالله'
    , 'رب ارحمهما كما ربياني صغيرا']

  setInterval(() => {
client6.guilds.get(serverid).channels.get(roomid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},180000);
});

client7.on('ready', async () => {

let Kahrbaa = ['سبحان الله',
         'اللهم حبب الي الايمان وزينه في قلبي وكره الي الكفر والفسوق والعصيان واجعلني من الراشدين',
         'استغفر الله',
         'الحمد الله',
         'لا اله الا الله',
         'سبحان الله',
         'بسم الله',
         'اللسان لن تتجاوز الآذان',
         '.كل شيء يبدأ صغيراً ثم يكبر،',
         ' "عندما يعيش الإنسان لنفسه فقط ،يشعر بالحياة قصيرة . لكن عندما يعيش لغيره أيضاً يشعر بها طويلة و عميقة',
         '"فرق شاسع بين العلم و المعرفة فالعلم هو فهم الحقائق أمّا المعرفة هى إدراك الحقائق ',
         '" "لا تقيسوا المحبّة بعذب الكلام ، فكم من أناس يترجمون حبّهم لأفعال و مواقف "',
         ' "لا تفرّط فى مشاعرك من أجل أشخاص',
         ' لا يعرفون قيمتها " "عندما تسطر ',
         'قصّة حياتك ، لا تجعل ش',
         'خصاً آخر يمسك القلم "',
         ' "لست مضطراً لتكون شخص',
         'اً كاملاً ، فقط إستمتع بالحياة و ',
         'ان تكون شخصاً أفضل" "كلمة واحدة',
         ' طيّبة يمكنها أن تغيّر ش',
         '" "أحياناً عليك أن تتقبّل حقيقة',
         ' أنّ ماحدث قد حدث وأنّه لا يمكنك تتغيّير الماضي، لكن بإمكانك صنع المستقبل ',
         '" "العالم الذى بين يدينا الآن هو نتاج لأفكارنا',
         ' لا نستطيع تغيّيره دون تغيير فكرنا" "أحياناً ن',
         'لا تسأل عمّا سوف يحدث بعد شهر ، ',
         'ركّز على يومك',
         'الجمل اهيه',
         'مسابقة جديدااا ارجالة',
         'مبروك يا قلبلي',
         'لافففف',
         'منور الدنيا يكهرببا',
         'جارفي',
         'كورنا اخبارك',
         'ياسطا انا معاية كريديت كتير',
         'لا فكك',
         'كلزق',
         'اشترك ف قناة كههربا ياض ',
         'سبحان الله وبحمده سبحان الله العظيم',
         'استغفر الله العظيم',
         'الحمد لله',
         'لا اله الا الله',
         'حسبي الله لا اله الا هو عليه توكلت وهو رب العرش العظيم'
    , 'واصبر نفسك مع الذين يدعون ربهم بالغداة والعشي يريدون وجهه',
         'ﻻ حول وﻻ قوة الا بالله'
    , 'رب ارحمهما كما ربياني صغيرا']

  setInterval(() => {
client7.guilds.get(serverid).channels.get(roomid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},180000);
});

client8.on('ready', async () => {

let Kahrbaa = ['سبحان الله',
         'اللهم حبب الي الايمان وزينه في قلبي وكره الي الكفر والفسوق والعصيان واجعلني من الراشدين',
         'استغفر الله',
         'الحمد الله',
         'لا اله الا الله',
         'سبحان الله',
         'بسم الله',
         'اللسان لن تتجاوز الآذان',
         'الحمد للة يسطا',
         'تمم يحب انت عامل ايه',
         'ازيكو يرجالة',
         'Happy new Year Guys',
         'التليفون هيفصل سربرايظ',
         'كل سنة وانتم طيبين',
         'باي',
         'لسا هفتح جوجل وانسخ واترجم واقراء',
         'والله مشوار',
         'ترجمه قوقل فست',
         'اي يجدع السرفر كله انجليزي',
         'حد يراعي شعورنا',
         'ك',
         'okey',
         'ك',
         'طمام الساعه 6 بليل هتلاقيها عندك',
         'اقفل الاوردر علي كدا ؟',
         'بالموبايل المعاهت',
         'يلا اكههربا  ببجي',
         'حبيبي ي كههربا',
         '.كل شيء يبدأ صغيراً ثم يكبر،',
         ' "عندما يعيش الإنسان لنفسه فقط ،يشعر بالحياة قصيرة . لكن عندما يعيش لغيره أيضاً يشعر بها طويلة و عميقة',
         '"فرق شاسع بين العلم و المعرفة فالعلم هو فهم الحقائق أمّا المعرفة هى إدراك الحقائق ',
         '" "لا تقيسوا المحبّة بعذب الكلام ، فكم من أناس يترجمون حبّهم لأفعال و مواقف "',
         ' "لا تفرّط فى مشاعرك من أجل أشخاص',
         ' لا يعرفون قيمتها " "عندما تسطر ',
         'قصّة حياتك ، لا تجعل ش',
         'خصاً آخر يمسك القلم "',
         ' "لست مضطراً لتكون شخص',
         'اً كاملاً ، فقط إستمتع بالحياة و ',
         'ان تكون شخصاً أفضل" "كلمة واحدة',
         ' طيّبة يمكنها أن تغيّر ش',
         '" "أحياناً عليك أن تتقبّل حقيقة',
         ' أنّ ماحدث قد حدث وأنّه لا يمكنك تتغيّير الماضي، لكن بإمكانك صنع المستقبل ',
         '" "العالم الذى بين يدينا الآن هو نتاج لأفكارنا',
         ' لا نستطيع تغيّيره دون تغيير فكرنا" "أحياناً ن',
         'لا تسأل عمّا سوف يحدث بعد شهر ، ',
         'ركّز على يومك',
         'الجمل اهيه',
         'مسابقة جديدااا ارجالة',
         'مبروك يا قلبلي',
         'لافففف',
         'منور الدنيا يكهرببا',
         'جارفي',
         'كورنا اخبارك',
         'ياسطا انا معاية كريديت كتير',
         'لا فكك',
         'كلزق',
         'اشترك ف قناة كههربا ياض ',
         'سبحان الله وبحمده سبحان الله العظيم',
         'استغفر الله العظيم',
         'الحمد لله',
         'لا اله الا الله',
         'حسبي الله لا اله الا هو عليه توكلت وهو رب العرش العظيم'
    , 'واصبر نفسك مع الذين يدعون ربهم بالغداة والعشي يريدون وجهه',
         'ﻻ حول وﻻ قوة الا بالله'
    , 'رب ارحمهما كما ربياني صغيرا']

  setInterval(() => {
client8.guilds.get(serverid).channels.get(roomid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},180000);
});

client9.on('ready', async () => {

let Kahrbaa = ['سبحان الله',
         'اللهم حبب الي الايمان وزينه في قلبي وكره الي الكفر والفسوق والعصيان واجعلني من الراشدين',
         'استغفر الله',
         'الحمد الله',
         'لا اله الا الله',
         'سبحان الله',
         'بسم الله',
         'اللسان لن تتجاوز الآذان',
         '.كل شيء يبدأ صغيراً ثم يكبر،',
         ' "عندما يعيش الإنسان لنفسه فقط ،يشعر بالحياة قصيرة . لكن عندما يعيش لغيره أيضاً يشعر بها طويلة و عميقة',
         '"فرق شاسع بين العلم و المعرفة فالعلم هو فهم الحقائق أمّا المعرفة هى إدراك الحقائق ',
         '" "لا تقيسوا المحبّة بعذب الكلام ، فكم من أناس يترجمون حبّهم لأفعال و مواقف "',
         ' "لا تفرّط فى مشاعرك من أجل أشخاص',
         ' لا يعرفون قيمتها " "عندما تسطر ',
         'قصّة حياتك ، لا تجعل ش',
         'خصاً آخر يمسك القلم "',
         ' "لست مضطراً لتكون شخص',
         'اً كاملاً ، فقط إستمتع بالحياة و ',
         'ان تكون شخصاً أفضل" "كلمة واحدة',
         ' طيّبة يمكنها أن تغيّر ش',
         '" "أحياناً عليك أن تتقبّل حقيقة',
         ' أنّ ماحدث قد حدث وأنّه لا يمكنك تتغيّير الماضي، لكن بإمكانك صنع المستقبل ',
         '" "العالم الذى بين يدينا الآن هو نتاج لأفكارنا',
         ' لا نستطيع تغيّيره دون تغيير فكرنا" "أحياناً ن',
         'لا تسأل عمّا سوف يحدث بعد شهر ، ',
         'ركّز على يومك',
         'الجمل اهيه',
         'مسابقة جديدااا ارجالة',
         'مبروك يا قلبلي',
         'لافففف',
         'منور الدنيا يكهرببا',
         'جارفي',
         'كورنا اخبارك',
         'ياسطا انا معاية كريديت كتير',
         'لا فكك',
         'كلزق',
         'اشترك ف قناة كههربا ياض ',
         'سبحان الله وبحمده سبحان الله العظيم',
         'استغفر الله العظيم',
         'الحمد لله',
         'لا اله الا الله',
         'حسبي الله لا اله الا هو عليه توكلت وهو رب العرش العظيم'
    , 'واصبر نفسك مع الذين يدعون ربهم بالغداة والعشي يريدون وجهه',
         'ﻻ حول وﻻ قوة الا بالله'
    , 'رب ارحمهما كما ربياني صغيرا']

  setInterval(() => {
client9.guilds.get(serverid).channels.get(roomid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},180000);
});

client10.on('ready', async () => {

let Kahrbaa = ['سبحان الله',
         'اللهم حبب الي الايمان وزينه في قلبي وكره الي الكفر والفسوق والعصيان واجعلني من الراشدين',
         'استغفر الله',
         'الحمد الله',
         'لا اله الا الله',
         'سبحان الله',
         'بسم الله',
         'اللسان لن تتجاوز الآذان',
         'الحمد للة يسطا',
         'تمم يحب انت عامل ايه',
         'ازيكو يرجالة',
         'Happy new Year Guys',
         'التليفون هيفصل سربرايظ',
         'كل سنة وانتم طيبين',
         'باي',
         'لسا هفتح جوجل وانسخ واترجم واقراء',
         'والله مشوار',
         'ترجمه قوقل فست',
         'اي يجدع السرفر كله انجليزي',
         'حد يراعي شعورنا',
         'ك',
         'okey',
         'ك',
         'طمام الساعه 6 بليل هتلاقيها عندك',
         'اقفل الاوردر علي كدا ؟',
         'بالموبايل المعاهت',
         'يلا اكههربا  ببجي',
         'حبيبي ي كههربا',
         '.كل شيء يبدأ صغيراً ثم يكبر،',
         ' "عندما يعيش الإنسان لنفسه فقط ،يشعر بالحياة قصيرة . لكن عندما يعيش لغيره أيضاً يشعر بها طويلة و عميقة',
         '"فرق شاسع بين العلم و المعرفة فالعلم هو فهم الحقائق أمّا المعرفة هى إدراك الحقائق ',
         '" "لا تقيسوا المحبّة بعذب الكلام ، فكم من أناس يترجمون حبّهم لأفعال و مواقف "',
         ' "لا تفرّط فى مشاعرك من أجل أشخاص',
         ' لا يعرفون قيمتها " "عندما تسطر ',
         'قصّة حياتك ، لا تجعل ش',
         'خصاً آخر يمسك القلم "',
         ' "لست مضطراً لتكون شخص',
         'اً كاملاً ، فقط إستمتع بالحياة و ',
         'ان تكون شخصاً أفضل" "كلمة واحدة',
         ' طيّبة يمكنها أن تغيّر ش',
         '" "أحياناً عليك أن تتقبّل حقيقة',
         ' أنّ ماحدث قد حدث وأنّه لا يمكنك تتغيّير الماضي، لكن بإمكانك صنع المستقبل ',
         '" "العالم الذى بين يدينا الآن هو نتاج لأفكارنا',
         ' لا نستطيع تغيّيره دون تغيير فكرنا" "أحياناً ن',
         'لا تسأل عمّا سوف يحدث بعد شهر ، ',
         'ركّز على يومك',
         'الجمل اهيه',
         'مسابقة جديدااا ارجالة',
         'مبروك يا قلبلي',
         'لافففف',
         'منور الدنيا يكهرببا',
         'جارفي',
         'كورنا اخبارك',
         'ياسطا انا معاية كريديت كتير',
         'لا فكك',
         'كلزق',
         'اشترك ف قناة كههربا ياض ',
         'سبحان الله وبحمده سبحان الله العظيم',
         'استغفر الله العظيم',
         'الحمد لله',
         'لا اله الا الله',
         'حسبي الله لا اله الا هو عليه توكلت وهو رب العرش العظيم'
    , 'واصبر نفسك مع الذين يدعون ربهم بالغداة والعشي يريدون وجهه',
         'ﻻ حول وﻻ قوة الا بالله'
    , 'رب ارحمهما كما ربياني صغيرا']

  setInterval(() => {
client10.guilds.get(serverid).channels.get(roomid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},180000);
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(initcmd)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(initcmd.length);

  let args = message.content.split(" ").slice(1);


  
if (command == GroupNM +"1") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client2.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(initcmd)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(initcmd.length);

  let args = message.content.split(" ").slice(1);


  
if (command == GroupNM +"2") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client3.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(initcmd)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(initcmd.length);

  let args = message.content.split(" ").slice(1);


  
if (command == GroupNM +"3") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client4.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(initcmd)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(initcmd.length);

  let args = message.content.split(" ").slice(1);


  
if (command == GroupNM +"4") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client5.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(initcmd)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(initcmd.length);

  let args = message.content.split(" ").slice(1);


  
if (command == GroupNM +"5") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client6.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(initcmd)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(initcmd.length);

  let args = message.content.split(" ").slice(1);


  
if (command == GroupNM +"6") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client7.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(initcmd)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(initcmd.length);

  let args = message.content.split(" ").slice(1);


  
if (command == GroupNM +"7") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client8.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(initcmd)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(initcmd.length);

  let args = message.content.split(" ").slice(1);


  
if (command == GroupNM +"8") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client9.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(initcmd)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(initcmd.length);

  let args = message.content.split(" ").slice(1);


  
if (command == GroupNM +"9") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client10.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(initcmd)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(initcmd.length);

  let args = message.content.split(" ").slice(1);


  
if (command == GroupNM +"10") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});







client.login(settings.token);
client2.login(settings.token2);
client3.login(settings.token3);
client4.login(settings.token4);
client5.login(settings.token5);
client6.login(settings.token6);
client7.login(settings.token7);
client8.login(settings.token8);
client9.login(settings.token9);
client10.login(settings.token10);
