// 矩形类：可以移动
// 属性：宽度，高度，横纵坐标，横向速度，纵向速度，对应的dom对象
class Rectangle {
    constructor(width, height, left, top, xSpeed, ySpeed, dom) {
        this.width = width;
        this.height = height;
        this.left = left;
        this.top = top;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.dom = dom;
        this.render();
    }
    render() {
        this.dom.style.width = this.width + 'px';
        this.dom.style.height = this.height + 'px';
        this.dom.style.left = this.left + 'px';
        this.dom.style.top = this.top + 'px';

    }
    // 安装矩形的速度和指定的时间移动矩形,速度单位(像素/秒)
    // x速度正数向右,负数向左,y速度正数向下,负数向上
    /**
     * 
     * @param {时间,单位是秒} duration 
     */
    move(duration) {
        const xDis = this.xSpeed * duration;
        // 横向的距离
        const yDis = this.ySpeed * duration;
        // 纵向的距离
        const newLeft = this.left + xDis;
        const newTop = this.top + yDis;
        this.left = newLeft;
        this.top = newTop;
        
        if(this.onMove){
            // 每次移动后，渲染前，均会调用此方法
            this.onMove();
            //是否存在onMove方法,如果存在,则调用
        }
        
        this.render(); //重新渲染

    }

}
















