import { createAction, props } from "@ngrx/store";

export const CustomerType = createAction(
    '[Customer Type Component] select customer type',
    props<{ 
        Type: string 
    }>()
);