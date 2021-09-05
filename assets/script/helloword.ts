
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = NewComponent
 * DateTime = Sat Sep 04 2021 15:33:43 GMT+0800 (中国标准时间)
 * Author = Keerecles
 * FileBasename = NewComponent.ts
 * FileBasenameNoExtension = NewComponent
 * URL = db://assets/NewComponent.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */
 
@ccclass('NewComponent')
export class NewComponent extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    onLoad () {
        cc.log("Kee onLoad x = " + this.node.position.x);
        this.node.on(cc.Node.EventType.MOUSE_DOWN, this.moveLeft, this);
    }
    start () {
        cc.log("Kee start");
        // [3]
    }
// 
    // update (deltaTime: number) {
        // [4]
  //      cc.log("Kee update " + number);
//    }

    moveLeft() {
        cc.log("Kee moveLeft");
        this.node.setPosition(this.node.position.x-100, 0, 0);
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/zh/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/zh/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/zh/scripting/life-cycle-callbacks.html
 */