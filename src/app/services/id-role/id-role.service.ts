import { Injectable,EventEmitter} from '@angular/core';

@Injectable()
export class IdRoleService {

	public id=new EventEmitter<any>();
	public role=new EventEmitter<any>();
	public isLoggedIn=new EventEmitter<any>();
	constructor() { }
}
