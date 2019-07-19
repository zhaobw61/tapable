class ASyncSeries { // 钩子是同步的
    constructor(args){
        this.tasks = [];
    }
    tapAsync(name,task){
        this.tasks.push(task);
    }
    callAsync(...args){
        let finalCallback = args.pop();
        let index = 0;
        let next = () =>{
            if(this.tasks.length === index) return finalCallback();
            let task = this.tasks[index++];
            task(...args,next);
        }
        next();
    }
}

let hook = new ASyncSeries(['name']);
let total = 0;
hook.tapAsync('react',function(name,cb){
    setTimeout(()=>{
        console.log('node',data);
        cb();
    },1000)
});
hook.tapAsync('node',function(data,cb){
    setTimeout(()=>{
        console.log('node',data);
        cb();
    },1000)
});
hook.callAsync('jw',function(){
    console.log('end');
});