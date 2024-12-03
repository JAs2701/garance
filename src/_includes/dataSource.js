const { Curl } = require('node-libcurl');
const fs = require("fs");
const { AssetCache } = require("@11ty/eleventy-fetch");
AssetCache.concurrency = 4;

// Read Files
const site_endpoint = "../_data/site.json";
const curl = new Curl();

module.exports = async function () {



    // read file
    
    /* code */
    console.log(siteURL.ENDPOINT);
    return "test";
}