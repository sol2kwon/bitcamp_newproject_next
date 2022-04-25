import { call, delay, put, takeLatest} from 'redux-saga/effects'
import { addArticle,getArticles,modifyArticle,removeArticle } from '../api/articleApi.ts'
import { gameActions } from '../reducers/articleReducer.ts';
interface GameType{
    type: string;
    payload: {
        userid: string, task: string, completed: string
    }
}
interface ArticleSuccessType{
    type: string;
    payload: {
        userid: string
    }
}
function* addTodo(article: ArticleType){
    try{
        alert('진행 3: Saga 내부 진입 성공' + JSON.stringify(article))
        const response: ArticleSuccessType = yield addArticle(article.payload)
        yield put(articleActions.taskSuccess(response))
       
    }catch(error){
        alert('진행 3: Saga 내부 진입 실패')
        yield put(articleActions.taskFailure(error))
    }
}
export function* watchArticle(){
    yield takeLatest(articleActions.taskRequest, addArticle)
}
export function* watchArticle(){
    yield takeLatest(articleActions.taskRequest, getArticles)
}
export function* watchArticle(){
    yield takeLatest(articleActions.taskRequest, modifyArticle)
}
export function* watchArticle(){
    yield takeLatest(articleActions.taskRequest, removeArticle)
}