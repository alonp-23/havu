import { User } from ".";
import { MemeberStatus } from "../constants/member-status";
import { BaseModel } from "./base-model";

export interface Member extends User {
	status: MemeberStatus;
};

export interface Group extends BaseModel {
    name: string;
    members: Member[];
};