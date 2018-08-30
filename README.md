# Electrode Native Dummy Container Transformer

This transformer will just log the configuration it was called with.

It has no use other than showcasing a minimal implementation of an Electrode Native Container transformer, which can be used as a reference to create a Container publiser.

**Requires ern >= 0.21.0**

For example calling `ern transformer-container` using this transformer, as follow :

```shell 
$ ern transform-container --containerPath /path/to/android/container --transformer dummy --platform android --extra '{"dummy-key":"dummy-value"}'
```

Will output the following :

```
 ___ _        _               _       _  _      _   _
| __| |___ __| |_ _ _ ___  __| |___  | \| |__ _| |_(_)_ _____
| _|| / -_) _|  _| '_/ _ \/ _` / -_) | .` / _` |  _| \ V / -_)
|___|_\___\__|\__|_| \___/\__,_\___| |_|\_\__,_|\__|_|\_/\___|
[v1000.0.0] [Cauldron: -NONE-]

✔ Validity checks have passed

==================================================================
I am a dummy transformer, I just log the config I was called with.
By the way ... here it is !
==================================================================
{
  "containerPath": "/var/folders/mp/sgcm53dd33b348tm65vwc6_8kv5xkh/T/tmp-56067a9jITAxew1hr",
  "extra": {
    "dummy-key": "dummy-value"
  },
  "platform": "android",
  "transformer": "dummy",
  "ernVersion": "1000.0.0"
}
```