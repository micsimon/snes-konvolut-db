class ModuleSupport {

    public static registerService(serviceConstructor:Function):void {
        var serviceName:string = this.extractServiceName(serviceConstructor);
        window['skdb'].service(serviceName, serviceConstructor);
    }

    private static extractServiceName(serviceConstructor:Function):string {
        var serviceName:string = /function\s(\w*)()/.exec(serviceConstructor.toString())[1];
        return serviceName.charAt(0).toLowerCase() + serviceName.slice(1);
    }
}