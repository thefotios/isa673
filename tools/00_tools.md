!SLIDE subsection
# Tools #

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

!SLIDE smaller code

    @@@ Diff
    +type openvpn_app, domain;
    +app_domain(openvpn_app)
    +net_domain(openvpn_app)
    +
    +allow openvpn_app app_data_file:dir 
    +     { remove_name search open add_name };
    +allow openvpn_app app_data_file:file 
    +     { open };
    +allow openvpn_app sdcard:dir 
    +     { read search open };
    +allow openvpn_app sdcard:file 
		+			{ read getattr open };
    +allow openvpn_app self:capability 
		+			{ setuid net_raw setgid net_admin dac_override };
    +allow openvpn_app shell_exec:file 
		+			{ read execute open execute_no_trans };
    +allow openvpn_app su_exec:file 
		+			{ read execute open execute_no_trans };
    +allow openvpn_app system_file:file 
		+			{ execute_no_trans };
    +allow openvpn_app tun_device:chr_file 
		+			{ read write ioctl open };

    +type tun_device, dev_type;

!SLIDE smaller code
    
    @@@ Diff
    +/dev/tun    u:object_r:tun_device:s0
    +
    +/system/xbin/openvpn  u:object_r:openvpn_exec:s0
    
!SLIDE smaller code
    
    @@@ Diff
    +user=app_* type=app_data_file 
    +           name=de.schaeuffelhut.android.openvpn 
    +           domain=openvpn_app 
    +           levelFromUid=true
