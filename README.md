# ir-receiver-node-raspi

Exploring Raspberry Pi as infrared receiver for fun sneaky projects

## Terse instructions

### Prerequisites:

* Buy an infrared receiver for your raspberry pi. You pick one up for about $1 online.

* Install all the Linux drivers for infrared (lirc).

* Hook up the infrared receiver to your raspberry pi's gpio pins.

* Grab an old television remote control (one that has a strong ir signal).

* Run 'mode2' command, and point your remote control at the infrared receiver.

* Manually create a mapping of the buttons to a configuration file (irrecord, and this takes some time).
   - Run 'irrecord --list-namespace' to see some of the "potential" key names of your buttons. "potential" because you name the buttons during the configurations steps of irrecord. You can use keys that fit the button's action, or not, it's up to you. But it needs to be one of the keys within that list.

* Check to see if your mappings worked by using 'irw' command, and pressing buttons while pointing at your infrared receiver. You'll see the key names as console output.


### Running your infrared receiver in the context of node.js

* Permissions issues might force you to run as 'sudo' so use 'sudo $(which node) service.js'

* Point your remote control at the infrared receiver, and you should see the key names as console output.


### Very good instructions:

http://forum.osmc.tv/showthread.php?tid=1954 (skip the part about xml configurations)

http://alexba.in/blog/2013/01/06/setting-up-lirc-on-the-raspberrypi/

If you stick with the instructions on those two pages, you should have everything that you need.


## Output

At the end of the day, you should see something similar to this in your console:

```
0000000000004102 00 KEY_2 /home/pi/sharp.conf
0000000000004102 01 KEY_2 /home/pi/sharp.conf
0000000000004202 00 KEY_1 /home/pi/sharp.conf
0000000000004202 01 KEY_1 /home/pi/sharp.conf
0000000000004202 02 KEY_1 /home/pi/sharp.conf
00000000000040a2 00 KEY_VOLUMEUP /home/pi/sharp.conf
00000000000040a2 01 KEY_VOLUMEUP /home/pi/sharp.conf
00000000000040a2 00 KEY_VOLUMEUP /home/pi/sharp.conf
00000000000040a2 01 KEY_VOLUMEUP /home/pi/sharp.conf
00000000000040a2 00 KEY_VOLUMEUP /home/pi/sharp.conf
00000000000040a2 01 KEY_VOLUMEUP /home/pi/sharp.conf
00000000000042a2 00 KEY_VOLUMEDOWN /home/pi/sharp.conf
00000000000042a2 00 KEY_VOLUMEDOWN /home/pi/sharp.conf
```

This should be enough data to work with.
