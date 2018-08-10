import Event from '@hudk/event';
import { isModifier, setModifier } from './modifier';
import { addKey, removeKey, getKeys } from './key-status';

// key manage event, 管理按键按下状态
const KME = new Event();

// callback manage event, 管理用户注册事件 
const CME = new Event();

function onKeyup (e) {

}

// 1.是否是modifier键
// 2.是否是非modifier键
// 3.
function onKeydown (e) {

}

function initEvent () {
  window.addEventListener('keydown', onKeyup, false);
  window.addEventListener('keydown', onKeydown, false);
}

// TODO
const padKeyBoardManage = {
  add (key, cb) {
    event.add(key, cb);
  },
  remove (key, cb) {
    // event.
  }
};

initEvent();

export default padKeyBoardManage;

// class PadKeyBoardManage {
//   constructor (scope) {
//     this.event = new Event();
//     this.scope = scope;
//     initEvent();
//   }
// }

// export default PadKeyBoardManage;
