/**
 * 保存当前按下的key的状态
 */

const downKeys = [];

let status = true;

function contains (k) {
  return downKeys.indexOf(k) > -1;
}

export function addKey (keyCode) {
  // 存在的话就不存了
  contains(keyCode) || downKeys.push(keyCode);
};

export function removeKey (keyCode) {

};

export function getKeys () {
  if (!status) {
    throw new Error('当前不能触发keys事件');
  }
  return downKeys.concat();
};
