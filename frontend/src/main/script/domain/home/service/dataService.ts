module skdb {

    export module domain {
        //TODO rename class
        export class DataService {

            static instance:any;

            constructor() {
                DataService.instance = this;
            }

            public getDataTest():string {
                return 'Mein Name ist -> ' + name;
            }
        }
    }
}
ModuleSupport.registerService(skdb.domain.HomeService);