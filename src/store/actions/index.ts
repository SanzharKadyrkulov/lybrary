import * as BookActionCreators from './book.actions';
import * as WishActionCreators from './wish.actions';

const ActionCreators = { ...BookActionCreators, ...WishActionCreators };
export default ActionCreators;
