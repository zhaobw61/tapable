class SyncWaterfallHook { // 钩子是同步的
    constructor(args){
        this.tasks = [];
    }
    tap(name,task){
        this.tasks.push(task);
    }
    call(...args){
        let [frist,...others] = this.tasks;
        let ret = frist(...args);
        others.reduce((a,b)=>{
            return b(a)
        },ret)
    }
}

let hook = new SyncWaterfallHook(['name']);

hook.tap('react',function(name){
    console.log('react',name);
    return 'react ok';
});
hook.tap('node',function(data){
    console.log('node',data);
    return 'node ok';
});
hook.tap('webpack',function(data){
    console.log('webpack',data);
    return 'webpack ok';
});
hook.call('jw');