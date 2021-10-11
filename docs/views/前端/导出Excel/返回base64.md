---
title: 返回Base64，导出文件
date: 2021-08-30 08:00:00
sidebar: auto
tags:
 - 前端
 - 导出文件
categories:
 - 导出文件
---

# 返回Base64，导出文件
```js
//将base64转成Uint8Array
    createFile(urlData, fileType) {
      var bytes = atob(urlData),
        n = bytes.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bytes.charCodeAt(n);
      }
      return new Blob([u8arr], { type: fileType });
    }, //导出
    deleteModel() {
      ExportExcel(this.formdatas).then((res) => {
        var myFile = this.createFile(res, "application/vnd.ms-excel");
        var a = document.createElement("a");
        a.href = window.URL.createObjectURL(myFile); //下载路径指向这个文件对象
        a.download = "水电数据.xlsx";
        a.click(); //指定页面自动下载文件
        document.body.appendChild(a);
        document.body.removeChild(a); // 下载完成移除元素
        window.URL.revokeObjectURL(a.href); // 释放掉blob对象
      });
    },
```