import { Injectable } from '@angular/core';
import { ToastrService} from 'ngx-toastr';

@Injectable()
export class AlertService {
    option = {
        progressBar:true,
        positionClass :'toast-bottom-left',
        easeTime:500

    };
    constructor(private toastr:ToastrService) {
        //this.config.progressBar = true;
        //  const option = {progressBar: true};
    }

    showScuess(msg:string,title:string){
        this.toastr.success(msg,title,this.option);
    }
    showFaild(msg:string,title:string){
        this.toastr.error(msg,title,this.option);
    }
    showInfo(msg:string,title:string){
        this.toastr.info(msg,title,this.option);
    }
}