import { StateSchema } from "app/providers/StoreProvider";

export const getError = (state: StateSchema) => state.addCommentForm?.error ?? ''
export const getText = (state: StateSchema) => state.addCommentForm?.text || ''