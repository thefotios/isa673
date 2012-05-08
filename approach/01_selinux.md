!SLIDE center
.title SELinux Approach

* We settled on OpenVPN Settings and CSIPSimple APKs
  * No built in OpenVPN support in AOSP
* Isolate /dev/tun interface
  * Create new SELinux security context
  * Allow only openvpn and SIP client to send traffic
* Eventually isolate other files - certificates, etc.
