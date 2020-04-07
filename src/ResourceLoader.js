import * as PIXI from 'pixi.js';

export default class ResourceLoader {
    static add(params) {

    }

    static pre(resource, next) {
        return next();
    }

    static use(resource, next) {
        if (!resource.data || !(resource.type === PIXI.LoaderResource.TYPE.JSON)) {
            return next();
        }

        if (resource.data.meta && resource.data.meta.related_multi_packs) {
            resource.data.meta.related_multi_packs.forEach((item) => {
                let itemName = item.replace('.json', '');
                let splittedUrl = resource.url.split('/');
                splittedUrl[splittedUrl.length - 1] = item;
                let itemUrl = splittedUrl.join('/').replace(this.baseUrl, '');
                if (this.resources[itemName] || this.resources[itemUrl]) {
                    return;
                }

                let options = {
                    crossOrigin: resource.crossOrigin,
                    xhrType: PIXI.LoaderResource.XHR_RESPONSE_TYPE.JSON,
                    metadata: null,
                    parentResource: resource,
                    name:item.replace('.json', ''),
                    url:itemUrl
                };
                this.add(options);
            });
            return next();
        }
        return next();
    }
}
