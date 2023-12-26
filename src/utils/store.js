import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import commentSlice from "./commentsSlice";

const store = configureStore({
    reducer: {
        app: appSlice,
        comments:commentSlice,
    }
});

export default store;