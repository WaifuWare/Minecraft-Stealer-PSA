# BenGrabber

BenGrabber is a cheap, nearly not obfuscated malware. I don't know a lot about its devs, but yeah, it's garbage, it can be defeated within a few minutes on an old laptop.

### How to neutralize it :

## 1. Open recaf and load the mod in it

When you open Recaf, it will be an empty window

![Recaf Empty](Images/RecafEmpty.png)

Take your .jar and drop it in the left side of the window, it will open

![Recaf With Mod](Images/RecafWithMod.png)

The sender is the class Ben in the package net.jodah.typetools.

You can see each payload in the package net.jodah.typetools.impl

Now, we will copy the two first lines of the constructor.

The first one is a cheap attempt at hiding the webhook

![Sender Code](Images/SenderCode.png)

Create, open or otherwise obtain an empty Java project (for convenience but you can use one you already use) and run it in any way you can.

If you are lazy, dumb, dont want to / can't compile Java, use an online compiler like Repl.it

![Sender Code in Idea](Images/SenderCodeInIdea.png)

We now have a discord webhook !

## 2. Delete the webhook

In this repository, I have provided you a straight-forward solution to send one message to the webhook and then delete it.

If you want to be stealthy, you can remove the line that send the message.

Please note that it work on linux only and require the curl command.

allow it to run using the chmod command, then run it with your webhook as argument : 

![Webhook Deleter](Images/WebhookDeleter.png)  
_Please note that in my case it failed because I already deleted it before_

And done ! that grabber is no longer working.
