const gameWidth = gameDom.clientWidth;

class Pipe extends Rectangle{
    constructor(height,top,speed,dom){
        super(52,height,gameWidth,top,speed,0,dom);
    }
    onMove(){
        if(this.left<-this.width){
            // 移除dom
            this.dom.remove();
        }
    }
}
function getRandom(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}
class PipePare{
    constructor(speed){
        this.spaceHeight = 150; //水管之间空隙位置的高度
        this.minHeight = 80;
        this.maxHeight = landTop - this.minHeight - this.spaceHeight;
        const upHeight = getRandom(this.minHeight,this.maxHeight);
        const downHeight = landTop - upHeight - this.spaceHeight;
        const downTop = upHeight+this.spaceHeight;
        const upDom = document.createElement('div');
        upDom.className = 'pipe up'
        const downDom = document.createElement('div');
        downDom.className = 'pipe down'
        this.upPipe = new Pipe(upHeight,0,speed,upDom); //上水管
        this.downPipe = new Pipe(downHeight,downTop,speed,downDom); //下水管
        
        gameDom.appendChild(upDom);
        gameDom.appendChild(downDom);
    }

    // 判断该柱子是否已经移出了视野
    get useLess(){
        return this.upPipe.left < -this.upPipe.width;
        // 返回值是true或false
    }

    move(duration){
        this.upPipe.move(duration);
        this.downPipe.move(duration);
    }
}

class PipePareProducer{
    constructor(speed){
        this.pairs = [];
        this.timer = null;
        this.tick = 1500;
        this.speed = speed;

    }
    startProduce(){
        if(this.timer){
            return;
        }
        this.timer = setInterval(()=>{
            this.pairs.push(new PipePare(this.speed))
            // 移除掉用不到的柱子
            for(let i = 0;i<this.pairs.length;i++){
                let pair = this.pairs[i];
                if(pair.useLess){
                    // 没用的柱子对
                    this.pairs.splice(i,1);
                    i--;
                }
            }
        
        
        },this.tick)
    }
    stopProducer(){
        clearInterval(this.timer);
        this.timer = null;
    }
}

// const producer = new PipePareProducer(-100);
// producer.startProduce(); //开始产生柱子队

// setInterval(()=>{
//     producer.pairs.forEach((pair)=>{
//         pair.move(16/1000)
//     })
// },16)