function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

/*!
 * numbro.js language configuration
 * language : Russian
 * locale : Russsia
 * author : Anatoli Papirovski : https://github.com/apapirovski
 */

var ruRU = {
    languageTag: "ru-RU",
    delimiters: {
        thousands: " ",
        decimal: ","
    },
    abbreviations: {
        thousand: "тыс.",
        million: "млн",
        billion: "b",
        trillion: "t"
    },
    ordinal: function() {
        // not ideal, but since in Russian it can taken on
        // different forms (masculine, feminine, neuter)
        // this is all we can do
        return ".";
    },
    currency: {
        symbol: "руб.",
        position: "postfix",
        code: "RUB"
    },
    currencyFormat: {
        thousandSeparated: true,
        totalLength: 4,
        spaceSeparated: true,
        average: true
    },
    formats: {
        fourDigits: {
            totalLength: 4,
            spaceSeparated: true,
            average: true
        },
        fullWithTwoDecimals: {
            output: "currency",
            mantissa: 2,
            spaceSeparated: true,
            thousandSeparated: true
        },
        fullWithTwoDecimalsNoCurrency: {
            mantissa: 2,
            thousandSeparated: true
        },
        fullWithNoDecimals: {
            output: "currency",
            spaceSeparated: true,
            thousandSeparated: true,
            mantissa: 0
        }
    }
};

var ruRU$1 = /*@__PURE__*/getDefaultExportFromCjs(ruRU);

export { ruRU$1 as default };
