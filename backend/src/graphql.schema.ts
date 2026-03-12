
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface Healthcheck {
    __typename?: 'Healthcheck';
    status: boolean;
}

export interface IQuery {
    __typename?: 'IQuery';
    healthcheck(): Healthcheck | Promise<Healthcheck>;
}

type Nullable<T> = T | null;
