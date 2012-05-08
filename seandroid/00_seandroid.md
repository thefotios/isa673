!SLIDE center
.title SEAndroid

* SELinux for Android
* Still in early stages of development
* Goals:
  * Enforce Android permissions at the kernel level
  * Prevent exploitation (hardening)
  * Provide guaranteed secure environment (separation)

!SLIDE center
.title SEAndroid Objectives & Issues

* We met with Stephen Smalley
  * Chief SELinux developer at NSA
* NSA is focusing on isolation and exploit prevention
* Limitations of Android currently prevent more fine grained control
  * Binder doesn't pass security contexts
  * Performance and battery life issues
