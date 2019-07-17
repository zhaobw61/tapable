class ASyncPromiseHook { // 钩子是同步的
    constructor(args){
        this.tasks = [];
    }
    tapPromise(name,task){
        this.tasks.push(task);
    }
    promise(...args){
        
    }
}

let hook = new ASyncPromiseHook(['name']);
let total = 0;
hook.tapPromise('react',function(name,cb){
   return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('node',data);
            resolve();
        },1000)
   })
});
hook.tapPromise('node',function(data,cb){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('node',data);
            resolve();
        },1000)   
   })
});
hook.promise('jw',function(){
    console.log('end');
});