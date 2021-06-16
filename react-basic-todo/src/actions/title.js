import { CHANGE_TITLE } from "../constants/actions";

//TODO actionCreator принимает новый тайтл и возвращает обьект
export const changeTitle = title => {
    return {
        type: CHANGE_TITLE,
        title
    }
};