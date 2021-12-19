const skyDom = document.querySelector('.sky');
const skyStyle = getComputedStyle(skyDom);
// 拿到skyDom的所有样式

const skyWidth = parseFloat(skyStyle.width);
const skyHeight = parseFloat(skyStyle.height);

class Sky extends Rectangle {
    constructor(speed) {
        super(skyWidth, skyHeight, 0, 0, speed, 0, skyDom);
    }
    onMove(){
        if(this.left<=-skyWidth/2){
            this.left =  0;
        }
    }
}
// var sky = new Sky();

// setInterval(() => {
//     sky.move(16 / 1000);
//     // 16秒除以1000表示的是16毫秒
// }, 16)






