module skdb {

    export module domain {
        export class HomeService {

            static instance:any;

            constructor() {
                HomeService.instance = this;
            }

            public sayMyName(name:string):string {
                return 'Mein Name ist -> ' + name;
            }
        }
    }
}
ModuleSupport.registerService(skdb.domain.HomeService);