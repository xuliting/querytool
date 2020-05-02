# github
[https://github.com/elastos/Elastos.Trinity](https://github.com/elastos/Elastos.Trinity)

# doc
[https://developer.elastos.org/elastos_trinity/](https://developer.elastos.org/elastos_trinity/)

# dapp
https://www.getdapp.co/

所有发布的 dapp

使用 safari或 chrome 打开，点击链接即可使用 elastOS 安装选中的 dapp

## built in dapps
find the built in dapps in Elastos.Trinity/Dapps/Ionic

https://github.com/elastos/Elastos.Trinity.DApps.Launcher

https://github.com/elastos/Elastos.Trinity.DApps.Wallet

https://github.com/elastos/Elastos.Trinity.DApps.Friends

https://github.com/elastos/Elastos.Trinity.DApps.DID

https://github.com/elastos/Elastos.Trinity.DApps.Settings

https://github.com/elastos/Elastos.Trinity.DApps.QRCodeScanner


## other dapps (developer by elastos)
search Dapp in https://github.com/elastos/

已发布的 dapp

https://github.com/elastos/Elastos.Trinity.DApps.DPoSVoting

https://github.com/elastos/Elastos.Trinity.DApps.Demo.DID (demo for sign, register profile ...)

https://github.com/elastos/Elastos.Trinity.DApps.DAppsStore

https://github.com/elastos/Elastos.Trinity.Dapps.ChainExplorer

https://github.com/elastos/Elastos.Trinity.DApps.CRCouncilVoting

https://github.com/elastos/Elastos.Trinity.DApps.RedPacket

https://github.com/elastos/Elastos.Trinity.DApps.Demo.Carrier

https://github.com/elastos/Elastos.Trinity.DApps.Demo.Hive (to publish)


### 链接格式（必须带参数，否则不执行 intent）：
https://scheme.elastos.org/app?id=starfish.labs.elanodes

# sign in
https://nucleusconsole.com

点击‘Login with Elastos DID’

使用 elastOS 扫描弹出的二维码，即可使用 DID 登录

# Test before publish
https://github.com/elastos/Elastos.Trinity/blob/master/Tests/elastOS_pre_release_manual_test_cases.md


# Night build
https://github.com/elastos/Elastos.Trinity/releases

若有更新，凌晨 travis 会自动编译apk，并上传到 github release（debug 版，带elastos签名）

# Tools
## trinity-cli
### How to install this tool (for DApp developers)
    

```
npm install -g @elastosfoundation/trinity-cli
```
### 常用命令：
```
trinity-cli run -p android 
trinity-cli run -p ios
```

默认是采用 url 启动方式，便于调试 ionic 代码

若须使用正常模式启动，请加上‘--nodebug’，如

```
trinity-cli run -p android --nodebug
```
若使用 release 版，请加上‘--prod’， 如

```
trinity-cli run -p android --nodebug --prod
```
more info:

https://github.com/elastos/Elastos.Trinity.ToolChains/tree/master/cli

## trinity-types
### How to install this tool (for DApp developers)
```
npm install -g @elastosfoundation/trinity-types
```
### Types usage in TS DApps
eg.

import { AppManager } from '@elastosfoundation/trinity-types';

