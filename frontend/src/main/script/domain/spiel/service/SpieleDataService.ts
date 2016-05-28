module skdb {

    export module domain.spiel {
        export class DataService {

            private $http:ng.IHttpService;

            static instance:any;

            constructor($http:ng.IHttpService) {
                this.$http = $http;
                DataService.instance = this;
            }

            public getAlleSpiele() {
                return this.$http.get('/spiele').then((response)=> {
                    return response;
                });
            }

        }
    }
}
ModuleSupport.registerService(skdb.domain.spiel.DataService);