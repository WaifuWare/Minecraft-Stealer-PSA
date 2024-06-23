# IWannaBeHappy

### SBFTGroup / SBFT

IWannaBeHappy is an actually good grabber. It uses Branchlock's free trial to obfuscate itself, and opening it in recaf will show a lot of errors. Luckily for us, it is actually easy to neutralize, but the steps are kind of not intuitive at all. Just trust me.
### How to Neutralize

### 1. Open it in recaf

as always, that's where it start

the rat is layed out in this way

![a](https://pics.self-hosted.lol/i/img/CrB25v0o.png)

It actually is good, it's properly obfuscated and contains a lot of useless shit made to waste my time (and wasting my time it did ! 3 hours wasted trying to clean this mess by hand)

![a](https://pics.self-hosted.lol/i/img/RxKTVrQr.png)

## 2. Java Assembly

At the time of writting, this is the first rat I actually had to read and write Java Assembly for.

open SBFTLib in the com.sbft.utils package

Ignore all of the errors, we'll get rid of them soon enough, what we want is the constructor.

![](https://pics.self-hosted.lol/i/img/NKqlcr8M.png)

In order to work, it takes a string and it so happens to be the webhook's URL.

unfortunatly, due to it being obfuscated in a way that create invalid Java code (for recaf, because the grabber run just fine in real conditions), we cant just edit the code as it is.

instead, right click on the method's name and press "Edit with assembler", paste this : 
```
DEFINE PUBLIC <init>(Ljava/lang/String; url)V
A:
LINE A 7
ALOAD this
INVOKESPECIAL java/lang/Object.<init>()V
B:
LINE B 8
ALOAD this
ALOAD url
PUTFIELD com/sbft/utils/SBFTLib.url Ljava/lang/String;
C:
LINE C 9
GETSTATIC java/lang/System.out Ljava/io/PrintStream;
ALOAD url
INVOKEVIRTUAL java/io/PrintStream.println(Ljava/lang/String;)V
D:
LINE D 10
RETURN
E:
```

and just press ctrl + S. It bypass the errors. And now you may be wandering "wait, am I gonna actually launch the rat ?!"

yes. Yes you are. but not just yet !

The method execute() in the same file contains the payload, and we dont want that.

right click on it, and press "Edit with assembler" again, then paste this : 

```
DEFINE PUBLIC execute()V
THROWS java/io/IOException

RETURN
```

it will remove all the code in the method, which is good !

press CTRL + S again, CLOSE ALL OPENED FILES and press CTRL + S AGAIN

This will make sure recaf was able to save all your changes in the current workspace.

Go to File, export program, and save it in your mods folder (dont forget the .jar, recaf dont add it for some reasons).

now launch your Minecraft 1.8.9, in offline mode if possible, or without internet access (just in case, but getting rid of the content of the execute method does disable the grabber entirely) and once you are on the main menu, close the game and check your logs, somewhere in there you'll find the webhook.

![](https://pics.self-hosted.lol/i/img/BNYO9NLF.png)

In this case, unlucky ! it's a guilded webhook, so the only thing you can do is spam it. You cant even ping everyone, and i'm not sure if you can report it. Guilded suck. At the time of writting, I sent a mail to tell them about the issue, but no reponse so far