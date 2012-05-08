!SLIDE center
.title Network Environment 

!SLIDE center
.title Build Environment

* [Our tools][1]
* Scripts for:
  * Setting paths
  * Installing dependencies
  * Building AOSP
  * Running emulator
  * Installing binaries and APKs

[1]: https://github.com/fotioslindiakos/seandroid_tools

!SLIDE center
.title Emulator Setup

* Root the emulator
  * Need to add the -partition-size option
  * Push su and Superuser.apk (and busybox and openvpn)
* Persistent system partition
  * Means permanent root
  * Copy temporary system image over original
    * Temporary image in /tmp/android-username/
