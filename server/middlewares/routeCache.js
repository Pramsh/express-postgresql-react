import NodeCache from "node-cache";
import { CacheExpire } from "../utils/globalConst.js";
export const getCache = async(req, res, next) => {
    if(req.method !== "GET"){
        console.log("Cannot cache non-GET methods!");
        return next()
    }
    //check if key exists in cache
    const key = req.originalUrl;
    const cachedResponse = cache.get(key)
    //if key exists, send cached result
    if(cachedResponse){
        console.log("Cache hit for " + key);
        res.send(cachedResponse)
    }else{
        console.log("Cache miss for " + key);
        res.originalSend = res.send
        //get the body sent in the next function and set it in the cache
        res.send = body => {
            cache.set(key, body, req.CacheTimeout ?? CacheExpire)
            res.originalSend(body)
        }
        next()
    }
}

const cache = new NodeCache()