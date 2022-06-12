module.exports={
    resolve:{
        fallback:{ crypto: require.resolve("crypto-browserify")},
    }

}
module.exports={
    resolve:{
        fallback:{ http: require.resolve("stream-http") },
    }
}