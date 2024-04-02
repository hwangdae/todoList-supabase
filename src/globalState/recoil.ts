import { atom } from "recoil";
import { TodoListType } from "../types/Todo";

export const searchState = atom<string>({
    key:'searchState',
    default:'',
})

export const toggleState = atom<boolean>({
    key:'toggleState',
    default:false
})

export const searchkeyword = atom<{titleData:TodoListType[] | null, bodyData :TodoListType[] | null,searchKey:string }>({
    key:'searchKeywordState',
    default: {
        titleData:null,
        bodyData:null,
        searchKey:''
    }
})