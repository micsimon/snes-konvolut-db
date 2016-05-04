class ModuleSupport {

    public static registerService(serviceConstructor:Function):void {
        var serviceName:string = skdb.infrastructure.utils.ObjectUtils.extractServiceName(serviceConstructor);
        window['skdb'].service(serviceName, serviceConstructor);
    }

}