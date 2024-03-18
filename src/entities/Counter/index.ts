export {
    counterActions,
    counterReducer,
    counterReducerName
} from './model/slice/counterSlice';

export type {
    ICounterSchema
} from './model/types/counter';

export { getCount } from './model/selectors/getCount/getCount';