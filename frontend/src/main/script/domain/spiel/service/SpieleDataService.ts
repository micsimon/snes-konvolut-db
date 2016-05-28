module skdb {

    export module domain.spiele {
        export class SpieleDataService {

            private $http:ng.IHttpService;

            static instance:any;

            constructor($http:ng.IHttpService) {
                this.$http = $http;
                SpieleDataService.instance = this;
            }

            public getAlleSpiele() {
                return this.$http.get('/spiele').then((response)=> {
                    return response.data;
                });
            }

        }
    }
}
ModuleSupport.registerService(skdb.domain.spiele.SpieleDataService);