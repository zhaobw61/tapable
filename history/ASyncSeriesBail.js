class ASyncSeriesBail { // 钩子是同步的
    constructor(args){
        this.tasks = [];
    }
    tapPromise(name,task){
        this.tasks.push(task);
    }
    promise(...args){
        let [frist,...others] = this.tasks;
        return others.reduce((p,n)=>{
            return p.then(() => n(...args));
        },first(...args))
    }
}

let hook = new ASyncSeriesBail(['name']);
let total = 0;
hook.tapPromise('react',function(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('node',data);
            resolve();
        },1000)
    })
});
hook.tapPromise('node',function(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('node',data);
            resolve();
        },1000)
    })
});
hook.promise('jw').then(function(){
    console.log('end');
});