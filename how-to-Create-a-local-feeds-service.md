# How to Create a local feeds service

仓库地址: [https://gitlab.com/elastos/Elastos.Service.Feeds/](https://gitlab.com/elastos/Elastos.Service.Feeds/)

（目前可采用master分支）

## 1.在 ~/Workspace/Elastos.Service.Feeds/build 目录下

       创建编译文件

       cmake -DCMAKE_INSTALL_PREFIX=/Users/xlt/Workspace/FeedsService ..

    （备注： /Users/xlt/Workspace/FeedsService     # 自己定义的目录）

       开始编译：

       make -j4  （第一次编译要翻墙）

       make install

## 2.在~/Workspace/FeedsService/bin 目录下

      cd ../etc/feeds

      编辑配置文件，配置DID（带前缀，DID 1，用户身份）

      vi feeds.conf

      配置文件编辑后，再次回到 ~/Workspace/FeedsService/bin 目录下

      执行起服务命令：

     ./svc_feeds -c ../etc/feeds/feeds.conf

      执行命令后会生成Carrier地址。

      需通过DID的SDK生成DID文档（DID 2），将Carrier地址填入service中，DID文档上链后Feeds服务即可使用。

      feeds://did:elastos: i****  （此处是 DID 2）  可做成二维码，feeds Dapp扫描该二维码即可添加feeds服务。

## 3.其他（一般不用，如需要修改DID 1 时可使用）

        查看服务相关的数据存储位置：

        vi ../etc/feeds/carrier.conf    （字段data-dir）

        删除服务的数据库：

        rm ~/.carrier/feeds.sqlite3



        删除后重新配置DID 1即可。
