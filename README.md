# Minecraft-Stealer-PSA

Information about minecraft account loggers, and other funny stuff. Come with utility tools.

## 1. What are Minecraft Loggers

At WaifuWare, a big part of our activity is toying around with viruses. While Tax, Dialz and Neit's expertise is in JavaScript, I'm more of a Java person (also fuck JavaScript that thing stole and is stealing too much time I'll never get back !).

Anyway, Minecraft Loggers are mods made to grab informations about your Minecraft account, and Discord's account.

More often than not, if you have that kind of mods installed, it is likely that you downloaded it for malicious purpose. Those mods are usually advertised as dupe mods, macros, hacked clients, and so on.

## 2. How to recognize one ?

First of all, you need a tool called [Recaf](https://github.com/Col-E/Recaf)  :
This is a Java decompiler and it is good.

Usually, a grabber will have really weird classes (web request libs, cookies, etc...), and will try to access discord path, chrome / firefox and so on.

Another dead give away is the mod information, if it's some default stuff, there's a high probability it's not good

## 3. Known grabbers / threat actors

Each ratter usually has their own "custom" (Sometime skidded) grabber, or at least brand them all the same. Note that several ratters can use the same skidded rat, and some devs actually provide rat generators.

[autogg](actors/autogg) : A cheap grabber that grab your session id, and your discord token

[BenGrabber](actors/ben.md) : A cheap grabber that, while easy to disable, it does manage to grab quite a lot of data.

[IWannaBeHappy](actors/iwannabehappy) : A slightly better grabber that only grab your minecraft account to sell your skyblock coins / items for IRL money

[QOLPlug](actors/qolplug) : one of the bigger ratters I'm aware of.

[Schubi](actors/schubi) : An advanced grabber that grab Cookies, Passwords, and Discord account from every browser / discord client under the sun (Except firefox for some reasons ?), and Minecraft accounts from Essential, Lunar and the default Launcher. It also grab your browser history. 

## 4. Common issues

### 1. where can i find grabbers to destroy ?

I like your enthusiastic mind. My best advise is to look the following terms on youtube and sort by new :

"Hypixel skyblock dupe", "Hypixel Skyblock macro", "Hypixel Skyblock cheats", and so on.

### 2. is there a place to talk about that ?

yes ! "The Fight Against Malware" discord is the place for you : 

[The Fight Against Malware Discord](https://discord.gg/gJngyeCVpY)

### 3. The mod is not readable / obfuscated

Pray that [java-deobfuscator](https://github.com/java-deobfuscator/deobfuscator) is able to deobfuscate it, or learn about Java Assembly

### 4. The mod contain a link to HerokuApp 

you can report malicious Heroku apps on their contact page :

[Heroku Security](https://www.heroku.com/policy/security#vuln_report)

### 5. The mod contain a discord token

That's your lucky day ! there is a lot of things that can be done with a bot token.

You can log in using LiveBot : [LiveBot](https://github.com/SebOuellette/LiveBot/)

If you can't see any discords / channels, go to js, open load.js and set the variable bot.hideUnallowed to false.

And while we dont approve the usage of it for malicious purposes, we provide a discord nuker in the scripts folder. The bot contain infos to use it in its folder.

## 6. What is WaifuWare

If you are here, there's 2 possibility.

1. You somehow found that repo on accident / While looking for our other projects on your own

In which case, hey, hello. 

2. I spammed the shit out of your grabber and then deleted it.

If so, you can see us as one of the numerous people that will do what they can to fuck you over. (also star our projects please).

Anyway, WaifuWare is a French speaking organisation made by members of the FeurGroup. We deal with malwares, grabbers, and all sort of stuff.

We are Frenchs, Swiss and Canadians and we pride ourselves in being efficent in whatever we want to do.