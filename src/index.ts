import { createApp } from "vue/dist/vue.esm-browser";
import KBrick from './entry'

createApp({
    template:`
        <div>
            <KButton color="blue">主要按钮</KButton>
            <KButton color="green">绿色按钮</KButton>
            <KButton color="gray">灰色按钮</KButton>
            <KButton color="yellow">黄色按钮</KButton>
            <KButton color="red">红色按钮</KButton>
        </div>
        <div>
            <KButton color="blue" plain>朴素按钮</KButton>
            <KButton color="green" plain>绿色按钮</KButton>
            <KButton color="gray" plain>灰色按钮</KButton>
            <KButton color="yellow" plain>黄色按钮</KButton>
            <KButton color="red" plain>红色按钮</KButton>
        </div>
        <div>
            <KButton size="small" plain>小按钮</KButton>
            <KButton size="medium" plain>中按钮</KButton>
            <KButton size="large" plain>大按钮</KButton>
        </div>
        <div>
            <KButton color="blue" round plain icon="search">搜索按钮</KButton>
            <KButton color="green" round plain icon="edit">编辑按钮</KButton>
            <KButton color="gray" round plain  icon="check">成功按钮</KButton>
            <KButton color="yellow" round plain  icon="info">提示按钮</KButton>
            <KButton color="red" round plain icon="close">删除按钮</KButton>
        </div>
    `
})
.use(KBrick)
.mount("#app");
