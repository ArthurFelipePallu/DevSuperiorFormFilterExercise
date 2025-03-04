import { UserInfoDTO } from "../Models/user-info";
import { LOCALSTORAGE_USER_INFO_KEY } from "../Utils/system";

export function saveUserInfoToLocalStorage(userInfo: UserInfoDTO) {
  const stringfiedUserInfo = JSON.stringify(userInfo);
  localStorage.setItem(LOCALSTORAGE_USER_INFO_KEY, stringfiedUserInfo);
}

export function retrieveFromLocalStorage(): UserInfoDTO {
  const stringfiedUserInfo = localStorage.getItem(LOCALSTORAGE_USER_INFO_KEY) || '{}';
    const userInfo = JSON.parse(stringfiedUserInfo) as UserInfoDTO;
    return userInfo;
}

export function clearLocalStorage(){
    localStorage.clear();
}

export function saveResultCount(count : number){
  const userInfo = retrieveFromLocalStorage();
  userInfo.lastSearchResult = count;
  saveUserInfoToLocalStorage(userInfo);
}