import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { UserService } from "src/app/user.service";

@Injectable()
export class UserEffects {

    loginUser$ = createEffect(() => this.actions$.pipe(
        ofType('[Login Form Component] Login'),
        mergeMap((action) => this.userService.login(action)
            .pipe(
                map(userInfo => ({ type: '[Login API] User Login Success', payload: userInfo })),
                catchError(() => EMPTY),
                tap(() => this.router.navigate(['customer']))
            ))
        )
    );

    registerUsrer$ = createEffect(() => this.actions$.pipe(
        ofType('[Register Form Component] Register'),
        mergeMap((action) => this.userService.register(action)
            .pipe(
                map(regInfo => ({ type: '[Register API] User Register Success', payload: regInfo })),
                catchError(() => EMPTY),
            )
        )
    ))

    constructor(
        private actions$: Actions,
        private userService: UserService,
        private router: Router,
    ) {}
}