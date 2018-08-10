import { ModifierMap } from './config';
import { objToArr } from './utils';

// 当前modifier按键状态
let _modifierFlag = {};
// 初始化所有modifier的状态为false
objToArr(ModifierMap).forEach(k => (_modifierFlag[k] = false));

// 判断当前事件是否是modifier
export function isModifier (e) {
  return objToArr(ModifierMap).find(key => {
    let keyName = ModifierMap[key];
    // 当前_modifierFlag与e属性不同,说明当前是modifier
    return (_modifierFlag[key] && !e[keyName]) ||
      (!_modifierFlag[key] && e[keyName]);
  });
};

export function setModifier (key, type = 'keydown') {
  key && (_modifierFlag[key] = type === 'keydown');
};
