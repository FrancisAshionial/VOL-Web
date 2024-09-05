/* tslint:disable */
/* eslint-disable */
/**
 * vol
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ExecPost200Response,
  K8sCommandPostRequest,
  K8sLogGet200Response,
  ManualPost200Response,
  YamlPostRequest,
} from '../models/index';
import {
    ExecPost200ResponseFromJSON,
    ExecPost200ResponseToJSON,
    K8sCommandPostRequestFromJSON,
    K8sCommandPostRequestToJSON,
    K8sLogGet200ResponseFromJSON,
    K8sLogGet200ResponseToJSON,
    ManualPost200ResponseFromJSON,
    ManualPost200ResponseToJSON,
    YamlPostRequestFromJSON,
    YamlPostRequestToJSON,
} from '../models/index';

export interface DockerPostRequest {
    imageName?: string;
    dockerfile?: string;
}

export interface ExecPostRequest {
    cmd?: string;
}

export interface K8sCommandPostOperationRequest {
    k8sCommandPostRequest?: K8sCommandPostRequest;
}

export interface K8sLogGetRequest {
    podName: string;
    namespace: string;
}

export interface K8sPodGetRequest {
    podName: string;
    namespace: string;
}

export interface K8sPodStatusGetRequest {
    body?: object;
}

export interface K8sVcjobGetRequest {
    jobName: string;
    namespace: string;
}

export interface K8sVcjobStatusGetRequest {
    body?: object;
}

export interface K8sYamlPostRequest {
    file: Blob;
}

export interface ManualPostRequest {
    file: Blob;
    cmd: string;
    imageName: string;
}

export interface YamlPostOperationRequest {
    yamlPostRequest?: YamlPostRequest;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * 
     * dockerfile
     */
    async dockerPostRaw(requestParameters: DockerPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters['imageName'] != null) {
            formParams.append('imageName', requestParameters['imageName'] as any);
        }

        if (requestParameters['dockerfile'] != null) {
            formParams.append('dockerfile', requestParameters['dockerfile'] as any);
        }

        const response = await this.request({
            path: `/docker`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * 
     * dockerfile
     */
    async dockerPost(requestParameters: DockerPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.dockerPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * CMD
     */
    async execPostRaw(requestParameters: ExecPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExecPost200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters['cmd'] != null) {
            formParams.append('cmd', requestParameters['cmd'] as any);
        }

        const response = await this.request({
            path: `/exec`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ExecPost200ResponseFromJSON(jsonValue));
    }

    /**
     * 
     * CMD
     */
    async execPost(requestParameters: ExecPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExecPost200Response> {
        const response = await this.execPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Command
     */
    async k8sCommandPostRaw(requestParameters: K8sCommandPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/k8s/command`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: K8sCommandPostRequestToJSON(requestParameters['k8sCommandPostRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * 
     * Command
     */
    async k8sCommandPost(requestParameters: K8sCommandPostOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.k8sCommandPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * 114.132.190.117:8081/k8s/log
     */
    async k8sLogGetRaw(requestParameters: K8sLogGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<K8sLogGet200Response>> {
        if (requestParameters['podName'] == null) {
            throw new runtime.RequiredError(
                'podName',
                'Required parameter "podName" was null or undefined when calling k8sLogGet().'
            );
        }

        if (requestParameters['namespace'] == null) {
            throw new runtime.RequiredError(
                'namespace',
                'Required parameter "namespace" was null or undefined when calling k8sLogGet().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['podName'] != null) {
            queryParameters['podName'] = requestParameters['podName'];
        }

        if (requestParameters['namespace'] != null) {
            queryParameters['namespace'] = requestParameters['namespace'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/k8s/log`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => K8sLogGet200ResponseFromJSON(jsonValue));
    }

    /**
     * 
     * 114.132.190.117:8081/k8s/log
     */
    async k8sLogGet(requestParameters: K8sLogGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<K8sLogGet200Response> {
        const response = await this.k8sLogGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * node
     */
    async k8sNodeGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/k8s/node`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * 
     * node
     */
    async k8sNodeGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.k8sNodeGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * 
     * 114.132.190.117:8081/k8s/pod
     */
    async k8sPodGetRaw(requestParameters: K8sPodGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters['podName'] == null) {
            throw new runtime.RequiredError(
                'podName',
                'Required parameter "podName" was null or undefined when calling k8sPodGet().'
            );
        }

        if (requestParameters['namespace'] == null) {
            throw new runtime.RequiredError(
                'namespace',
                'Required parameter "namespace" was null or undefined when calling k8sPodGet().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['podName'] != null) {
            queryParameters['podName'] = requestParameters['podName'];
        }

        if (requestParameters['namespace'] != null) {
            queryParameters['namespace'] = requestParameters['namespace'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/k8s/pod`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * 
     * 114.132.190.117:8081/k8s/pod
     */
    async k8sPodGet(requestParameters: K8sPodGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.k8sPodGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * pod
     */
    async k8sPodStatusGetRaw(requestParameters: K8sPodStatusGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/k8s/pod_status`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'] as any,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * 
     * pod
     */
    async k8sPodStatusGet(requestParameters: K8sPodStatusGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.k8sPodStatusGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * 114.132.190.117:8081/k8s/vcjob
     */
    async k8sVcjobGetRaw(requestParameters: K8sVcjobGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters['jobName'] == null) {
            throw new runtime.RequiredError(
                'jobName',
                'Required parameter "jobName" was null or undefined when calling k8sVcjobGet().'
            );
        }

        if (requestParameters['namespace'] == null) {
            throw new runtime.RequiredError(
                'namespace',
                'Required parameter "namespace" was null or undefined when calling k8sVcjobGet().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['jobName'] != null) {
            queryParameters['jobName'] = requestParameters['jobName'];
        }

        if (requestParameters['namespace'] != null) {
            queryParameters['namespace'] = requestParameters['namespace'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/k8s/vcjob`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * 
     * 114.132.190.117:8081/k8s/vcjob
     */
    async k8sVcjobGet(requestParameters: K8sVcjobGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.k8sVcjobGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * vsjob
     */
    async k8sVcjobStatusGetRaw(requestParameters: K8sVcjobStatusGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/k8s/vcjob/status`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'] as any,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * 
     * vsjob
     */
    async k8sVcjobStatusGet(requestParameters: K8sVcjobStatusGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.k8sVcjobStatusGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * 114.132.190.117:8081/k8s/yaml
     */
    async k8sYamlPostRaw(requestParameters: K8sYamlPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters['file'] == null) {
            throw new runtime.RequiredError(
                'file',
                'Required parameter "file" was null or undefined when calling k8sYamlPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters['file'] != null) {
            formParams.append('file', requestParameters['file'] as any);
        }

        const response = await this.request({
            path: `/k8s/yaml`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * 
     * 114.132.190.117:8081/k8s/yaml
     */
    async k8sYamlPost(requestParameters: K8sYamlPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.k8sYamlPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * 114.132.190.117:8081/manual
     */
    async manualPostRaw(requestParameters: ManualPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ManualPost200Response>> {
        if (requestParameters['file'] == null) {
            throw new runtime.RequiredError(
                'file',
                'Required parameter "file" was null or undefined when calling manualPost().'
            );
        }

        if (requestParameters['cmd'] == null) {
            throw new runtime.RequiredError(
                'cmd',
                'Required parameter "cmd" was null or undefined when calling manualPost().'
            );
        }

        if (requestParameters['imageName'] == null) {
            throw new runtime.RequiredError(
                'imageName',
                'Required parameter "imageName" was null or undefined when calling manualPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters['file'] != null) {
            formParams.append('file', requestParameters['file'] as any);
        }

        if (requestParameters['cmd'] != null) {
            formParams.append('cmd', requestParameters['cmd'] as any);
        }

        if (requestParameters['imageName'] != null) {
            formParams.append('imageName', requestParameters['imageName'] as any);
        }

        const response = await this.request({
            path: `/manual`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ManualPost200ResponseFromJSON(jsonValue));
    }

    /**
     * 
     * 114.132.190.117:8081/manual
     */
    async manualPost(requestParameters: ManualPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ManualPost200Response> {
        const response = await this.manualPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Upload Yaml
     */
    async yamlPostRaw(requestParameters: YamlPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/yaml`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: YamlPostRequestToJSON(requestParameters['yamlPostRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * 
     * Upload Yaml
     */
    async yamlPost(requestParameters: YamlPostOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.yamlPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
