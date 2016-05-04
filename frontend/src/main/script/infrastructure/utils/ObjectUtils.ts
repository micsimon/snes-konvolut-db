module skdb {

    export module infrastructure.utils {
        export class ObjectUtils {

            public static extractServiceName(serviceConstructor:Function):string {
                var serviceName:string = /function\s(\w*)()/.exec(serviceConstructor.toString())[1];
                return serviceName.charAt(0).toLowerCase() + serviceName.slice(1);
            }
        }
    }
}