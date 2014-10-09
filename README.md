# ir-receiver-node-raspi

Exploring Raspberry Pi as infrared receiver for fun sneaky projects

## Terse instructions

### Prerequisites:

* Buy infrared receiver to your raspberry pi. You can buy one for about $1 on eBay.

* Install all the Linux drivers for infrared (lirc).

* Hook up the infrared receiver to your raspberry pi.

* Make sure it works using 'mode2' command

* Grab an old television remote control (that has a strong ir signal)

* Manually create a mapping of the buttons to a configuration file (irrecord, and this takes some time).
   - Here are some of the keys that you will be forced to use 'irrecord --list-namespace'.

* Check to see if your mappings worked by using 'irw' command, and pressing buttons while pointing at your infrared receiver. You'll see the key names as console output.


### Running your infrared receiver in the context of node.js

* Permissions issues might force you to run as 'sudo' so use 'sudo $(which node) service.js'

* Point your remote control at the infrared receiver, and you should see the key names as console output.


### Check out these two links for finer grain instructions.

http://forum.osmc.tv/showthread.php?tid=1954

http://alexba.in/blog/2013/01/06/setting-up-lirc-on-the-raspberrypi/
