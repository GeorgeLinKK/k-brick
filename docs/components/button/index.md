# Button 按钮
常用操作按钮
<div style="margin-bottom:20px;">
    <KButton color="blue">主要按钮</KButton>
    <KButton color="green">绿色按钮</KButton>
    <KButton color="gray">灰色按钮</KButton>
    <KButton color="yellow">黄色按钮</KButton>
    <KButton color="red">红色按钮</KButton>
</div>

## 基础用法

基础的函数用法

:::demo 使用`size`、`color`、`pain`、`round`属性来定义 Button 的样式。

```vue
<template>
 <div style="margin-bottom:20px;">
  <KButton color="blue">主要按钮</KButton>
  <KButton color="green">绿色按钮</KButton>
  <KButton color="gray">灰色按钮</KButton>
  <KButton color="yellow">黄色按钮</KButton>
  <KButton color="red">红色按钮</KButton>
 </div>
 <div style="margin-bottom:20px;"
 >
  <KButton color="blue" plain>朴素按钮</KButton>
  <KButton color="green" plain>绿色按钮</KButton>
  <KButton color="gray" plain>灰色按钮</KButton>
  <KButton color="yellow" plain>黄色按钮</KButton>
  <KButton color="red" plain>红色按钮</KButton>
 </div>
 <div style="margin-bottom:20px;">
  <KButton size="small" plain>小按钮</KButton>
  <KButton size="medium" plain>中按钮</KButton>
  <KButton size="large" plain>大按钮</KButton>
 </div>
 <div style="margin-bottom:20px;">
  <KButton color="blue" round plain icon="search">搜索按钮</KButton>
  <KButton color="green" round plain icon="edit">编辑按钮</KButton>
  <KButton color="gray" round plain icon="check">成功按钮</KButton>
  <KButton color="yellow" round plain icon="info">提示按钮</KButton>
  <KButton color="red" round plain icon="close">删除按钮</KButton>
 </div>
 <div style="margin-bottom:20px;">
  <KButton color="blue" round plain icon="search"></KButton>
  <KButton color="green" round plain icon="edit"></KButton>
  <KButton color="gray" round plain icon="check"></KButton>
  <KButton color="yellow" round plain icon="info"></KButton>
  <KButton color="red" round plain icon="close"></KButton>
 </div>
</template>
```
:::

## 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

:::demo 设置 icon 属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用 i 标签即可，可以使用自定义图标。

```vue
<template>
 <div class="flex flex-row">
  <KButton icon="edit" plain></KButton>
  <KButton icon="delete" plain></KButton>
  <KButton icon="share" plain></KButton>
  <KButton round plain icon="search">搜索</KButton>
 </div>
</template>
```
