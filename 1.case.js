class SyncBailHook { // 钩子是同步的
    constructor(args){
        this.tasks = [];
    }
    tap(name,task){
        this.tasks.push(task);
    }
    call(...args){
        // this.task.forEach((task)=>task(...args));
        let ret;
        let index = 0;
        do{
            ret = this.tasks[index++].call(...args);
        }while(ret == undefined && index < this.tasks.length)
    }
}

let hook = new SyncBailHook(['name']);

hook.tap('react',function(name){
    console.log('react',name);
    return '停止向下执行';
});
hook.tap('node',function(name){
    console.log('node',name);
});

hook.call('jw');