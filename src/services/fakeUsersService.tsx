import React from "react";
import { map, pipe } from "rxjs";
import { ajax } from "rxjs/ajax";

export const FakeUsersService = () => {

}

export const getFakeUsers = () => {
    return ajax("https://randomuser.me/api/?results=20").pipe(
        map((response) => response.response)
    );
}
