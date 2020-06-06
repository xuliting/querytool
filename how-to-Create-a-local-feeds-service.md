# How to Create a local feeds service

仓库地址: [https://gitlab.com/elastos/Elastos.Service.Feeds/](https://gitlab.com/elastos/Elastos.Service.Feeds/)

（目前可采用master分支）

## 1.在 ~/Workspace/Elastos.Service.Feeds/build 目录下

创建编译文件：

```
cmake -DCMAKE_INSTALL_PREFIX=/Users/xlt/Workspace/FeedsService ..
```

（备注：/Users/xlt/Workspace/FeedsService  # 自己定义的目录）

开始编译：

```
make -j4 （第一次编译要翻墙）
make install
```

## 2.在~/Workspace/FeedsService/bin 目录下

```
cd ../etc/feeds
```

编辑配置文件，配置DID（带前缀，DID 1，用户身份）

```
vi feeds.conf
```

配置文件编辑后，再次回到 ~/Workspace/FeedsService/bin 目录下

执行起服务命令：

```
./svc_feeds -c ../etc/feeds/feeds.conf
```

执行命令后会生成 Carrier 地址。

需通过 DID 的 SDK 生成 DID 文档（DID 2），将 Carrier 地址填入service 中，DID 文档上链后 Feeds 服务即可使用。

"feeds://did:elastos: i****" （此处是 DID 2）可做成二维码，feeds Dapp 扫描该二维码即可添加 feeds service。

## 3.其他（一般不用，如需要修改 DID 1 时可使用）

查看服务相关的数据存储位置：

```
vi ../etc/feeds/carrier.conf    （字段 data-dir）
```

删除服务的数据库：

```
rm ~/.carrier/feeds.sqlite3
```

删除后重新配置 DID 1即可。
