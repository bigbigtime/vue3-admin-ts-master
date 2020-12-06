/**
 * 手机号验证
 * @param {*} value 手机号
 */
/** ts 就是一种强类型语言  */
/**
 * 
 * @param value 
 */
export function checkPhone(value:string):boolean{  // 类型注解：明确我们的参数是什么类型
    let regPhong = /^1[3456789]\d{9}$/;
    return regPhong.test(value);  // boolean
}
/**
 * 密码检验，6-20数字+英文
 */
export function checkPassword(value:string):boolean{
    let regPassword = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
    return regPassword.test(value);
}
/**
 * 验证码，6数字+英文
 */
export function checkCode(value:string):boolean{
    let regCode = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6}$/;
    return regCode.test(value);
}