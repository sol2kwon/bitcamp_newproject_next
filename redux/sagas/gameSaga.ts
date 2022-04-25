import { call, delay, put, takeLatest} from 'redux-saga/effects'
import { addGame,getGame,modifyGame,removeGame } from '../api/gameoApi.ts'
import { gameActions } from '../../redux/reducers/gameReducer.ts';
interface GameType{
    type: string;
    payload: {
        userid: string, task: string, completed: string
    }
}
interface GameSuccessType{
    type: string;
    payload: {
        userid: string
    }
}
function* addTodo(game: GameType){
    try{
        alert('진행 3: Saga 내부 진입 성공' + JSON.stringify(game))
        const response: GameSuccessType = yield addGame(gmae.payload)
        yield put(gameActions.taskSuccess(response))
       
    }catch(error){
        alert('진행 3: Saga 내부 진입 실패')
        yield put(gameActions.taskFailure(error))
    }
}
export function* watchGame(){
    yield takeLatest(gameActions.taskRequest, addGame)
}
export function* watchGame(){
    yield takeLatest(gameActions.taskRequest, getGame)
}
export function* watchGame(){
    yield takeLatest(gameActions.taskRequest, modifyGame)
}
export function* watchGame(){
    yield takeLatest(gameActions.taskRequest, removeGame)
}