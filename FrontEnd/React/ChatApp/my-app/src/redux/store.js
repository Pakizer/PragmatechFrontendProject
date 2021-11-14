import { configureStore } from "@reduxjs/toolkit";
import { MessageSlice } from "./redurcers/messages";

export default configureStore({
  reducer: {
    messageStore: MessageSlice.reducer,
  },
});
