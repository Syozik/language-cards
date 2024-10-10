var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var words = "\nwhat's up? - hvad s\u00E5?\nlet's go - skal vi g\u00E5?\ncheers - sk\u00E5l !\nyou're welcome - det var s\u00E5 lidt (it is so little)\nyes please - ja tak\nno thanks - nej tak\nI'm sorry(I did that) - undskyld\nI'm sorry (for you) - det g\u00F8r mig ondt (that does me evil)\ngood morning - godmorgen \ngood night - godnat\nsee you later - vi ses senere (we seen - are later)\ngoodbye - farvel (farewell)\nhow - hvordan\nit; that; the (before adjective) - den; det\nto go; to walk - at g\u00E5 \nit goes; it walks - det g\u00E5r \nhow is it going - hvordan g\u00E5r det?\ngood; well - godt \nit's going well - det g\u00E5r godt\nI - jeg\nyou (singular) - du\nto be called - at hedde\nsound - lyder\nyou are called - du hedder\nwhat - hvad\nwhat's your name - hvad hedder du?\nmy name is - jeg hedder... \nam; is; are - er\ngenius - et geni\nyou're a genius - du er et geni\n1 - en\n2 - to\n3 - tre\n4 - fire \n5  - fem\n6 - seks\n7 - syv\n8 - otte \n9 - ni\n10 - ti\n0 - nul\nfood - mad\nbread - br\u00F8d\nrye bread - rugbr\u00F8d\npasta - pasta\nrice - ris\na potato - en kartoffel\na vegetable - en gr\u00F8ntsag\nfruit - frugt\nmeat - k\u00F8d\nsalad - salat\nan apple - et \u00E6ble\na banana - en banan\nan orange - en appelsin\na lemon - en citron\nsoup - suppe\nan egg - et \u00E6g\ncheese - ost\nchicken - kylling\npork - svinek\u00F8d\nbeef - oksek\u00F8d\nfish - fisk\nwater - vand\ncoffee - kaffe\ntea - te\nbeer - \u00F8l\nwine - vin\nmilk - m\u00E6lk\nsauce - sovs\nbutter - sm\u00F8r\n(to) can; (to) could - at kunne\nto like - at kunne lide\nI like - jeg kan godt lide\nnot - ikke\nI don't like - jeg kan ikke lide\ndelicious - l\u00E6kker\nnice - rart\nto be - at v\u00E6re\nname - navn\nmy, mine - mit\nyour, yours - dit\nlikewise, you too - i lige m\u00E5de\nyou - dig\nto meet - at m\u00F8de\nto say - at sige\nyou, one, we, they - man\nto catch - at fange\none more time - en gang til\nto speak, to talk - at tale\nslow - langsom\nto write down - at skrive ned\nme - mig";
function addWords(words) {
    return __awaiter(this, void 0, void 0, function () {
        var couples, _i, couples_1, couple, _a, en_word, dk_word, res, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    couples = words.trim().split("\n");
                    _i = 0, couples_1 = couples;
                    _b.label = 1;
                case 1:
                    if (!(_i < couples_1.length)) return [3 /*break*/, 6];
                    couple = couples_1[_i];
                    _a = couple.split(" - ").map(function (word) { return word.trim(); }), en_word = _a[0], dk_word = _a[1];
                    if (!(en_word && dk_word)) return [3 /*break*/, 5];
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, fetch("http://localhost:3000/api/addWord", {
                            method: "PUT",
                            body: JSON.stringify({ en_word: en_word, dk_word: dk_word }),
                            headers: {
                                "Content-Type": "application/json",
                            },
                        })];
                case 3:
                    res = _b.sent();
                    if (!res.ok) {
                        console.error("Failed to add word: ".concat(en_word, ". Status: ").concat(res.status));
                    }
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _b.sent();
                    console.error("Error adding word: ".concat(en_word, ". Error: ").concat(error_1.message));
                    return [3 /*break*/, 5];
                case 5:
                    _i++;
                    return [3 /*break*/, 1];
                case 6: return [2 /*return*/];
            }
        });
    });
}
addWords(words);
