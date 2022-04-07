import { call, put, takeEvery } from 'redux-saga/effects'
import { getCatsSuccess} from './catState';

function* workGetCatsFetch(){
    const cats = yield call(()=> fetch('https://api.thecatapi.com/v1/breeds')); //call is use to call or communicate with an API
    const formattedCats = yield cats.json();
    const formattedCatsShortened = formattedCats.slice(0, 10);
    yield put(getCatsSuccess(formattedCatsShortened));
}
function* catSaga(){
    yield takeEvery('cats/getCatsFetch', workGetCatsFetch); //takeEvery is a generator function that watches the action
}

export default catSaga;