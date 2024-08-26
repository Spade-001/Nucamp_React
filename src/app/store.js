import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../features/user/userSlice';
import { partnersReducer} from '../features/partners/partnersSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { campsitesReducer } from '../features/campsites/campsitesSlice';
import { promotionsReducer} from '../features/promotions/promotionsSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    partners: partnersReducer,
    comments: commentsReducer,
    campsites: campsitesReducer,
    promotions: promotionsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
