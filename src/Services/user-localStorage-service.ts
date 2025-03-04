import { UserInfoDTO } from "../Models/user-info";
import * as userRepository from "../LocalStorage/userLocalRepository"


export function SaveUserInfo(userInfo:UserInfoDTO){
    userRepository.saveUserInfoToLocalStorage(userInfo);
}
export function SaveProductListCount(count:number){
    userRepository.saveResultCount(count);
}


export function GetUserInfo(){
    return userRepository.retrieveFromLocalStorage();
}

export function GetUserRepositoryInfo():string
{
    return GetUserInfo().repository;
}

export function ClearUserInfo(){
    userRepository.clearLocalStorage();
}