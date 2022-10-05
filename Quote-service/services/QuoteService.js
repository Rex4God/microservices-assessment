"use strict";
const _axios = require("axios");

exports.getQuotes = async (params) => {
    try {
        const response = await _axios.get("https://type.fit/api/quotes",{
            params
        });

        console.log("Response data", response.data);

        return {data: response.data}
    } catch (e) {
        const error = resolveAxiosError(e);

        return { error: error?.raw?.error || error?.message || e.message,
            data: {} };
    }
};
