# recipient_list_example

本サンプルは、SendGridのマーケティングメール機能で宛先リストに外部URLを指定する際のサンプルアプリケーションです。  
本サンプルアプリケーションを外部URLとして指定することにより、宛先リストを動的に指定することが可能になります。  

## Usage

起動方法:    
```bash
node server.js
```
パラメータ指定方法：  
クエリストリングでパラメータ'sex'を指定可能です。  
'sex'に指定可能な値は'f'または'm'です。  
それぞれ条件を絞り込んだ宛先リストがCSV形式でダウンロードすることができます。  

http://XXX?sex=f  
http://XXX?sex=m  
パラメータを指定しないと全ての宛先リストをダウンロードすることができます。  
http://XXX  

## Developing

node.jsが動作する各環境で動作します。  
Heroku, Azure等の場合、リポジトリにpushするだけで動作します。  

### Tools

Created with [Nodeclipse](https://github.com/Nodeclipse/nodeclipse-1)
 ([Eclipse Marketplace](http://marketplace.eclipse.org/content/nodeclipse), [site](http://www.nodeclipse.org))   

Nodeclipse is free open-source project that grows with your contributions.
