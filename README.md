# tapable
学习tapable

- SyncHook:同步的钩子

- SyncBailHook:保险钩子

> 返回的非undefined，就会停止执行后面的函数

- SyncWaterfallHook: 瀑布钩子

> 把上一个的函数执行的值，传到下一个。让多个函数建立关系。
 
- SyncLoopHook:循环执行钩子

> 同步遇到某个不返回undefined的函数会多次执行，直到返回undefined