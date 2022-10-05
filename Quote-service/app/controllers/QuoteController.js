"use strict";
const response = require("../utils/responses");

const quoteService = require("../../services/QuoteService")


exports.getQuotes = async (req, res) => {
    const {
        error,
        data,
        statusCode
    } = await quoteService.getQuotes(req.query);

    if (error) return response.error(res, error, statusCode);

    return response.paginated(res, data, statusCode);
};

